import React, { useEffect, useState } from "react";
import RecipeList from "../RecipeList/RecipeList";
import "./SearchBar.css";

const apiKey = `${process.env.REACT_APP_RECIPE_API_KEY}`;

export default function SearchBar() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <section className="search-bar">
        <form onSubmit={search}>
          <input
            type="text"
            placeholder="Search recipes..."
            onChange={handleQueryChange}
            autoFocus={true}
          />

          <button variant="contained" onClick={getRecipes}>
            Get Recipes
          </button>
        </form>
      </section>
      <RecipeList recipeData={recipes} />
    </>
  );
}
