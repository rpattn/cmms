import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography
} from '@mui/material';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from '../../../../store';
import { getLocationsMini, resetLocationsHierarchy } from '../../../../slices/location';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ReplayTwoToneIcon from '@mui/icons-material/ReplayTwoTone';
import NoRowsMessageWrapper from '../NoRowsMessageWrapper';
import { usePrevious } from '../../../../hooks/usePrevious';
import { LocationMiniDTO } from '../../../../models/owns/location';

interface SelectLocationModalProps {
  open: boolean;
  onClose: () => void;
  onSelect: (locations: LocationMiniDTO[]) => void;
  excludedLocationIds?: number[];
  maxSelections?: number;
  initialSelectedLocations?: LocationMiniDTO[];
}

type IRow = LocationMiniDTO & { hierarchy: number[]; hasChildren: boolean };

const getLocationRows = (locations: LocationMiniDTO[]): IRow[] => {
  const locationsByParent: { [key: number]: number[] } = {};
  const locationMap: { [key: number]: LocationMiniDTO } = {};
  locations.forEach((location) => {
    locationMap[location.id] = location;
  });
  locations.forEach((location) => {
    if (location.parentId) {
      if (!locationsByParent[location.parentId]) {
        locationsByParent[location.parentId] = [];
      }
      locationsByParent[location.parentId].push(location.id);
    }
  });
  const buildHierarchy = (locationId: number): number[] => {
    const hierarchy: number[] = [];
    let currentLocation = locationMap[locationId];
    hierarchy.unshift(currentLocation.id);
    while (currentLocation.parentId && !hierarchy.includes(currentLocation.parentId)) {
      hierarchy.unshift(currentLocation.parentId);
      currentLocation = locationMap[currentLocation.parentId];
    }
    return hierarchy;
  };
  return locations.map((location) => {
    const hierarchy = buildHierarchy(location.id);
    return {
      ...location,
      hierarchy,
      hasChildren: !!locationsByParent[location.id]
    };
  });
};

const SelectLocationModal: React.FC<SelectLocationModalProps> = ({
  open,
  onClose,
  onSelect,
  excludedLocationIds = [],
  maxSelections,
  initialSelectedLocations = []
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loadingGet, locationsMini } = useSelector((state) => state.locations);
  const initialized = useRef<boolean>(false);
  const single = maxSelections === 1;

  const locationsHierarchy: IRow[] = useMemo(
    () => getLocationRows(locationsMini),
    [locationsMini.length]
  );

  const [selectedLocations, setSelectedLocations] = useState<LocationMiniDTO[]>(
    initialSelectedLocations
  );
  const [selectionModel, setSelectionModel] = useState<number[]>(
    initialSelectedLocations.map((location) => location.id)
  );
  const previousInitialSelectedLocations = usePrevious(initialSelectedLocations);

  const handleReset = (callApi: boolean) => {
    if (callApi) {
      dispatch(getLocationsMini());
    }
  };

  useEffect(() => {
    if (
      open &&
      (!initialized.current ||
        JSON.stringify(previousInitialSelectedLocations) !==
          JSON.stringify(initialSelectedLocations))
    ) {
      initialized.current = true;
      handleReset(true);
      if (initialSelectedLocations?.length) {
        setSelectedLocations(initialSelectedLocations);
        setSelectionModel(initialSelectedLocations.map((l) => l.id));
      } else {
        setSelectedLocations([]);
        setSelectionModel([]);
      }
    }
  }, [open, initialSelectedLocations, previousInitialSelectedLocations]);

  useEffect(() => {
    if (single && open) {
      setSelectedLocations([]);
      setSelectionModel([]);
    }
  }, [open]);

  const toggleSelection = (id: number) => {
    if (!single) {
      const exists = selectionModel.includes(id);
      let next: number[];
      if (exists) {
        next = selectionModel.filter((x) => x !== id);
      } else {
        if (maxSelections && selectionModel.length >= maxSelections) return;
        next = [...selectionModel, id];
      }
      setSelectionModel(next);
      setSelectedLocations(
        next.map((sid) => locationsMini.find((l) => l.id === sid)!).filter(Boolean) as LocationMiniDTO[]
      );
    } else {
      const loc = locationsMini.find((l) => l.id === id);
      if (loc) {
        setSelectionModel([id]);
        setSelectedLocations([loc]);
        onSelect([loc]);
        onClose();
      }
    }
  };

  const handleConfirmSelection = () => {
    onSelect(selectedLocations);
    onClose();
  };

  const handleRemoveSelection = (locationId: number) => {
    const updatedSelectionModel = selectionModel.filter((id) => id !== locationId);
    setSelectionModel(updatedSelectionModel);
    const updatedSelectedLocations = selectedLocations.filter((l) => l.id !== locationId);
    setSelectedLocations(updatedSelectedLocations);
  };

  const filteredLocationsHierarchy = locationsHierarchy.filter(
    (location) => !excludedLocationIds.includes(location.id)
  );

  const byParent: Record<number | 'root', LocationMiniDTO[]> = { root: [] } as any;
  filteredLocationsHierarchy.forEach((l) => {
    const key = (l.parentId ?? 'root') as any;
    if (!byParent[key]) (byParent as any)[key] = [];
    (byParent as any)[key].push(l);
  });

  const renderTree = (node: LocationMiniDTO): React.ReactNode => {
    const children = (byParent as any)[node.id] || [];
    const checked = selectionModel.includes(node.id);
    const disabled = excludedLocationIds.includes(node.id);
    return (
      <TreeItem
        key={node.id}
        nodeId={String(node.id)}
        label={
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={checked}
                disabled={disabled || (single && selectionModel.length > 0 && !checked)}
                onChange={() => toggleSelection(node.id)}
                onClick={(e) => e.stopPropagation()}
              />
            }
            label={`${node.customId}: ${node.name}`}
            onClick={(e) => e.stopPropagation()}
          />
        }
      >
        {children.map((child: LocationMiniDTO) => renderTree(child))}
      </TreeItem>
    );
  };

  return (
    <Dialog fullWidth maxWidth="md" open={open} onClose={onClose}>
      <DialogTitle
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Typography variant="h4">{t('select_location')}</Typography>
        <IconButton onClick={() => handleReset(true)} color="primary" size="small">
          <ReplayTwoToneIcon />
        </IconButton>
      </DialogTitle>

      {selectedLocations.length > 0 && (
        <Box sx={{ px: 2, py: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {selectedLocations.map((l) => (
            <Chip
              key={l.id}
              label={`${l.customId}: ${l.name}`}
              onDelete={() => handleRemoveSelection(l.id)}
              color="primary"
              variant="outlined"
            />
          ))}
        </Box>
      )}

      <DialogContent dividers sx={{ p: 1, height: '60vh' }}>
        <Box sx={{ height: '100%', width: '100%', overflow: 'auto' }}>
          {filteredLocationsHierarchy.length === 0 ? (
            <NoRowsMessageWrapper
              message={t('noRows.location.message')}
              action={t('noRows.location.action')}
            />
          ) : (
            <TreeView
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              multiSelect
              selected={selectionModel.map(String)}
            >
              {(byParent as any)['root']?.map((root: LocationMiniDTO) => renderTree(root))}
            </TreeView>
          )}
        </Box>
      </DialogContent>
      {!single && (
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={onClose} color="secondary">
            {t('cancel')}
          </Button>
          <Button
            onClick={handleConfirmSelection}
            color="primary"
            variant="contained"
            disabled={selectedLocations.length === 0}
          >
            {t('select')} ({selectedLocations.length})
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default SelectLocationModal;

