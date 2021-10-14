import React, { useState } from "react";
import RecipeList from "../RecipeList/RecipeList";
import "./SearchBar.css";

const apiKey = `${process.env.REACT_APP_RECIPE_API_KEY}`;

export default function SearchBar() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("chocolate");

  function search(event) {
    event.preventDefault();
  }

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  const getRecipes = () => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=10&addRecipeInformation=true&ignorePantry=false&query=${query}&instructionsRequired=true&fillIngredients=true&`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.results);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="search-bar">
        <form onSubmit={search}>
          <input
            type="text"
            placeholder="Search recipes..."
            onChange={handleQueryChange}
            autoFocus={true}
          />
          <button variant="contained" onClick={getRecipes}>
            Search
          </button>
        </form>
      </div>
      <RecipeList recipeData={recipes} />
    </>
  );
}
