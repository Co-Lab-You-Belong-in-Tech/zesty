import React, { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css';

const apiKey = `${process.env.REACT_APP_RECIPE_API_KEY}`

function App() {

  const getRecipes = () => {

    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=10&addRecipeInformation=true&ignorePantry=false&instructionsRequired=true&fillIngredients=true&`

      // This will be the API call whenwe have preferences and ingredients to filter
      // `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=10&addRecipeInformation=true&ignorePantry=false&query=${ingredients}&instructionsRequired=true&fillIngredients=true&diet=${diet}&intolerances=${allergies}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results)
      })
      .catch(() => {
        console.log("error")
      }) 
  }

  return (
    <div className="App">
      <NavBar />
      <button onClick={getRecipes}>Click for recipes</button>
    </div>
  );
}

export default App;
