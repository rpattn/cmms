import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Vite configuration for CRA-to-Vite side-by-side trial
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    port: 3000,
    open: false
  },
  optimizeDeps: {
    include: [
      '@fullcalendar/react',
      '@fullcalendar/common',
      '@fullcalendar/core',
      '@fullcalendar/daygrid',
      '@fullcalendar/timegrid',
      '@fullcalendar/interaction',
      '@fullcalendar/list'
    ]
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src')
    }
  },
  define: {
    // Some browser-targeted packages (e.g., sockjs-client) expect a Node-like global
    global: 'window',
    'process.env.NODE_ENV': JSON.stringify(mode),
    'process.env.PUBLIC_URL': JSON.stringify('')
  }
}));
