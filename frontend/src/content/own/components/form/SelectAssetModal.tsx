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
import { getAssetsMini, resetAssetsHierarchy } from '../../../../slices/asset';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ReplayTwoToneIcon from '@mui/icons-material/ReplayTwoTone';
import NoRowsMessageWrapper from '../NoRowsMessageWrapper';
import { usePrevious } from '../../../../hooks/usePrevious';
import { AssetMiniDTO } from '../../../../models/owns/asset';

interface SelectAssetModalProps {
  open: boolean;
  onClose: () => void;
  onSelect: (assets: AssetMiniDTO[]) => void;
  excludedAssetIds?: number[];
  locationId?: number;
  maxSelections?: number;
  initialSelectedAssets?: AssetMiniDTO[];
}

type IRow = AssetMiniDTO & { hierarchy: number[]; hasChildren: boolean };

const getAssetRows = (assets: AssetMiniDTO[]): IRow[] => {
  const assetsByParent: { [key: number]: number[] } = {};
  const assetMap: { [key: number]: AssetMiniDTO } = {};
  assets.forEach((asset) => {
    assetMap[asset.id] = asset;
  });
  assets.forEach((asset) => {
    if (asset.parentId) {
      if (!assetsByParent[asset.parentId]) {
        assetsByParent[asset.parentId] = [];
      }
      assetsByParent[asset.parentId].push(asset.id);
    }
  });
  const buildHierarchy = (assetId: number): number[] => {
    const hierarchy: number[] = [];
    let currentAsset = assetMap[assetId];
    hierarchy.unshift(currentAsset.id);
    while (currentAsset.parentId && !hierarchy.includes(currentAsset.parentId)) {
      hierarchy.unshift(currentAsset.parentId);
      currentAsset = assetMap[currentAsset.parentId];
    }
    return hierarchy;
  };
  return assets.map((asset) => {
    const hierarchy = buildHierarchy(asset.id);
    return {
      ...asset,
      hierarchy,
      hasChildren: !!assetsByParent[asset.id]
    };
  });
};

const SelectAssetModal: React.FC<SelectAssetModalProps> = ({
  open,
  onClose,
  onSelect,
  excludedAssetIds = [],
  locationId,
  maxSelections,
  initialSelectedAssets = []
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loadingGet, assetsMini } = useSelector((state) => state.assets);
  const initialized = useRef<boolean>(false);
  const single = maxSelections === 1;

  const assetsHierarchy: IRow[] = useMemo(
    () => getAssetRows(assetsMini),
    [assetsMini.length]
  );

  const [selectedAssets, setSelectedAssets] = useState<AssetMiniDTO[]>(
    initialSelectedAssets
  );
  const [selectionModel, setSelectionModel] = useState<number[]>(
    initialSelectedAssets.map((asset) => asset.id)
  );
  const previousInitialSelectedAssets = usePrevious(initialSelectedAssets);

  const handleReset = (callApi: boolean) => {
    if (callApi) {
      dispatch(getAssetsMini());
    }
  };

  useEffect(() => {
    if (
      open &&
      (!initialized.current ||
        JSON.stringify(previousInitialSelectedAssets) !==
          JSON.stringify(initialSelectedAssets))
    ) {
      initialized.current = true;
      handleReset(true);
      if (initialSelectedAssets?.length) {
        setSelectedAssets(initialSelectedAssets);
        setSelectionModel(initialSelectedAssets.map((asset) => asset.id));
      } else {
        setSelectedAssets([]);
        setSelectionModel([]);
      }
    }
  }, [open, initialSelectedAssets, previousInitialSelectedAssets]);

  useEffect(() => {
    if (single && open) {
      setSelectedAssets([]);
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
      setSelectedAssets(
        next.map((sid) => assetsMini.find((a) => a.id === sid)!).filter(Boolean) as AssetMiniDTO[]
      );
    } else {
      const asset = assetsMini.find((a) => a.id === id);
      if (asset) {
        setSelectionModel([id]);
        setSelectedAssets([asset]);
        onSelect([asset]);
        onClose();
      }
    }
  };

  const handleConfirmSelection = () => {
    onSelect(selectedAssets);
    onClose();
  };

  const handleRemoveSelection = (assetId: number) => {
    const updatedSelectionModel = selectionModel.filter((id) => id !== assetId);
    setSelectionModel(updatedSelectionModel);
    const updatedSelectedAssets = selectedAssets.filter(
      (asset) => asset.id !== assetId
    );
    setSelectedAssets(updatedSelectedAssets);
  };

  const filteredAssetsHierarchy = assetsHierarchy.filter(
    (asset) =>
      !excludedAssetIds.includes(asset.id) &&
      (locationId ? asset.locationId === locationId : true)
  );

  const byParent: Record<number | 'root', AssetMiniDTO[]> = { root: [] } as any;
  filteredAssetsHierarchy.forEach((a) => {
    const key = (a.parentId ?? 'root') as any;
    if (!byParent[key]) (byParent as any)[key] = [];
    (byParent as any)[key].push(a);
  });

  const renderTree = (node: AssetMiniDTO): React.ReactNode => {
    const children = (byParent as any)[node.id] || [];
    const checked = selectionModel.includes(node.id);
    const disabled = excludedAssetIds.includes(node.id);
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
        {children.map((child: AssetMiniDTO) => renderTree(child))}
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
        <Typography variant="h4">{t('select_asset')}</Typography>
        <IconButton onClick={() => handleReset(true)} color="primary" size="small">
          <ReplayTwoToneIcon />
        </IconButton>
      </DialogTitle>

      {selectedAssets.length > 0 && (
        <Box sx={{ px: 2, py: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {selectedAssets.map((asset) => (
            <Chip
              key={asset.id}
              label={`${asset.customId}: ${asset.name}`}
              onDelete={() => handleRemoveSelection(asset.id)}
              color="primary"
              variant="outlined"
            />
          ))}
        </Box>
      )}

      <DialogContent dividers sx={{ p: 1, height: '60vh' }}>
        <Box sx={{ height: '100%', width: '100%', overflow: 'auto' }}>
          {filteredAssetsHierarchy.length === 0 ? (
            <NoRowsMessageWrapper
              message={t('noRows.asset.message')}
              action={t('noRows.asset.action')}
            />
          ) : (
            <TreeView
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              multiSelect
              selected={selectionModel.map(String)}
            >
              {(byParent as any)['root']?.map((root: AssetMiniDTO) => renderTree(root))}
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
            disabled={selectedAssets.length === 0}
          >
            {t('select')} ({selectedAssets.length})
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default SelectAssetModal;

