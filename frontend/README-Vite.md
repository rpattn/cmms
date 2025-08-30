Vite trial setup (side-by-side with CRA)

What was added
- Vite config: `frontend/vite.config.ts`
- Vite entry HTML: `frontend/index.html`
- Env shim: `frontend/src/vite-env-shim.ts` to provide `process.env`-like access
- Scripts: `dev:vite`, `build:vite`, `preview:vite` kept alongside CRA scripts

How to run
- Dev (Vite): `npm run dev:vite` (serves on http://localhost:3000)
- Build (Vite): `npm run build:vite` (outputs to `frontend/dist`)
- Preview build: `npm run preview:vite`

Env behavior
- Existing runtime config via `public/runtime-env.js` continues to work (loaded in `index.html`).
- For Vite-specific env files (`.env`, `.env.local`), define variables as `VITE_<NAME>`.
  The shim maps `VITE_FOO` to `process.env.REACT_APP_FOO` at runtime for existing code paths.
- `process.env.NODE_ENV` and `process.env.PUBLIC_URL` are provided for legacy checks.

Notes
- CRA scripts and behavior remain unchanged; both toolchains can be used on this branch.
- If you rely on generating `public/runtime-env.js`, keep using your existing process (e.g., `runtime-env-cra`) or edit the file manually for the Vite dev session.

