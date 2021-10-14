import React from "react";

function Recipe({ image, title, diets, time, servings }) {
  const displayDiets = diets.map((diet) => {
    return <li>{diet}</li>;
  });

  return (
    <div>
      <img alt="" src={image} />
      <h4>{title}</h4>
      <ul>{displayDiets}</ul>
      <h5>Total time: {time} minutes</h5>
      <h5>Servings: {servings}</h5>
    </div>
  );
}

export default Recipe;
