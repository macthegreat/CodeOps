
"use client";

import { useState } from "react";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";

export default function MenuBrowser({ dishes }) {
  const [category, setCategory] = useState("All");

  const filteredDishes =
    category === "All"
      ? dishes
      : dishes.filter(
          (dish) =>
            dish.category?.toLowerCase() === category.toLowerCase()
        );

  return (
    <div className="menu-browser">
      <CategoryBar
        category={category}
        onCategoryChange={setCategory}
      />

      <p className="filter-result-count" aria-live="polite">
        Showing {filteredDishes.length}{" "}
        {filteredDishes.length === 1 ? "dish" : "dishes"}
      </p>

      <DishList dishes={filteredDishes} />
    </div>
  );
}
