import React, { useState } from "react";

export default function BestCuisines({ brands }) {
  const [showAll, setShowAll] = useState(false);

  // Show first 11 if not expanded
  const displayedBrands = showAll ? brands : brands.slice(0, 11);

  return (
    <div className="best-cuisines-wrapper py-6 px-4 bg-white">
      {/* Section title */}
      <h2 className="text-2xl font-bold mb-4">Best Cuisines Near Me</h2>

      {/* Grid of cuisine cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {displayedBrands.map((brand, index) => (
          <a
            key={index}
            href={brand.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-md px-4 py-6 text-center text-sm font-semibold transition flex items-center justify-center min-h-[70px]"
          >
            {brand.text}
          </a>
        ))}

        {/* Show More / Show Less Button */}
        {brands.length > 11 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-orange-500 text-white border border-orange-600 rounded-xl shadow hover:shadow-lg px-4 py-6 text-center text-sm font-semibold transition flex items-center justify-center min-h-[70px] gap-2"
          >
            {showAll ? "Show Less" : "Show More"}
            <span className="text-sm">{showAll ? "▲" : "▼"}</span>
          </button>
        )}
      </div>
    </div>
  );
}
