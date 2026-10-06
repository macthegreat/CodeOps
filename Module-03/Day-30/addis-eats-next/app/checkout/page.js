export const dynamic = "force-dynamic";

export default function CheckoutPage() {
  // This route is dynamic because checkout needs to read
  // request-specific data at request time.

  return (
    <main>
      <h1>Checkout</h1>
    </main>
  );
}