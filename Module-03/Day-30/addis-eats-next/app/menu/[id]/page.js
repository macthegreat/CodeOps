import { notFound } from "next/navigation";

export default async function DishPage({ params }) {
  const { id } = await params;

  if (id !== "1") {
    notFound();
  }

  return (
    <main>
      <h1>Dish Details</h1>
      <p>Dish ID: {id}</p>
    </main>
  );
}