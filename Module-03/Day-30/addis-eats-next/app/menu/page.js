import Link from "next/link";

export default function MenuPage() {
  return (
    <main>
      <h1>Menu</h1>

      <Link href="/">Home</Link>
      <br />
      <Link href="/cart">Cart</Link>
      <br />
      <Link href="/checkout">Checkout</Link>
    </main>
  );
}