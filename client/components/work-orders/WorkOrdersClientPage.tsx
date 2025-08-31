"use client";

import { useCallback, useEffect, useMemo, useState } from 'react';
import { api } from '@/lib/api';
import { Page, SearchCriteria } from '@/lib/page';
import WorkOrdersGrid, { WorkOrderRow } from '@/components/work-orders/WorkOrdersGrid';
import SearchBox from '@/components/common/SearchBox';
import WorkOrdersFilters from '@/components/work-orders/WorkOrdersFilters';
import { GridPaginationModel, GridSortModel } from '@mui/x-data-grid';
import { Box, Button, Drawer, IconButton, Menu, MenuItem, Tab, Tabs, Tooltip } from '@mui/material';
import FilterAltTwoToneIcon from '@mui/icons-material/FilterAltTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useI18n } from '@/components/providers/I18nProvider';
import CreateWorkOrderModal from '@/components/work-orders/CreateWorkOrderModal';
import WorkOrderDetailsPanel from '@/components/work-orders/WorkOrderDetailsPanel';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import EditWorkOrderModal from '@/components/work-orders/EditWorkOrderModal';
import WorkOrdersCalendar from '@/components/work-orders/WorkOrdersCalendar';

export default function WorkOrdersClientPage({
  initialPage = 0,
  initialSize = 10,
  initialQ = '',
  initialSort,
  initialPriority
}: {
  initialPage?: number;
  initialSize?: number;
  initialQ?: string;
  initialSort?: string | null;
  initialPriority?: string | null;
}) {
  const { t } = useI18n();
  const [page, setPage] = useState<number>(initialPage);
  const [pageSize, setPageSize] = useState<number>(initialSize);
  const [q, setQ] = useState<string>(initialQ || '');
  const [priority, setPriority] = useState<string>((initialPriority || 'ALL').toUpperCase());
  const [sortModel, setSortModel] = useState<GridSortModel>(() => {
    if (!initialSort) return [];
    const [field, dir] = initialSort.split(',');
    return field ? [{ field, sort: (dir as 'asc' | 'desc') || 'asc' }] : [];
  });
  const [rows, setRows] = useState<WorkOrderRow[]>([]);
  const [rowCount, setRowCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [tab, setTab] = useState<'list' | 'calendar'>('list');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(menuAnchor);
  const [statuses, setStatuses] = useState<string[]>(['OPEN', 'IN_PROGRESS', 'ON_HOLD']);
  const [hideArchived, setHideArchived] = useState<boolean>(true);
  const [createOpen, setCreateOpen] = useState(false);
  const [createInitialDueDate, setCreateInitialDueDate] = useState<Date | null>(null);
  const [detailsId, setDetailsId] = useState<number | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [editId, setEditId] = useState<number | null>(null);
  const [editOpen, setEditOpen] = useState(false);
  const [dueFrom, setDueFrom] = useState<string | null>(null);
  const [dueTo, setDueTo] = useState<string | null>(null);

  // Open details drawer if URL contains ?wo=ID
  useEffect(() => {
    const idStr = searchParams.get('wo');
    const idNum = idStr ? Number(idStr) : NaN;
    if (!isNaN(idNum) && idNum > 0) {
      setDetailsId(idNum);
      setDetailsOpen(true);
    } else {
      if (detailsOpen) setDetailsOpen(false);
      if (detailsId != null) setDetailsId(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const criteria: SearchCriteria = useMemo(() => {
    const filterFields = [] as SearchCriteria['filterFields'];
    const allowedPriorities = ['HIGH', 'MEDIUM', 'LOW', 'NONE'];
    const qTrim = q?.trim();
    if (qTrim) filterFields.push({ field: 'title', value: qTrim, operation: 'cn' });
    if (priority && allowedPriorities.includes(priority)) {
      filterFields.push({
        field: 'priority',
        operation: 'in',
        value: '',
        values: [priority],
        enumName: 'PRIORITY'
      });
    }
    if (statuses && statuses.length) {
      filterFields.push({ field: 'status', operation: 'in', value: '', values: statuses, enumName: 'STATUS' } as any);
    }
    if (hideArchived) {
      filterFields.push({ field: 'archived', operation: 'eq', value: false } as any);
    }
    if (dueFrom) {
      filterFields.push({ field: 'dueDate', operation: 'ge', value: dueFrom } as any);
    }
    if (dueTo) {
      filterFields.push({ field: 'dueDate', operation: 'le', value: dueTo } as any);
    }
    const crit: SearchCriteria = {
      pageNum: page,
      pageSize,
      filterFields
    };
    if (sortModel.length) {
      const mapping: Record<string, string> = {
        id: 'id',
        title: 'title',
        priority: 'priority',
        status: 'status',
        dueDate: 'dueDate',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        completedOn: 'completedOn'
      };
      const field = sortModel[0].field;
      crit.sortField = mapping[field] || field;
      crit.direction = (sortModel[0].sort === 'desc' ? 'DESC' : 'ASC');
    }
    return crit;
  }, [page, pageSize, q, priority, sortModel, statuses, hideArchived, dueFrom, dueTo]);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api<Page<WorkOrderRow>>('work-orders/search', {
        method: 'POST',
        body: JSON.stringify(criteria)
      });
      setRows(res.content || []);
      setRowCount(res.totalElements || 0);
    } catch (e: any) {
      setError(e?.message || 'Failed to load');
    } finally {
      setLoading(false);
    }
  }, [criteria, refreshKey]);

  useEffect(() => {
    load();
  }, [load]);

  const onChangePagination = (model: GridPaginationModel) => {
    setPage(model.page);
    setPageSize(model.pageSize);
  };
  const onChangeSort = (model: GridSortModel) => {
    setSortModel(model);
  };

  return (
    <main>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
        <Tabs value={tab} onChange={(_e, v) => setTab(v)}>
          <Tab label={t('list_view') || 'List'} value="list" />
          <Tab label={t('calendar_view') || 'Calendar'} value="calendar" />
        </Tabs>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Tooltip title={t('filters') || 'Filters'}>
            <IconButton onClick={() => setFiltersOpen(true)} aria-label="filters">
              <FilterAltTwoToneIcon />
            </IconButton>
          </Tooltip>
          <IconButton onClick={(e) => setMenuAnchor(e.currentTarget)} aria-label="menu">
            <MoreVertTwoToneIcon />
          </IconButton>
          <Menu anchorEl={menuAnchor} open={menuOpen} onClose={() => setMenuAnchor(null)}>
            <MenuItem onClick={async () => {
              setMenuAnchor(null);
              try {
                const res = await api<{ success: boolean; message: string }>('export/work-orders');
                if (res?.message) window.open(res.message, '_blank');
              } catch (e) {
                console.error(e);
                alert('Export failed');
              }
            }}>{t('export') || 'Export'}</MenuItem>
          </Menu>
          <Button variant="contained" startIcon={<AddTwoToneIcon />} onClick={() => setCreateOpen(true)}>
            {t('add_work_order') || 'Add Work Order'}
          </Button>
        </Box>
      </Box>
      <SearchBox initial={initialQ} value={q} onSearch={(val) => { setPage(0); setQ(val); }} />
      <Drawer open={filtersOpen} onClose={() => setFiltersOpen(false)} anchor="right" PaperProps={{ sx: { width: 360 } }}>
        <Box sx={{ p: 2 }}>
          <h3 style={{ marginTop: 0 }}>{t('filters') || 'Filters'}</h3>
          <WorkOrdersFilters
            value={priority}
            onPriorityChange={(v) => { setPage(0); setPriority(v.toUpperCase()); }}
            statuses={statuses}
            onStatusesChange={(vals) => { setPage(0); setStatuses(vals); }}
            hideArchived={hideArchived}
            onHideArchivedChange={(val) => { setPage(0); setHideArchived(val); }}
            dueFrom={dueFrom}
            dueTo={dueTo}
            onDueFromChange={(v) => { setPage(0); setDueFrom(v); }}
            onDueToChange={(v) => { setPage(0); setDueTo(v); }}
          />
        </Box>
      </Drawer>
      {tab === 'calendar' && (
        <WorkOrdersCalendar onDateClick={(date) => { setCreateInitialDueDate(date); setCreateOpen(true); }} />
      )}
      {tab === 'list' && (
        <>
          {error && (
            <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>
          )}
          <div
            style={{
              opacity: loading ? 0.7 : 1,
              pointerEvents: loading ? 'none' : 'auto',
            }}
          >
          <WorkOrdersGrid
            rows={rows}
            page={page}
            pageSize={pageSize}
            rowCount={rowCount}
            q={q}
            loading={loading}
            onChangePagination={onChangePagination}
            onChangeSort={onChangeSort}
            onAfterAction={() => setRefreshKey((k) => k + 1)}
            onOpenDetails={(id) => {
              const params = new URLSearchParams(searchParams.toString());
              params.set('wo', String(id));
              router.push(`${pathname}?${params.toString()}`);
            }}
            onEdit={(id) => { setEditId(id); setEditOpen(true); }}
          />
        </div>
        </>
      )}

      <CreateWorkOrderModal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        onCreated={() => {
          // refresh list
          setCreateOpen(false);
          // call load via toggling deps by changing page to 0
          setPage(0);
        }}
        initialDueDate={createInitialDueDate}
      />

      {editId != null && (
        <EditWorkOrderModal id={editId} open={editOpen} onClose={() => setEditOpen(false)} onSaved={() => { setEditOpen(false); setPage(0); }} />
      )}

      <Drawer
        open={detailsOpen}
        onClose={() => {
          const params = new URLSearchParams(searchParams.toString());
          params.delete('wo');
          router.push(`${pathname}?${params.toString()}`);
        }}
        anchor="right"
        PaperProps={{ sx: { width: 460, maxWidth: '100vw' } }}
      >
        {detailsId != null && (
          <WorkOrderDetailsPanel id={detailsId} onClose={() => {
            const params = new URLSearchParams(searchParams.toString());
            params.delete('wo');
            router.push(`${pathname}?${params.toString()}`);
          }} onChanged={() => setRefreshKey((k) => k + 1)} />
        )}
      </Drawer>

    </main>
  );
}
