export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Marketing Home</h1>
      <p>This is the public landing page rendered as a Server Component.</p>
      <p>
        Go to <a href="/login">Login</a> or the <a href="/app/work-orders">App</a> (will redirect).
      </p>
    </main>
  );
}

