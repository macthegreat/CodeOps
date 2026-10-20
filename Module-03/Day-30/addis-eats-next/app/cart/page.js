
import Link from "next/link";

export const metadata = {
  title: "Your Cart",
  description: "Review your food order on Addis Eats.",
};

export default function CartPage() {
  return (
    <div className="cart-page">
      <div className="cart-page-heading">
        <span className="eyebrow">ALMOST TIME TO EAT</span>
        <h1>Your cart</h1>
        <p>Review your selection before placing your order.</p>
      </div>

      <section className="cart-empty-card" aria-labelledby="empty-cart-title">
        <div className="cart-empty-icon" aria-hidden="true">
          🛒
        </div>

        <h2 id="empty-cart-title">Your cart is waiting for something delicious</h2>

        <p>
          You haven't added any dishes yet. Explore the menu and find
          something you'll love.
        </p>

        <Link href="/menu" className="button-primary">
          Explore the menu →
        </Link>

        <Link href="/" className="cart-back-link">
          Back to home
        </Link>
      </section>
    </div>
  );
}
