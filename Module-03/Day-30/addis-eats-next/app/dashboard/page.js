
import Link from "next/link";
import RevenueChart from "./RevenueChart";
import OrdersChart from "./OrdersChart";
import OrderTable from "../orders/OrderTable";

export const dynamic = "force-dynamic";

const demoOrders = [
  { id: "ord_801", area: "Bole", total: 1250, createdAt: "2026-10-14T10:00:00Z", status: "DELIVERED" },
  { id: "ord_802", area: "Kazanchis", total: 850, createdAt: "2026-10-15T12:00:00Z", status: "PENDING" },
  { id: "ord_803", area: "Megenagna", total: 1600, createdAt: "2026-10-15T15:00:00Z", status: "DELIVERED" },
  { id: "ord_804", area: "Bole", total: 950, createdAt: "2026-10-16T09:00:00Z", status: "CANCELLED" },
  { id: "ord_805", area: "Kazanchis", total: 1100, createdAt: "2026-10-17T13:00:00Z", status: "DELIVERED" },
  { id: "ord_806", area: "Megenagna", total: 700, createdAt: "2026-10-18T11:00:00Z", status: "PENDING" },
];

const formatETB = (value) =>
  new Intl.NumberFormat("en-ET", {
    style: "currency",
    currency: "ETB",
    maximumFractionDigits: 0,
  }).format(value);

const allowedSorts = ["id", "createdAt", "total"];

export default async function DashboardPage({ searchParams }) {
  const params = await searchParams;



  const showEmpty = process.env.NODE_ENV === "development"
  && params?.empty === "1";

const orders = showEmpty ? [] : demoOrders;
  const requestedSort = params?.sort;
  const sort = allowedSorts.includes(requestedSort) ? requestedSort : "createdAt";
  const dir = params?.dir === "asc" ? "asc" : "desc";
  const requestedPage = Number(params?.page ?? 1);
  const pageSize = 5;

  const revenueByArea = ["Bole", "Kazanchis", "Megenagna"].map((area) => ({
    area,
    revenue: demoOrders
      .filter((order) => order.area === area && order.status !== "CANCELLED")
      .reduce((sum, order) => sum + order.total, 0),
  }));

  const ordersByDay = Object.values(
    demoOrders.reduce((summary, order) => {
      if (order.status === "CANCELLED") return summary;

      const day = order.createdAt.slice(0, 10);
      if (!summary[day]) summary[day] = { day, orders: 0 };
      summary[day].orders += 1;
      return summary;
    }, {})
  ).sort((a, b) => a.day.localeCompare(b.day));

  const totalRevenue = revenueByArea.reduce((sum, area) => sum + area.revenue, 0);

  const sortedOrders = [...demoOrders].sort((a, b) => {
    let comparison;

    if (sort === "total") comparison = a.total - b.total;
    else if (sort === "createdAt") comparison = a.createdAt.localeCompare(b.createdAt);
    else comparison = a.id.localeCompare(b.id);

    return dir === "asc" ? comparison : -comparison;
  });

  const pages = Math.max(1, Math.ceil(sortedOrders.length / pageSize));
  const page = Number.isInteger(requestedPage)
    ? Math.min(Math.max(1, requestedPage), pages)
    : 1;
  const pageOrders = sortedOrders.slice((page - 1) * pageSize, page * pageSize);

  return (
    <main className="mx-auto max-w-6xl space-y-8 p-6">
      <header>
        <h1 className="text-3xl font-bold">Addis Eats Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Demonstration data · October 14–18, 2026
        </p>
      </header>

      <section className="rounded-lg border p-5">
        <h2 className="text-lg font-semibold">Total Revenue</h2>
        <p className="mt-2 text-3xl font-bold">{formatETB(totalRevenue)}</p>
        <p className="text-sm text-gray-500">
          Excludes cancelled orders. Uses six demonstration orders.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Revenue by Neighbourhood</h2>
        <RevenueChart data={revenueByArea} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Orders per Day</h2>
        <p className="text-sm text-gray-600">
          October 14–18, 2026 · Number of non-cancelled orders
        </p>
        <OrdersChart data={ordersByDay} />
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">Daily order counts represented in the line chart</caption>
          <thead>
            <tr className="border-b">
              <th scope="col" className="p-3">Date</th>
              <th scope="col" className="p-3 text-right">Orders</th>
            </tr>
          </thead>
          <tbody>
            {ordersByDay.map(({ day, orders }) => (
              <tr key={day} className="border-b">
                <td className="p-3">{day}</td>
                <td className="p-3 text-right tabular-nums">{orders}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">Revenue Summary</h2>
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">Revenue by neighbourhood in Ethiopian birr</caption>
          <thead>
            <tr className="border-b">
              <th scope="col" className="p-3">Neighbourhood</th>
              <th scope="col" className="p-3 text-right">Revenue (ETB)</th>
            </tr>
          </thead>
          <tbody>
            {revenueByArea.map(({ area, revenue }) => (
              <tr key={area} className="border-b">
                <td className="p-3">{area}</td>
                <td className="p-3 text-right tabular-nums">{formatETB(revenue)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Orders</h2>

        {orders.length === 0 ? (
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold">No orders yet</h3>
            <p className="mt-2">Browse the menu to place your first order.</p>
            <Link className="mt-3 inline-block underline" href="/menu">
              Browse menu
            </Link>
          </div>
        ) : (
          <OrderTable
            orders={pageOrders}
            page={page}
            pages={pages}
            sort={sort}
            dir={dir}
          />
        )}
      </section>
    </main>
  );
}
