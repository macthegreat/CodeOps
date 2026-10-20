
export default function DashboardLoading() {
  return (
    <main
      aria-busy="true"
      aria-label="Loading dashboard"
      className="mx-auto max-w-6xl space-y-8 p-6"
    >
      <div className="h-9 w-72 animate-pulse rounded bg-gray-200" />

      <div className="h-28 animate-pulse rounded-lg bg-gray-200" />

      <section className="space-y-3">
        <div className="h-6 w-56 animate-pulse rounded bg-gray-200" />
        <div className="h-72 animate-pulse rounded-lg bg-gray-200" />
      </section>

      <section className="space-y-3">
        <div className="h-6 w-48 animate-pulse rounded bg-gray-200" />
        <div className="space-y-2">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              className="h-10 animate-pulse rounded bg-gray-200"
            />
          ))}
        </div>
      </section>

      <p className="text-sm text-gray-600">Loading dashboard data…</p>
    </main>
  );
}
