import React from "react";
import Recipe from "../Recipe/Recipe";
import { Link } from "react-router-dom";

function RecipeList({ recipeData }) {
  return (
    <main>
      {recipeData.map((recipe) => {
        return (
          <Link key={recipe.id} to={`/meal/${recipe.id}`}>
            <Recipe key={recipe.id} title={recipe.title} image={recipe.image} />
          </Link>
        );
      })}
    </main>
  );
}

export default RecipeList;
