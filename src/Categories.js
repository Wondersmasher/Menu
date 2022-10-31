import React from "react";

const Categories = ({ category, filterCategory }) => {
  const categ = category.map((cat, idx) => {
    return (
      <button
        type="button"
        className="filter-btn"
        key={idx}
        onClick={() => filterCategory(cat)}
      >
        {cat}
      </button>
    );
  });
  return <div className="btn-container">{categ}</div>;
};

export default Categories;
