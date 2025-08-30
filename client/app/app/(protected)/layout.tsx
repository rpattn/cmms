import { requireSession } from '@/lib/auth';
import { getMe } from '@/lib/user';
import { AuthProvider } from '@/components/auth/AuthProvider';
import ThemeSwitcher from '@/components/common/ThemeSwitcher';
export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  // Server-side guard
  await requireSession();
  const user = await getMe().catch(() => null);
  return (
    <AuthProvider user={user}>
      <section>
        <header style={{ padding: 16, borderBottom: '1px solid var(--mui-palette-divider)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--mui-palette-text-primary)' }}>
          <a href="/">CMMS</a>
          <nav style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <a href="/app/work-orders">Work Orders</a>
            <a href="/app/profile">Profile</a>
            <ThemeSwitcher />
            {user && (
              <span style={{ opacity: 0.8, fontSize: 14 }}>{user.name || user.email}</span>
            )}
            <form action="/api/logout" method="post">
              <button>Logout</button>
            </form>
          </nav>
        </header>
        <div style={{ padding: 24 }}>{children}</div>
      </section>
    </AuthProvider>
  );
}
