import type { Metadata } from 'next';
import './globals.css';
import AppThemeProvider from '@/components/providers/AppThemeProvider';
import { cookies } from 'next/headers';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

export const metadata: Metadata = {
  title: 'CMMS Client',
  description: 'Next.js App Router scaffold with server auth'
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body>
        <InitColorSchemeScript attribute="data" />
        <AppThemeProvider>
          <main>{children}</main>
        </AppThemeProvider>
      </body>
    </html>
  );
}
