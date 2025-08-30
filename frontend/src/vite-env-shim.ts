// Minimal shim to provide CRA-like process.env access in Vite
// - Maps VITE_* to both import.meta.env.VITE_* and process.env.REACT_APP_*
// - Provides process.env.NODE_ENV and PUBLIC_URL for legacy checks

declare global {
  interface Window {
    process: any;
  }
  interface ImportMeta {
    env: Record<string, any>;
  }
}

const env = import.meta.env as Record<string, any>;
const procEnv: Record<string, any> = {
  ...env,
  NODE_ENV: env.MODE,
  PUBLIC_URL: ''
};

Object.keys(env).forEach((key) => {
  if (key.startsWith('VITE_')) {
    procEnv[`REACT_APP_${key.slice(5)}`] = (env as any)[key];
  }
});

// Expose a process.env-like object at runtime
(window as any).process = { env: procEnv };

export {};

