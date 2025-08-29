# Authentication & OAuth2 SSO

- Auth style: JWT Bearer tokens for API calls.
- Login endpoints live under `/auth`; SSO available when enabled.

## JWT Login
- Sign in: `POST /auth/signin`
  - Request Body: `UserLoginRequest`
  - Response: `AuthResponse` (JWT token)

```json
{
  "email": "user@example.com",
  "password": "string",
  "type": "WEB"
}
```

- Me: `GET /auth/me` — returns current user
- Refresh: `GET /auth/refresh` — refreshes token
- Reset password (request): `GET /auth/resetpwd?email=...`
- Update password: `POST /auth/updatepwd` with `UpdatePasswordRequest`

Use header: `Authorization: Bearer <JWT>`.

## OAuth2 SSO (Google/Microsoft)

- Toggle: set `enable-sso: true` (see `application.yml`).
- Provider: set `oauth2.provider: google` or `microsoft`.
- Env vars: `OAUTH2_CLIENT_ID`, `OAUTH2_CLIENT_SECRET`.
- Public URLs: `PUBLIC_API_URL` (used for redirect), `PUBLIC_FRONT_URL`.

- Authorization endpoint (backend): `/oauth2/authorize/{registrationId}`
- Redirect callback (backend): `/oauth2/callback/{registrationId}`
- Success/failure frontend redirects configured under `oauth2.*` in `application.yml`.

When SSO is enabled and licensed, Spring Security wires OAuth2 login and the JWT filter remains applied.

## Common Auth Endpoints

- `POST /auth/signin` — Login (returns JWT)
- `POST /auth/signup` — Sign up
- `GET /auth/me` — Current user
- `GET /auth/refresh` — Refresh token
- `GET /auth/activate-account?token=...` — Email verification redirect
- `GET /auth/resetpwd?email=...` — Request password reset email
- `POST /auth/updatepwd` — Change password

Refer to `/auth` resource docs for full request/response schemas.

