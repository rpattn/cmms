import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography
} from '@mui/material';
import CommunityDataGrid from '../../components/CustomDatagrid/CommunityDataGrid';
import type { CustomDatagridColumn } from '../../components/CustomDatagrid';
import {
  GridRenderCellParams
} from '@mui/x-data-grid';
import NoRowsMessageWrapper from '../../components/NoRowsMessageWrapper';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import PriorityWrapper from '../../components/PriorityWrapper';
import { UserMiniDTO } from '../../../../models/user';
import UserAvatars from '../../components/UserAvatars';
import { LocationMiniDTO } from '../../../../models/owns/location';
import WorkOrder from '../../../../models/owns/workOrder';
import Category from '../../../../models/owns/category';
import { AssetMiniDTO } from '../../../../models/owns/asset';
import { dayDiff } from '../../../../utils/dates';
import File from '../../../../models/owns/file';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { CompanySettingsContext } from '../../../../contexts/CompanySettingsContext';

export interface Filter {
  key: string;
  value: string | number | boolean;
}
interface WOModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  columns: string[];
  filters: Filter[];
}
export default function WOModal({
  open,
  onClose,
  title,
  columns
}: WOModalProps) {
  const { t }: { t: any } = useTranslation();
  const { getFormattedDate, getUserNameById } = useContext(
    CompanySettingsContext
  );

  const defaultColumns: CustomDatagridColumn[] = [
    {
      field: 'id',
      headerName: t('id'),
      description: t('id')
    },
    {
      field: 'status',
      headerName: t('status'),
      description: t('status'),
      width: 150,
      renderCell: (params: GridRenderCellParams<WorkOrder, string>) => (
        <Box display="flex" flexDirection="row" justifyContent="center">
          <CircleTwoToneIcon
            fontSize="small"
            color={
              params.value === 'IN_PROGRESS'
                ? 'success'
                : params.value === 'ON_HOLD'
                ? 'warning'
                : params.value === 'COMPLETE'
                ? 'info'
                : 'secondary'
            }
          />
          <Typography sx={{ ml: 1 }}>{t(params.value)}</Typography>
        </Box>
      )
    },
    {
      field: 'title',
      headerName: t('title'),
      description: t('title'),
      width: 150,
      renderCell: (params: GridRenderCellParams<WorkOrder, string>) => (
        <Box sx={{ fontWeight: 'bold' }}>{params.value}</Box>
      )
    },

    {
      field: 'priority',
      headerName: t('priority'),
      description: t('priority'),
      width: 150,
      renderCell: (params: GridRenderCellParams<WorkOrder, string>) => (
        <PriorityWrapper priority={params.value} />
      )
    },
    {
      field: 'description',
      headerName: t('description'),
      description: t('description'),
      width: 300
    },
    {
      field: 'primaryUser',
      headerName: t('worker'),
      description: t('worker'),
      width: 170,
      renderCell: (params: GridRenderCellParams<UserMiniDTO>) =>
        params.value ? <UserAvatars users={[params.value]} /> : null
    },
    {
      field: 'assignedTo',
      headerName: t('assigned_to'),
      description: t('assigned_to'),
      width: 170,
      renderCell: (params: GridRenderCellParams<UserMiniDTO[]>) => (
        <UserAvatars users={params.value} />
      )
    },
    {
      field: 'location',
      headerName: t('location_name'),
      description: t('location_name'),
      width: 150,
      valueGetter: (value: LocationMiniDTO | null) => value?.name ?? null,
      uiConfigKey: 'locations'
    },
    {
      field: 'locationAddress',
      headerName: t('location_address'),
      description: t('location_address'),
      width: 150,
      valueGetter: (_value: null, row: WorkOrder) => row.location?.address,
      uiConfigKey: 'locations'
    },
    {
      field: 'category',
      headerName: t('category'),
      description: t('category'),
      width: 150,
      valueGetter: (value: Category | null) => value?.name ?? null
    },
    {
      field: 'asset',
      headerName: t('asset'),
      description: t('asset'),
      width: 150,
      valueGetter: (value: AssetMiniDTO | null) => value?.name ?? null
    },
    {
      field: 'daysSinceCreated',
      headerName: t('days_since_creation'),
      description: t('days_since_creation'),
      width: 150,
      valueGetter: (_value: null, row: WorkOrder) =>
        dayDiff(new Date(), new Date(row.createdAt))
    },
    {
      field: 'files',
      headerName: t('files'),
      description: t('files'),
      width: 150,
      valueGetter: (value: File[] | null) => (value ? value.length : 0)
    },
    {
      field: 'requestedBy',
      headerName: t('requested_by'),
      description: t('requested_by'),
      width: 150,
      valueGetter: (_value: null, row: WorkOrder) =>
        getUserNameById(row.parentRequest?.createdBy)
    },
    {
      field: 'completedOn',
      headerName: t('completed_on'),
      description: t('completed_on'),
      width: 150,
      valueGetter: (value: string | null) => getFormattedDate(value)
    },
    {
      field: 'updatedAt',
      headerName: t('updated_at'),
      description: t('updated_at'),
      width: 150,
      valueGetter: (value: string | null) => getFormattedDate(value)
    },
    {
      field: 'createdAt',
      headerName: t('created_at'),
      description: t('created_at'),
      width: 150,
      valueGetter: (value: string | null) => getFormattedDate(value)
    }
  ];

  const getColumns = (): GridColDef[] => {
    let result: GridColDef[];
    result = defaultColumns.filter((column) => columns.includes(column.field));
    return result;
  };
  return (
    <Dialog fullWidth maxWidth="lg" open={open} onClose={onClose}>
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          p: 3
        }}
      >
        <Box sx={{ width: '95%' }}>
          <CommunityDataGrid
            columns={getColumns()}
            notClickable
            rows={[]}
            loading={false}
            components={{
              NoRowsOverlay: () => (
                <NoRowsMessageWrapper
                  message={t('no_wo_found')}
                  action={null}
                />
              )
            }}
            initialState={{
              columns: {
                columnVisibilityModel: {}
              }
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
}
