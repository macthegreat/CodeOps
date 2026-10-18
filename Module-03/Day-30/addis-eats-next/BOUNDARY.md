
# Server–Client Boundary — Addis Eats

| File or component | Boundary | Reason |
|---|---|---|
| `app/layout.jsx` | Server | Renders the shared application shell and passes children to the layout. |
| `app/page.js` | Server | Renders the landing page without needing browser state. |
| `app/menu/page.js` | Server | Fetches menu data on the server. |
| `app/menu/layout.js` | Server | Provides the nested menu layout. |
| `app/menu/CategoryBar.jsx` | Client | Needs interactive category selection. |
| `app/menu/FilterShell.jsx` | Client | Provides the client-side wrapper for interactive filtering. |
| `app/menu/[id]/page.js` | Server | Generates dish detail pages from route parameters. |
| `app/cart/page.js` | Client | Cart interactions and state belong in the browser. |
| `app/checkout/page.js` | Server | Renders the checkout route and includes the form component. |
| `app/checkout/CheckoutForm.jsx` | Client | Handles interactive form submission with `useActionState`. |
| `app/checkout/actions.js` | Server Action | Validates and creates orders, and checks order ownership for cancellation. |
| `app/api/dishes/route.js` | Server | Returns dish data from a Route Handler. |
| `app/api/dishes/[id]/route.js` | Server | Looks up one dish and returns an appropriate HTTP response. |
| `app/api/orders/route.js` | Server | Validates incoming order requests and creates orders. |
| `app/providers.jsx` | Client | Provides client-side context and state. |

## Boundary rule

Use Server Components by default. Add `"use client"` only where browser state, event handlers, or client-side hooks are required.
