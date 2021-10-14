import React from "react";
import "./Recipe.css";

function Recipe({ image, title, diets, time, servings }) {
  const displayDiets = diets.map((diet) => {
    return <li>{diet}</li>;
  });

  return (
    <div className="recipe">
      <section classname="recipe-card">
        <img src={image} alt={title} />
        <h4>{title}</h4>
        <ul>{displayDiets}</ul>
        <h5>Total time: {time} minutes</h5>
        <h5>Servings: {servings}</h5>
      </section>
    </div>
  );
}

export default Recipe;
