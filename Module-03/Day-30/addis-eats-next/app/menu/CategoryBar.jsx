
"use client";

export default function CategoryBar({
  category,
  onCategoryChange,
}) {
  const categories = ["All", "Ethiopian", "Italian", "Fast Food"];

  return (
    <div
      className="category-bar"
      role="group"
      aria-label="Filter dishes by category"
    >
      {categories.map((item) => (
        <button
          key={item}
          type="button"
          className={`category-button ${
            category === item ? "active" : ""
          }`}
          aria-pressed={category === item}
          onClick={() => onCategoryChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
