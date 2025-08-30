Vite setup (single toolchain)

What’s in place
- Vite config: `frontend/vite.config.ts`
- Entry HTML: `frontend/index.html`
- Scripts: `start`, `build`, `preview` (Vite)

How to run
- Dev: `npm run start` (http://localhost:3000)
- Build: `npm run build` (outputs to `frontend/dist`)
- Preview build: `npm run preview`

Environment variables (Vite-native)
- Define variables in `.env`, `.env.local`, etc. as `VITE_<NAME>`.
- Access them in code via `import.meta.env.VITE_<NAME>`.
- Example variables: see `frontend/.env.example`.

Migration notes
- Removed CRA and runtime env injection. `public/runtime-env.js` and the `vite-env-shim` were deleted.
- If you previously depended on runtime variable injection, migrate those to Vite’s build-time variables.
