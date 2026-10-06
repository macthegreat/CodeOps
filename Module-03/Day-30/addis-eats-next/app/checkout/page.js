import Link from "next/link";

export default function CheckoutPage() {
  return (
    <main>
      <h1>Checkout</h1>

      <Link href="/">Home</Link>
      <br />
      <Link href="/menu">Menu</Link>
      <br />
      <Link href="/cart">Cart</Link>
    </main>
  );
}