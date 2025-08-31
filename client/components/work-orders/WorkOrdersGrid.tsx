"use client";

import { DataGrid, GridColDef, GridPaginationModel, GridSortModel } from '@mui/x-data-grid';
import { Chip, IconButton, Menu, MenuItem, TextField } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMemo, useCallback, useEffect, useRef, useState } from 'react';
import { useI18n } from '@/components/providers/I18nProvider';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import OpenInNewTwoToneIcon from '@mui/icons-material/OpenInNewTwoTone';
import { api } from '@/lib/api';

export type WorkOrderRow = {
  id: number;
  title?: string;
  description?: string;
  priority?: string;
  status?: string;
  dueDate?: string;
  createdAt?: string;
  updatedAt?: string;
  completedOn?: string;
};

export default function WorkOrdersGrid({
  rows,
  page,
  pageSize,
  rowCount,
  q,
  loading,
  onChangePagination,
  onChangeSort,
  onOpenDetails,
  onEdit,
  onAfterAction
}: {
  rows: WorkOrderRow[];
  page: number;
  pageSize: number;
  rowCount: number;
  q?: string | null;
  loading?: boolean;
  onChangePagination?: (model: GridPaginationModel) => void;
  onChangeSort?: (model: GridSortModel) => void;
  onOpenDetails?: (id: number) => void;
  onEdit?: (id: number) => void;
  onAfterAction?: () => void;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const mountedRef = useRef(false);
  const [isMounted, setIsMounted] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    mountedRef.current = true;
    setIsMounted(true);
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const columns: GridColDef[] = useMemo(
    () => [
      { field: 'id', headerName: t('id_col'), width: 120 },
      { field: 'title', headerName: t('title_col'), flex: 1, minWidth: 200 },
      {
        field: 'status',
        headerName: t('status') as string,
        width: 170,
        renderCell: (params: any) => {
          const id = params.row.id as number;
          const [val, setVal] = useState<string>((params?.row?.status as string) || 'OPEN');
          const color =
            val === 'IN_PROGRESS' ? 'success' : val === 'ON_HOLD' ? 'warning' : val === 'COMPLETE' ? 'info' : 'default';
          const onChange = async (newVal: string) => {
            const prev = val;
            setVal(newVal);
            try {
              await api(`work-orders/${id}/change-status`, { method: 'PATCH', body: JSON.stringify({ status: newVal }) });
              onAfterAction?.();
            } catch (e) {
              console.error(e);
              alert('Failed to update status');
              setVal(prev);
            }
          };
          return (
            <TextField
              select
              size="small"
              value={val}
              onChange={(e) => onChange(e.target.value)}
              sx={{ minWidth: 150 }}
            >
              {['OPEN','IN_PROGRESS','ON_HOLD','COMPLETE'].map((s) => (
                <MenuItem key={s} value={s}>{s}</MenuItem>
              ))}
            </TextField>
          );
        }
      },
      {
        field: 'priority',
        headerName: t('priority_col'),
        width: 140,
        renderCell: (params: any) => {
          const v = (params.value as string) || 'NONE';
          const color = v === 'HIGH' ? 'error' : v === 'MEDIUM' ? 'warning' : v === 'LOW' ? 'success' : 'default';
          return <Chip label={v} color={color as any} size="small" />;
        }
      },
      {
        field: 'description',
        headerName: t('description') as string,
        flex: 1,
        minWidth: 220,
        renderCell: (params: any) => (
          <span>{params?.row?.description || ''}</span>
        )
      },
      {
        field: 'dueDate',
        headerName: t('due_col'),
        width: 160,
        renderCell: (params: any) => {
          const v = params?.row?.dueDate as string | undefined;
          return <span>{v ? new Date(v).toLocaleDateString() : ''}</span>;
        }
      }
      ,
      {
        field: 'updatedAt',
        headerName: t('updated_at') as string,
        width: 170,
        renderCell: (params: any) => {
          const v = params?.row?.updatedAt as string | undefined;
          return <span>{v ? new Date(v).toLocaleString() : ''}</span>;
        }
      },
      {
        field: 'createdAt',
        headerName: t('created_at') as string,
        width: 170,
        renderCell: (params: any) => {
          const v = params?.row?.createdAt as string | undefined;
          return <span>{v ? new Date(v).toLocaleString() : ''}</span>;
        }
      },
      {
        field: 'actions',
        headerName: '',
        sortable: false,
        filterable: false,
        width: 70,
        renderCell: (params) => {
          const [anchor, setAnchor] = useState<null | HTMLElement>(null);
          const open = Boolean(anchor);
          const id = params.row.id as number;
          return (
            <>
              <IconButton size="small" onClick={(e) => setAnchor(e.currentTarget)} aria-label="row actions">
                <MoreVertTwoToneIcon fontSize="small" />
              </IconButton>
              <Menu anchorEl={anchor} open={open} onClose={() => setAnchor(null)}>
                <MenuItem onClick={() => { setAnchor(null); router.push(`/app/work-orders/${id}`); }}>
                  <OpenInNewTwoToneIcon fontSize="small" style={{ marginRight: 8 }} />
                  View
                </MenuItem>
                <MenuItem onClick={() => { setAnchor(null); onEdit ? onEdit(id) : router.push(`/app/work-orders/${id}`); }}>
                  <EditTwoToneIcon fontSize="small" style={{ marginRight: 8 }} />
                  Edit
                </MenuItem>
                <MenuItem onClick={async () => {
                  setAnchor(null);
                  if (!confirm('Delete this work order?')) return;
                  try { await api(`work-orders/${id}`, { method: 'DELETE' });
                    // naive refresh by updating query param
                    const params = new URLSearchParams(searchParams.toString());
                    router.replace(`${pathname}?${params.toString()}`);
                  } catch (e) { alert('Delete failed'); }
                }}>
                  <DeleteTwoToneIcon fontSize="small" style={{ marginRight: 8 }} />
                  Delete
                </MenuItem>
              </Menu>
            </>
          );
        }
      }
    ],
    [t]
  );

  const onPaginationModelChange = useCallback((model: GridPaginationModel) => {
    // DataGrid may fire on mount; avoid side-effects before mounted
    if (!mountedRef.current) return;
    if (onChangePagination) {
      onChangePagination(model);
      return;
    }
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(model.page));
    params.set('size', String(model.pageSize));
    if (q) params.set('q', q);
    const url = `${pathname}?${params.toString()}`;
    setTimeout(() => router.push(url), 0);
  }, [searchParams, q, pathname, router, onChangePagination]);

  const onSortModelChange = useCallback((model: GridSortModel) => {
    if (!mountedRef.current) return;
    if (onChangeSort) {
      onChangeSort(model);
      return;
    }
    const params = new URLSearchParams(searchParams.toString());
    if (model.length) {
      params.set('sort', `${model[0].field},${model[0].sort || 'asc'}`);
    } else {
      params.delete('sort');
    }
    const url = `${pathname}?${params.toString()}`;
    setTimeout(() => router.push(url), 0);
  }, [searchParams, pathname, router, onChangeSort]);

  const onRowClick = (params: any) => {
    const id = Number(params.id);
    if (onOpenDetails) onOpenDetails(id);
    else router.push(`/app/work-orders/${id}`);
  };

  // Avoid mounting DataGrid until after first client mount to
  // prevent mount-time callbacks causing state updates warnings.
  if (!isMounted) {
    return (
      <div style={{ height: 600, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div aria-busy="true" aria-live="polite" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              width: 18,
              height: 18,
              border: '2px solid var(--mui-palette-divider)',
              borderTopColor: 'var(--mui-palette-text-secondary)',
              borderRadius: '50%',
              display: 'inline-block',
              animation: 'wo-spin 0.8s linear infinite'
            }}
          />
          <span style={{ color: 'var(--mui-palette-text-secondary)' }}>{t('loading')}</span>
        </div>
        <style>{`@keyframes wo-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        sx={{
          bgcolor: 'background.paper',
          color: 'text.primary',
          borderColor: 'divider',
          '& .MuiDataGrid-columnHeaders': {
            bgcolor: 'background.default'
          }
        }}
        loading={!!loading}
        rows={rows}
        columns={columns}
        pagination
        paginationMode="server"
        sortingMode="server"
        rowCount={rowCount}
        onPaginationModelChange={onPaginationModelChange}
        onSortModelChange={onSortModelChange}
        paginationModel={{ page, pageSize }}
        pageSizeOptions={[5, 10, 20, 50, 100]}
        disableColumnMenu
        disableRowSelectionOnClick
        onRowClick={onRowClick}
        getRowId={(row) => row.id}
      />
    </div>
  );
}
