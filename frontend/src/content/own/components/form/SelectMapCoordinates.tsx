import { Box, Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import BasicMap from '../BasicMap';

interface SelectMapCoordinatesProps {
  selected?: { lat: number; lng: number };
  onChange: (coordinates: { lat: number; lng: number }) => void;
}

const isValidLat = (v: number) => !Number.isNaN(v) && v >= -90 && v <= 90;
const isValidLng = (v: number) => !Number.isNaN(v) && v >= -180 && v <= 180;

export default function SelectMapCoordinates({
  onChange,
  selected
}: SelectMapCoordinatesProps) {
  const { t }: { t: any } = useTranslation();

  const [latInput, setLatInput] = useState<string>('');
  const [lngInput, setLngInput] = useState<string>('');

  useEffect(() => {
    if (selected && typeof selected.lat === 'number' && typeof selected.lng === 'number') {
      setLatInput(String(selected.lat));
      setLngInput(String(selected.lng));
    }
  }, [selected?.lat, selected?.lng]);

  const tryCommit = (latStr: string, lngStr: string) => {
    const lat = parseFloat(latStr);
    const lng = parseFloat(lngStr);
    if (isValidLat(lat) && isValidLng(lng)) {
      onChange({ lat, lng });
    }
  };

  return (
    <Box>
      <BasicMap
        dimensions={{ width: 500, height: 500 }}
        select={true}
        selected={selected}
        onSelect={(coords) => {
          setLatInput(String(coords.lat));
          setLngInput(String(coords.lng));
          onChange(coords);
        }}
      />
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label={t('latitude')}
            placeholder={t('latitude')}
            type="number"
            inputProps={{ step: 'any', min: -90, max: 90 }}
            value={latInput}
            onChange={(e) => {
              const v = e.target.value;
              setLatInput(v);
              tryCommit(v, lngInput);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label={t('longitude')}
            placeholder={t('longitude')}
            type="number"
            inputProps={{ step: 'any', min: -180, max: 180 }}
            value={lngInput}
            onChange={(e) => {
              const v = e.target.value;
              setLngInput(v);
              tryCommit(latInput, v);
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
