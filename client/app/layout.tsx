import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CMMS Client',
  description: 'Next.js App Router scaffold with server auth'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

