import BasicMap from '../BasicMap';

interface SelectMapCoordinatesProps {
  selected: { lat: number; lng: number };
  onChange: (coordinates: { lat: number; lng: number }) => void;
}
export default function SelectMapCoordinates({
  onChange,
  selected
}: SelectMapCoordinatesProps) {
  return (
    <BasicMap
      dimensions={{ width: 500, height: 500 }}
      select={true}
      selected={selected}
      onSelect={onChange}
    />
  );
}
