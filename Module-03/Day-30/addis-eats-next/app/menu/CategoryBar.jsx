"use client";

import { useState } from "react";

export default function CategoryBar() {
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Ethiopian",
    "Italian",
    "Fast Food",
  ];

  return (
    <div>
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
        >
          {item}
        </button>
      ))}

      <p>Selected category: {category}</p>
    </div>
  );
}