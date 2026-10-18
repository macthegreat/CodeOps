
# Day 43 — Addis Eats Performance

## Before Optimisation

- Environment: Production build (`npm run build`, `npm run start`)
- Lighthouse mode: Mobile
- Performance score: 96
- First Contentful Paint (FCP): 0.807 s
- Largest Contentful Paint (LCP): 1.781 s
- Total Blocking Time (TBT): 206 ms
- Cumulative Layout Shift (CLS): 0.000
- Interaction to Next Paint (INP): Not reported
- Speed Index (SI): 0.807 s

## Findings

- LCP is below the 2.5-second target.
- CLS is below the 0.1 target.
- TBT is 206 ms and should be reviewed if further optimisation is needed.
- No dish images were found in the public directory.
- The app layout already uses next/font/google.
- No image tags or third-party script tags were found in the app JSX/JS files.

## Optimisation Changes

- Environment configuration documented in `.env.example`.
- Image optimisation remains pending until real dish image assets are available.
- No performance improvement is claimed until a second Lighthouse run is recorded.

## After Optimisation

- Performance score: Pending
- FCP: Pending
- LCP: Pending
- TBT: Pending
- CLS: Pending
- INP: Pending
- Speed Index: Pending
