
import Link from "next/link";
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
    <div className="dish-detail-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/menu">Menu</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{dish.name}</span>
      </nav>

      <article className="dish-detail-card">
        <div className="dish-detail-visual" aria-hidden="true">
          <span>🍲</span>
        </div>

        <div className="dish-detail-content">
          <span className="dish-category-label">{dish.category}</span>

          <h1>{dish.name}</h1>

          <p className="dish-detail-description">
            {dish.description}
          </p>

          <div className="dish-detail-price">
            <span>Price</span>
            <strong>
              {Number(dish.price).toLocaleString("en-ET")} ETB
            </strong>
          </div>

          <div className="dish-detail-actions">
            <Link href="/menu" className="button-primary">
              Browse more dishes →
            </Link>

            <Link href="/cart" className="button-secondary">
              View cart
            </Link>
          </div>

          <p className="dish-detail-note">
            Discover more Ethiopian favorites on the Addis Eats menu.
          </p>
        </div>
      </article>
    </div>
  );
}
