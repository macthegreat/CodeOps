import Link from "next/link";

const formatETB = (value) =>
  new Intl.NumberFormat("en-ET", {
    style: "currency",
    currency: "ETB",
    maximumFractionDigits: 0,
  }).format(value);

export default function OrderTable({
  orders,
  page,
  pages,
  sort,
  dir,
}) {
  function sortUrl(column) {
    const nextDir =
      sort === column && dir === "asc" ? "desc" : "asc";

    return `/dashboard?sort=${column}&dir=${nextDir}&page=1`;
  }

  return (
    <section>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Orders, sorted by {sort}, {dir === "asc" ? "ascending" : "descending"}
          </caption>

          <thead>
            <tr className="border-b">
              <th scope="col" className="p-3">
                <Link href={sortUrl("id")}>Order ID</Link>
              </th>
              <th scope="col" className="p-3">
                <Link href={sortUrl("createdAt")}>Date</Link>
              </th>
              <th scope="col" className="p-3 text-right">
                <Link href={sortUrl("total")}>Total (ETB)</Link>
              </th>
              <th scope="col" className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="p-3">{order.id}</td>
                <td className="p-3">
                  {new Date(order.createdAt).toLocaleDateString("en-ET")}
                </td>
                <td className="p-3 text-right tabular-nums">
                  {formatETB(order.total)}
                </td>
                <td className="p-3">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <nav
        aria-label="Order table pages"
        className="mt-4 flex items-center justify-between"
      >
        <span>
          Page {page} of {pages}
        </span>

        {page > 1 ? (
          <Link
            href={`/dashboard?page=${page - 1}&sort=${sort}&dir=${dir}`}
            className="underline"
          >
            Previous
          </Link>
        ) : (
          <span aria-disabled="true" className="text-gray-400">
            Previous
          </span>
        )}

        {page < pages ? (
          <Link
            href={`/dashboard?page=${page + 1}&sort=${sort}&dir=${dir}`}
            className="underline"
          >
            Next
          </Link>
        ) : (
          <span aria-disabled="true" className="text-gray-400">
            Next
          </span>
        )}
      </nav>
    </section>
  );
}