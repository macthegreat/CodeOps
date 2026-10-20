
"use client";

export default function DashboardError({ error, reset }) {
  return (
    <main className="mx-auto max-w-6xl p-6" role="alert">
      <h2 className="text-2xl font-bold">Unable to load the dashboard</h2>

      <p className="mt-2 text-gray-600">
        Something went wrong while loading the dashboard data.
        Please try again.
      </p>

      {process.env.NODE_ENV === "development" && (
        <p className="mt-3 text-sm text-red-600">{error.message}</p>
      )}

      <button
        type="button"
        onClick={() => reset()}
        className="mt-5 rounded border px-4 py-2 hover:bg-gray-100"
      >
        Try again
      </button>
    </main>
  );
}
