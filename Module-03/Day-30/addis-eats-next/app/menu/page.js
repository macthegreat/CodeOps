import Link from "next/link";
import { getDishes } from "@/lib/getDishes";
import DishList from "./DishList";
import CategoryBar from "./CategoryBar";
import FilterShell from "./FilterShell";

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