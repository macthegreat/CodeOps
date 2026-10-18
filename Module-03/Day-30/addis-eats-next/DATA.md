# Day 41 — Data Fetching

## SWR

### Order status
- Query key: `/api/orders/${initial.id}`
- Fetcher: `fetcher` from `lib/fetcher.js`
- Refresh rule: every 5 seconds (`refreshInterval: 5000`)
- Initial data: `fallbackData: initial`
- Purpose: display the server-fetched order immediately and periodically check for status updates.

### Menu search
- Status: Not implemented yet.
- Planned query key: `/api/dishes?search=${term}`
- Empty search: use a `null` SWR key to disable fetching.
- Planned behavior: debounce the search term and retain previous results while fetching.

### Pagination
- Status: Not implemented yet.
- Planned query key: include the current page number in the URL/query key.
- Purpose: fetch the correct page and keep previous results visible while the next page loads.

## Limitations
- Orders currently use in-memory mock storage, not a persistent database.
- The order-status API returns 404 when an order cannot be found.
- Menu search and pagination remain incomplete.
