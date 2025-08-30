import { api } from '@/lib/api';
import { Page, SearchCriteria } from '@/lib/page';
import WorkOrdersGrid, { WorkOrderRow } from '@/components/work-orders/WorkOrdersGrid';
import SearchBox from '@/components/common/SearchBox';
import WorkOrdersFilters from '@/components/work-orders/WorkOrdersFilters';

async function searchWorkOrders(criteria: SearchCriteria) {
  try {
    return await api<Page<WorkOrderRow>>('work-orders/search', {
      method: 'POST',
      body: JSON.stringify(criteria)
    });
  } catch (e) {
    return null;
  }
}

export default async function WorkOrdersPage(
  props: {
    searchParams: Promise<{ page?: string; size?: string; q?: string; sort?: string; priority?: string }>;
  }
) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams?.page ?? '0');
  const size = Number(searchParams?.size ?? '10');
  const q = searchParams?.q?.toString()?.trim();
  const sort = searchParams?.sort?.toString();
  const priority = searchParams?.priority?.toString()?.toUpperCase();
  const criteria: SearchCriteria = {
    pageNum: isNaN(page) ? 0 : page,
    pageSize: isNaN(size) ? 10 : size,
    filterFields: [
      ...(q ? [{ field: 'title', value: q, operation: 'cn' as const }] : []),
      ...(priority && ['HIGH', 'MEDIUM', 'LOW', 'NONE'].includes(priority)
        ? [{ field: 'priority', value: priority, operation: 'eq' as const }]
        : [])
    ],
    ...(sort
      ? {
          sortField: sort.split(',')[0],
          direction: (sort.split(',')[1]?.toUpperCase() === 'DESC' ? 'DESC' : 'ASC') as 'ASC' | 'DESC'
        }
      : {})
  };
  const result = await searchWorkOrders(criteria);
  const content = result?.content ?? [];
  return (
    <main>
      <h1>Work Orders</h1>
      <SearchBox initial={q ?? ''} />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <WorkOrdersFilters />
      </div>
      <WorkOrdersGrid
        rows={content as WorkOrderRow[]}
        page={isNaN(page) ? 0 : page}
        pageSize={isNaN(size) ? 10 : size}
        rowCount={result?.totalElements ?? 0}
        q={q ?? null}
      />
    </main>
  );
}
