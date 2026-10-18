
import { notFound, redirect } from "next/navigation";
import { getOrder } from "../../../db.js";
import { getSession } from "../../../lib/session.js";
import OrderStatus from "../OrderStatus.jsx";

export const dynamic = "force-dynamic";

export default async function OrderPage({ params }) {
  const session = await getSession();

  if (!session?.user?.id) {
    redirect("/signin");
  }

  const { id } = await params;
  const order = await getOrder(id);

  if (!order || order.userId !== session.user.id) {
    notFound();
  }

  return (
    <main>
      <OrderStatus initial={order} />
    </main>
  );
}
