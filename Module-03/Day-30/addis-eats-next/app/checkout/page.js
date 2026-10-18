
export const dynamic = "force-dynamic";

import CheckoutForm from "./CheckoutForm";
import { redirect } from "next/navigation";
import { getSession } from "../../lib/session.js";

export default async function CheckoutPage() {
  const session = await getSession();

  if (!session?.user?.id) {
    redirect("/signin?next=/checkout");
  }

  return (
    <main>
      <h1>Checkout</h1>
      <CheckoutForm />
    </main>
  );
}
