import { notFound } from "next/navigation";
import { getOrder } from "../../../db.js";
import OrderStatus from "../OrderStatus.jsx";

export const dynamic = "force-dynamic";

export default async function OrderPage({ params }) {
  const { id } = await params;
  const order = await getOrder(id);

  if (!order) {
    notFound();
  }

  return (
    <main>
      <OrderStatus initial={order} />
    </main>
  );
}