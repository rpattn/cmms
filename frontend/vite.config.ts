import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for CRA-to-Vite side-by-side trial
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    port: 3000,
    open: false,
    proxy: {
      '/auth': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false
      },
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false
      },
      '/ws': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true,
        secure: false
      }
    }
  },
  preview: {
    port: 5000
  },
  build: {
    rollupOptions: {
      onwarn(warning, defaultHandler) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && /use client/.test(warning.message || '')) {
          return;
        }
        defaultHandler(warning);
      }
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      logLevel: 'error'
    },
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
      src: new URL('./src', import.meta.url).pathname
    }
  },
  esbuild: {
    logLevel: 'error'
  },
  define: {
    // Some browser-targeted packages (e.g., sockjs-client) expect a Node-like global
    global: 'window',
    'process.env.NODE_ENV': JSON.stringify(mode),
    'process.env.PUBLIC_URL': JSON.stringify('')
  }
}));
