"use client";

import { DataGrid, GridColDef, GridPaginationModel, GridSortModel } from '@mui/x-data-grid';
import { Chip } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

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
  q
}: {
  rows: WorkOrderRow[];
  page: number;
  pageSize: number;
  rowCount: number;
  q?: string | null;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
        valueFormatter: (params) => (params.value ? new Date(params.value as string).toLocaleDateString() : '')
      }
    ],
    []
  );

  const onPaginationModelChange = (model: GridPaginationModel) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(model.page));
    params.set('size', String(model.pageSize));
    if (q) params.set('q', q);
    router.push(`${pathname}?${params.toString()}`);
  };

  const onSortModelChange = (model: GridSortModel) => {
    const params = new URLSearchParams(searchParams.toString());
    if (model.length) {
      params.set('sort', `${model[0].field},${model[0].sort || 'asc'}`);
    } else {
      params.delete('sort');
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const onRowClick = (params: any) => {
    router.push(`/app/work-orders/${params.id}`);
  };

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
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
