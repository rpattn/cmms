import type { Metadata } from 'next';
import './globals.css';
import MuiProvider from '@/components/providers/MuiProvider';

export const metadata: Metadata = {
  title: 'CMMS Client',
  description: 'Next.js App Router scaffold with server auth'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MuiProvider>{children}</MuiProvider>
      </body>
    </html>
  );
}
