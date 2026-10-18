
# Addis Eats

Addis Eats is a food-ordering application built with Next.js App Router. It demonstrates file-based routing, nested layouts, Server and Client Components, Route Handlers, Zod validation, and Server Actions.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000.

## Production Build

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

### Verified Build Results

The production build completed successfully with Next.js 16.3.6.

| Route | Build strategy |
|---|---|
| `/` | Static |
| `/menu` | Static with 60-second revalidation |
| `/menu/[id]` | Static generation using route parameters |
| `/cart` | Static route with client-side interactivity |
| `/checkout` | Dynamic |
| `/api/dishes` | Dynamic Route Handler |
| `/api/dishes/[id]` | Dynamic Route Handler |
| `/api/orders` | Dynamic Route Handler |

## API Endpoints

| Method | Endpoint | Purpose | Expected status |
|---|---|---|---|
| GET | `/api/dishes` | Return all dishes | `200 OK` |
| GET | `/api/dishes/[id]` | Return one dish | `200 OK` |
| GET | `/api/dishes/[id]` | Dish ID not found | `404 Not Found` |
| POST | `/api/orders` | Create a valid order | `201 Created` |
| POST | `/api/orders` | Invalid order data | `422 Unprocessable Entity` |

### Test the endpoints

Get all dishes:

```bash
curl -i http://localhost:3000/api/dishes
```

Get one dish:

```bash
curl -i http://localhost:3000/api/dishes/dish_1
```

Test an unknown dish:

```bash
curl -i http://localhost:3000/api/dishes/unknown
```

Test order validation:

```bash
curl -i -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{"name":"A","phone":"12345","quantity":0}'
```

A rejected order should return `422` with validation errors.

## Server Actions

The checkout form uses a Server Action to validate and create orders. The `cancelOrder` action checks the session, order existence, and ownership before attempting cancellation. Successful writes revalidate `/checkout`.

## Architecture Documentation

- `STRATEGY.md` explains the intended rendering strategy for each route.
- `BOUNDARY.md` documents the intended Server/Client Component boundary.

## Data and Security Limitations

This exercise uses an in-memory mock database and a mock session. Orders are not persisted across server restarts, and the mock session is not production authentication. The cancellation happy path and repeat-cancellation behavior have been tested; missing-session and different-owner cases still require verification.

## Known Build Warnings

The successful build reported a package-lock location warning and a Node.js module-type warning for `next.config.js`. These warnings did not prevent the build from succeeding.
