import Link from "next/link";

export const revalidate = 60;

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