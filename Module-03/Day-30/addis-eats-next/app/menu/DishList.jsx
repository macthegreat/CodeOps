
import Link from "next/link";

export default function DishList({ dishes }) {
  if (!dishes || dishes.length === 0) {
    return (
      <div className="dish-empty" role="status">
        <span aria-hidden="true">🍽️</span>
        <h3>No dishes found</h3>
        <p>Try another category or check back later.</p>
      </div>
    );
  }

  return (
    <div className="dish-grid">
      {dishes.map((dish) => (
        <article className="dish-card" key={dish.id}>
          <div className="dish-card-visual" aria-hidden="true">
            <span>🍲</span>
          </div>

          <div className="dish-card-content">
            <h3>{dish.name}</h3>
            <p className="dish-description">
              {dish.description || "A delicious Ethiopian favorite."}
            </p>

            <div className="dish-card-footer">
              <p className="dish-price">
                {Number(dish.price).toLocaleString("en-ET")}{" "}
                <span>ETB</span>
              </p>

              <Link
                href={`/menu/${dish.id}`}
                className="dish-view-link"
                aria-label={`View details for ${dish.name}`}
              >
                View dish <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
