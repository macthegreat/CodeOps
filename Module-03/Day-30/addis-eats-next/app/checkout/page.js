
export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import { getSession } from "../../lib/session.js";
import CheckoutForm from "./CheckoutForm";
import Link from "next/link";

export const metadata = {
  title: "Checkout",
  description: "Complete your food order with Addis Eats.",
};

export default async function CheckoutPage() {
  const session = await getSession();

  if (!session?.user?.id) {
    redirect("/signin?next=/checkout");
  }

  return (
    <div className="checkout-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/menu">Menu</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Checkout</span>
      </nav>

      <header className="checkout-heading">
        <span className="eyebrow">JUST A FEW MORE STEPS</span>
        <h1>Complete your order</h1>
        <p>Enter your delivery details so the kitchen can prepare your order.</p>
      </header>

      <section className="checkout-card" aria-label="Checkout form">
        <div className="checkout-card-heading">
          <span className="checkout-step">01</span>
          <div>
            <h2>Delivery information</h2>
            <p>Make sure your contact details are correct.</p>
          </div>
        </div>

        <CheckoutForm />
      </section>

      <p className="checkout-note">
        Need to choose a dish first? <Link href="/menu">Browse the menu</Link>.
      </p>
    </div>
  );
}
