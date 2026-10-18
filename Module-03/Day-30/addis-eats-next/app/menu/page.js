import Link from "next/link";
import { getDishes } from "../../lib/getDishes";
import DishList from "./DishList";
import CategoryBar from "./CategoryBar";
import FilterShell from "./FilterShell";


export const metadata = {
  title: "Ethiopian Food Menu",
  description:
    "Explore Ethiopian dishes including Doro Wat, Tibs, Kitfo and Shiro. Browse the Addis Eats menu and discover food in Addis Ababa.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Ethiopian Food Menu",
    description:
      "Explore Ethiopian dishes and discover food across Addis Ababa.",
    url: "/menu",
    type: "website",
  },
};

export const revalidate = 60;

export default async function MenuPage() {
  const dishes = await getDishes();

  return (
    <main>
      <h1>Menu</h1>

      <Link href="/">Home</Link>
      <br />
      <Link href="/cart">Cart</Link>
      <br />
      <Link href="/checkout">Checkout</Link>

      <CategoryBar />

      <FilterShell>
  <DishList dishes={dishes} />
</FilterShell>
    </main>
  );
}