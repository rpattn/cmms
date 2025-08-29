import React, { useEffect, useMemo, useState } from 'react';
import { Box, Link, Typography } from '@mui/material';
import {
  MapContainer,
  TileLayer,
  Marker as LeafletMarker,
  Popup,
  useMap
} from 'react-leaflet';
import L, { LatLngBoundsExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Location {
  id: number;
  title: string;
  address: string;
  coordinates: { lat: number; lng: number };
}

interface MapProps {
  dimensions?: { width: number; height: number };
  locations?: Location[];
  select?: boolean;
  selected?: { lat: number; lng: number };
  onSelect?: (coordinates: { lat: number; lng: number }) => void;
}

// Custom red marker icon matching existing app assets
const markerIcon = L.icon({
  iconUrl: '/static/images/markers/red.png',
  iconSize: [25, 25],
  iconAnchor: [12, 25]
});

function FitBounds({ points }: { points: { lat: number; lng: number }[] }) {
  const map = useMap();
  useEffect(() => {
    if (!points?.length) return;
    const bounds: LatLngBoundsExpression = points.map((p) => [p.lat, p.lng]);
    try {
      map.fitBounds(bounds, { padding: [20, 20] });
    } catch (e) {
      // ignore fit errors
    }
  }, [map, points]);
  return null;
}

export default function BasicMap({
  dimensions,
  locations = [],
  select,
  selected,
  onSelect
}: MapProps) {
  const defaultCenter = useMemo(() => ({ lat: 31.1728205, lng: -7.3362482 }), []);
  const [selectedCoordinates, setSelectedCoordinates] = useState<
    { lat: number; lng: number } | undefined
  >(undefined);

  // derive initial center
  const center = selected || locations[0]?.coordinates || defaultCenter;

  // Click handler via map event layer
  function ClickCatcher() {
    const map = useMap();
    useEffect(() => {
      const onClick = (e: L.LeafletMouseEvent) => {
        if (select && onSelect) {
          const coords = { lat: e.latlng.lat, lng: e.latlng.lng };
          setSelectedCoordinates(coords);
          onSelect(coords);
        }
      };
      map.on('click', onClick);
      return () => {
        map.off('click', onClick);
      };
    }, [map]);
    return null;
  }

  return (
    <div
      style={{
        width: dimensions?.width ?? 500,
        height: dimensions?.height ?? 500
      }}
    >
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={6}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {!select && locations.length > 0 && (
          <FitBounds points={locations.map((l) => l.coordinates)} />
        )}

        {!select && (
          <>
            {locations.map((location) => (
              <LeafletMarker
                key={location.id}
                position={[location.coordinates.lat, location.coordinates.lng]}
                title={location.title}
                icon={markerIcon}
              >
                <Popup>
                  <Box>
                    <Link
                      variant="h6"
                      color="primary"
                      href={`/app/locations/${location.id}`}
                    >
                      {location.title}
                    </Link>
                    <Typography variant="subtitle1">{location.address}</Typography>
                  </Box>
                </Popup>
              </LeafletMarker>
            ))}
          </>
        )}

        {select && (
          <>
            <ClickCatcher />
            {(selectedCoordinates || selected) && (
              <LeafletMarker
                position={[
                  (selectedCoordinates || selected)!.lat,
                  (selectedCoordinates || selected)!.lng
                ]}
                icon={markerIcon}
              />
            )}
          </>
        )}
      </MapContainer>
    </div>
  );
}

