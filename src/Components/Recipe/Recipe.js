import React from "react";
import "./Recipe.css";

function Recipe({ image, title }) {
  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img alt={title} src={image} />
      </div>
      <div className="recipe-title">
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default Recipe;
