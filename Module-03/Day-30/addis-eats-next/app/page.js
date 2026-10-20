
import Link from "next/link";

const popularDishes = [
  {
    name: "Doro Wat",
    description: "A classic Ethiopian chicken stew",
    price: "350 ETB",
    emoji: "🍗",
    color: "#f9e5d2",
  },
  {
    name: "Beyaynetu",
    description: "A colorful platter of fasting dishes",
    price: "220 ETB",
    emoji: "🥗",
    color: "#e5eedb",
  },
  {
    name: "Kitfo",
    description: "A beloved Ethiopian specialty",
    price: "400 ETB",
    emoji: "🍲",
    color: "#f3dfd5",
  },
  {
    name: "Shiro Tegabeno",
    description: "Rich, comforting chickpea stew",
    price: "180 ETB",
    emoji: "🥘",
    color: "#f5edcf",
  },
];

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">YOUR TASTE OF ETHIOPIA</span>

          <h1>
            Your favorite food,
            <br />
            <span>delivered with love.</span>
          </h1>

          <p className="hero-description">
            Discover delicious Ethiopian dishes and enjoy the flavors
            you love, delivered right to your door in Addis Ababa.
          </p>

          <div className="hero-actions">
            <Link href="/menu" className="button-primary">
              Explore the menu <span aria-hidden="true">→</span>
            </Link>

            <Link href="/cart" className="button-secondary">
              View your cart
            </Link>
          </div>

          <div className="hero-note">
            <span aria-hidden="true">✦</span>
            Celebrating the flavors of Ethiopia
          </div>
        </div>

        <div className="hero-visual" aria-label="Ethiopian food illustration">
          <div className="hero-circle">
            <span className="hero-food" aria-hidden="true">
              🍛
            </span>
          </div>

          <div className="floating-card">
            <span className="floating-card-icon" aria-hidden="true">
              🥘
            </span>
            <div>
              <strong>Made for food lovers</strong>
              <p>Local flavors, memorable meals</p>
            </div>
          </div>

          <span className="hero-decoration hero-decoration-one" />
          <span className="hero-decoration hero-decoration-two" />
        </div>
      </section>

      <section className="popular-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A TASTE OF HOME</span>
            <h2>Popular dishes</h2>
            <p>Explore some Ethiopian favorites.</p>
          </div>

          <Link href="/menu" className="text-link">
            View full menu →
          </Link>
        </div>

        <div className="popular-grid">
          {popularDishes.map((dish) => (
            <article className="popular-card" key={dish.name}>
              <div
                className="popular-card-visual"
                style={{ backgroundColor: dish.color }}
                aria-hidden="true"
              >
                <span>{dish.emoji}</span>
              </div>

              <div className="popular-card-content">
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>

                <div className="popular-card-footer">
                  <strong>{dish.price}</strong>
                  <Link href="/menu" aria-label={`Explore menu for ${dish.name}`}>
                    View dish →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-cta">
        <div>
          <span className="eyebrow">SOMETHING DELICIOUS AWAITS</span>
          <h2>Ready to find your next favorite?</h2>
          <p>Explore the menu and discover your next great meal.</p>
        </div>

        <Link href="/menu" className="button-light">
          Browse all dishes →
        </Link>
      </section>
    </div>
  );
}
