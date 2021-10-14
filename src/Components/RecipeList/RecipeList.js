import React from "react";
import Recipe from "../Recipe/Recipe";

function RecipeList({ recipeData }) {
  return (
    <main>
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
    </main>
  );
}

export default RecipeList;
