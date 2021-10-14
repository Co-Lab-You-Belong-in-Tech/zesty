import React from "react";
import Recipe from "../Recipe/Recipe";

export default function RecipeList({ recipeData }) {
  return (
    <div className="recipe-list">
      {recipeData.map((recipe) => {
        return (
          <Recipe
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            diets={recipe.diets}
            time={recipe.readyInMinutes}
            servings={recipe.servings}
            summary={recipe.summary}
            ingredients={recipe.extendedIngredients}
            stepsList={recipe.analyzedInstructions}
          />
        );
      })}
    </div>
  );
}
