import Link from "next/link";

export default function CartPage() {
  return (
    <main>
      <h1>Cart</h1>

      <Link href="/">Home</Link>
      <br />
      <Link href="/menu">Menu</Link>
      <br />
      <Link href="/checkout">Checkout</Link>
    </main>
  );
}