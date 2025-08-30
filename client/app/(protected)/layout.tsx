import { requireSession } from '@/lib/auth';

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  // Server-side guard
  requireSession();
  return (
    <section>
      <header style={{ padding: 16, borderBottom: '1px solid #2b3245' }}>
        <a href="/">CMMS</a>
        <nav style={{ float: 'right' }}>
          <a href="/app/work-orders">Work Orders</a>
          <form action="/api/logout" method="post" style={{ display: 'inline', marginLeft: 16 }}>
            <button>Logout</button>
          </form>
        </nav>
      </header>
      <div style={{ padding: 24 }}>{children}</div>
    </section>
  );
}

