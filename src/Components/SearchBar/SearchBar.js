import React, { useState } from "react";
import RecipeList from "../RecipeList/RecipeList";
import "./SearchBar.css";

const apiKey = `${process.env.REACT_APP_RECIPE_API_KEY}`;

export default function SearchBar() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  let [loaded, setLoaded] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    getRecipes();
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

  function load() {
    setLoaded(true);
    getRecipes();
  }

  if (loaded) {
    return (
      <>
        <div className="search-bar">
          <section>
            <h2>What would you like to eat this week?</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Type an ingredient or cuisine..."
                onChange={handleQueryChange}
                autoFocus={true}
              />
            </form>
            <div className="hint">Suggested: tacos, chocolate, potatoes..</div>
          </section>
        </div>
        <section>
          <RecipeList recipeData={recipes} />
        </section>
      </>
    );
  } else {
    load();
    return "Loading...";
  }
}
