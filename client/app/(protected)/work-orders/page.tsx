import { cookies } from 'next/headers';
import { API_URL } from '@/lib/env';

type WorkOrder = { id: number; title?: string };

async function getWorkOrders() {
  const token = cookies().get('session')?.value;
  const res = await fetch(API_URL + 'work-orders', {
    headers: {
      Accept: 'application/json',
      Authorization: token ? `Bearer ${token}` : ''
    },
    // Force server-side fetch
    cache: 'no-store'
  });
  if (!res.ok) {
    return [] as WorkOrder[];
  }
  try {
    return (await res.json()) as WorkOrder[];
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

