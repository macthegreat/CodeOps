# Day 42 — Authentication Audit

## Protected Routes

| Route | Protection | Purpose |
|---|---|---|
| /checkout | Middleware | Redirect signed-out visitors to /signin |
| /orders/:path* | Middleware | Redirect signed-out visitors to /signin |
| /api/auth/:path* | Auth.js handler | Authentication endpoints |

## Current Implementation

- Auth.js Credentials provider configured.
- JWT session strategy configured.
- Session secret stored in `.env.local`.
- Sign-in page created.
- Middleware redirects requests without an authenticated session.
- The `next` destination is checked to reject external URLs.

## Known Limitations

- Sign-in redirect behavior still needs verification.
- Demo credentials are hardcoded and are for development only.
- No persistent user database or password-hash verification exists.
- Order ownership checks inside server actions and API handlers still need implementation and testing.
- Sign-out and staff-only authorization are not yet implemented.

## Required Security Tests

1. Call a protected server action while signed out.
2. Attempt to access another user's order.
3. Try a sign-in URL with an external `next` destination.

Do not consider the application production-ready until these checks are implemented and pass.
