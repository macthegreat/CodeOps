
# Rendering Strategy — Addis Eats

| Route | Strategy | Reason |
|---|---|---|
| `/` | Static | The landing page can be generated at build time. |
| `/menu` | ISR, revalidate every 60 seconds | Dish data can be reused and refreshed periodically. |
| `/menu/[id]` | Static generation (SSG) | `generateStaticParams` generates dish pages at build time. |
| `/cart` | Static route with client-side state | Cart contents are private to the browser session and need interactivity. |
| `/checkout` | Dynamic | Checkout is configured with `force-dynamic`. |
| `/api/dishes` | Dynamic Route Handler | Returns the dish list as JSON when requested. |
| `/api/dishes/[id]` | Dynamic Route Handler | Looks up a requested dish and can return 404. |
| `/api/orders` | Dynamic Route Handler | Accepts POST requests and validates submitted order data. |
