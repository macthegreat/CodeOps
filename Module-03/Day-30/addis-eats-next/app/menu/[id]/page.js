import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}

export default async function DishPage({ params }) {
  const { id } = await params;

  if (!["1", "2", "3"].includes(id)) {
    notFound();
  }

  return (
    <main>
      <h1>Dish Details</h1>
      <p>Dish ID: {id}</p>
    </main>
  );
}