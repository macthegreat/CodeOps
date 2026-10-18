
import { getOrder } from "../../../../db.js";
import { getSession } from "../../../../lib/session.js";

export async function GET(request, { params }) {
  const session = await getSession();

  if (!session?.user?.id) {
    return Response.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const { id } = await params;
  const order = await getOrder(id);

  if (!order) {
    return Response.json(
      { error: "Order not found" },
      { status: 404 }
    );
  }

  if (order.userId !== session.user.id) {
    return Response.json(
      { error: "Forbidden" },
      { status: 403 }
    );
  }

  return Response.json(order);
}
