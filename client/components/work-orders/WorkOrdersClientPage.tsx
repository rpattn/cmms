  "use client";

  import { useCallback, useEffect, useMemo, useState } from 'react';
  import { api } from '@/lib/api';
  import { Page, SearchCriteria } from '@/lib/page';
  import WorkOrdersGrid, { WorkOrderRow } from '@/components/work-orders/WorkOrdersGrid';
  import SearchBox from '@/components/common/SearchBox';
  import WorkOrdersFilters from '@/components/work-orders/WorkOrdersFilters';
  import { GridPaginationModel, GridSortModel } from '@mui/x-data-grid';
  import { useI18n } from '@/components/providers/I18nProvider';

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
    const crit: SearchCriteria = {
      pageNum: page,
      pageSize,
      filterFields
    };
      if (sortModel.length) {
        crit.sortField = sortModel[0].field;
        crit.direction = (sortModel[0].sort === 'desc' ? 'DESC' : 'ASC');
      }
      return crit;
    }, [page, pageSize, q, priority, sortModel]);

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
    }, [criteria]);

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
      <h1>{t('work_orders')}</h1>
      <SearchBox initial={initialQ} value={q} onSearch={(val) => { setPage(0); setQ(val); }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <WorkOrdersFilters value={priority} onPriorityChange={(v) => { setPage(0); setPriority(v.toUpperCase()); }} />
      </div>
      {error && (
        <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>
      )}
        <div style={{ opacity: loading ? 0.7 : 1, pointerEvents: loading ? 'none' : 'auto' }}>
          <WorkOrdersGrid
            rows={rows}
            page={page}
            pageSize={pageSize}
            rowCount={rowCount}
            q={q}
            loading={loading}
            onChangePagination={onChangePagination}
            onChangeSort={onChangeSort}
          />
        </div>
    </main>
  );
}
