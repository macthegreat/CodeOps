"use client";

import useSWR from "swr";
import { fetcher } from "../../lib/fetcher.js";

export default function OrderStatus({ initial }) {
  const { data, error, isLoading } = useSWR(
    `/api/orders/${initial.id}`,
    fetcher,
    {
      fallbackData: initial,
      refreshInterval: 5000,
    }
  );

  if (error) {
    return <p>Unable to refresh order status.</p>;
  }

  if (isLoading && !data) {
    return <p>Loading order status...</p>;
  }

  return (
    <section>
      <h1>Order Details</h1>
      <p>Order ID: {data.id}</p>
      <p>Status: {data.status}</p>
      <p>Quantity: {data.quantity}</p>
      <p>Created At: {data.createdAt}</p>
      <p>Next status check: every 5 seconds</p>
    </section>
  );
}