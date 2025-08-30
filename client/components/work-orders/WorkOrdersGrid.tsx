"use client";

import { DataGrid, GridColDef, GridPaginationModel, GridSortModel } from '@mui/x-data-grid';
import { Chip } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMemo, useCallback, useEffect, useRef, useState } from 'react';

export type WorkOrderRow = {
  id: number;
  title?: string;
  priority?: string;
  dueDate?: string;
};

export default function WorkOrdersGrid({
  rows,
  page,
  pageSize,
  rowCount,
  q,
  loading,
  onChangePagination,
  onChangeSort
}: {
  rows: WorkOrderRow[];
  page: number;
  pageSize: number;
  rowCount: number;
  q?: string | null;
  loading?: boolean;
  onChangePagination?: (model: GridPaginationModel) => void;
  onChangeSort?: (model: GridSortModel) => void;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const mountedRef = useRef(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    mountedRef.current = true;
    setIsMounted(true);
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const columns: GridColDef[] = useMemo(
    () => [
      { field: 'id', headerName: 'ID', width: 120 },
      { field: 'title', headerName: 'Title', flex: 1, minWidth: 200 },
      {
        field: 'priority',
        headerName: 'Priority',
        width: 140,
        renderCell: (params) => {
          const v = (params.value as string) || 'NONE';
          const color = v === 'HIGH' ? 'error' : v === 'MEDIUM' ? 'warning' : v === 'LOW' ? 'success' : 'default';
          return <Chip label={v} color={color as any} size="small" />;
        }
      },
      {
        field: 'dueDate',
        headerName: 'Due',
        width: 160,
        valueFormatter: (params: any) => (params.value ? new Date(params.value as string).toLocaleDateString() : '')
      }
    ],
    []
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
    router.push(`/app/work-orders/${params.id}`);
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
          <span style={{ color: 'var(--mui-palette-text-secondary)' }}>Loading…</span>
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
        disableColumnMenu
        disableRowSelectionOnClick
        onRowClick={onRowClick}
        getRowId={(row) => row.id}
      />
    </div>
  );
}
