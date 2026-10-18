
"use server";

import { revalidatePath } from "next/cache";
import { orderSchema } from "../../schema.js";
import {
  createOrder,
  getSession,
  getOrder,
  markCancelled,
} from "../../db.js";

export async function placeOrder(previousState, formData) {
  const rawData = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    dishId: formData.get("dishId"),
    quantity: Number(formData.get("quantity")),
  };

  const result = orderSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      message: Object.values(
        result.error.flatten().fieldErrors
      )
        .flat()
        .join(" "),
    };
  }

  try {
    const order = await createOrder(result.data);

    revalidatePath("/checkout");

    return {
      success: true,
      message: `Order placed successfully! Order ID: ${order.id}`,
    };
  } catch {
    return {
      success: false,
      message: "Failed to place your order. Please try again.",
    };
  }
}

export async function cancelOrder(orderId) {
  const session = await getSession();

  if (!session) {
    return {
      success: false,
      message: "You must be logged in to cancel an order.",
    };
  }

  const order = await getOrder(orderId);

  if (!order) {
    return {
      success: false,
      message: "Order not found.",
    };
  }

  if (order.userId !== session.id) {
    return {
      success: false,
      message: "You are not authorized to cancel this order.",
    };
  }

  if (order.status === "CANCELLED") {
    return {
      success: false,
      message: "This order is already cancelled.",
    };
  }

  await markCancelled(orderId);

  revalidatePath("/checkout");

  return {
    success: true,
    message: "Order cancelled successfully.",
  };
}
