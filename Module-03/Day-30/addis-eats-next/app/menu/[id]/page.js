
import { notFound } from "next/navigation";
import { getDishes } from "../../../lib/getDishes";

export const dynamicParams = false;

export async function generateStaticParams() {
  const dishes = await getDishes();

  return dishes.map((dish) => ({
    id: String(dish.id),
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const dishes = await getDishes();
  const dish = dishes.find((item) => String(item.id) === id);

  if (!dish) {
    return {
      title: "Dish Not Found",
      description: "This dish could not be found on the Addis Eats menu.",
    };
  }

  return {
    title: dish.name,
    description: `${dish.name} — ${dish.description} Available for ${dish.price} ETB in Addis Ababa.`,
    alternates: {
      canonical: `/menu/${id}`,
    },
    openGraph: {
      title: `${dish.name} · Addis Eats`,
      description: `${dish.name} — ${dish.description}`,
      url: `/menu/${id}`,
      type: "website",
    },
  };
}

export default async function DishPage({ params }) {
  const { id } = await params;
  const dishes = await getDishes();

  const dish = dishes.find((item) => String(item.id) === id);

  if (!dish) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    name: dish.name,
    description: dish.description,
    offers: {
      "@type": "Offer",
      price: dish.price,
      priceCurrency: "ETB",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <h1>{dish.name}</h1>
      <p>Category: {dish.category}</p>
      <p>Price: {dish.price} ETB</p>
      <p>{dish.description}</p>
    </main>
  );
}
