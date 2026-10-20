
import { getDishes } from "../../lib/getDishes";
import MenuBrowser from "./MenuBrowser";

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
    <div className="menu-page">
      <section className="menu-hero">
        <span className="eyebrow">MADE WITH LOCAL FLAVOR</span>
        <h1>Discover your next favorite meal.</h1>
        <p>
          Explore Ethiopian classics, find something delicious,
          and make your next meal special.
        </p>
        <div className="menu-hero-note">
          <span aria-hidden="true">🍽️</span>
          <span>{dishes.length} dishes to explore</span>
        </div>
      </section>

      <section className="menu-content" aria-label="Food menu">
        <div className="menu-section-heading">
          <h2>Explore the menu</h2>
          <p>Find the dishes you are craving.</p>
        </div>

        <MenuBrowser dishes={dishes} />
      </section>
    </div>
  );
}
