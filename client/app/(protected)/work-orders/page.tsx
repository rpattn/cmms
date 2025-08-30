import { api } from '@/lib/api';

type WorkOrder = { id: number; title?: string };

async function getWorkOrders() {
  try {
    return await api<WorkOrder[]>('work-orders');
  } catch {
    return [] as WorkOrder[];
  }
}

export default async function WorkOrdersPage() {
  const items = await getWorkOrders();
  return (
    <main>
      <h1>Work Orders (Server)</h1>
      {items.length === 0 ? (
        <p>No work orders found or backend not reachable.</p>
      ) : (
        <ul>
          {items.map((wo) => (
            <li key={wo.id}>#{wo.id} {wo.title ?? ''}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
