import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home";
import MealList from "./Pages/MealList";
import ShoppingList from "./Pages/ShoppingList";
import Preferences from "./Pages/Preferences";
import Meal from "./Pages/Meal";
import "./App.css";

const apiKey = `${process.env.REACT_APP_RECIPE_API_KEY}`;

function App() {
  const getRecipes = () => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=10&addRecipeInformation=true&ignorePantry=false&instructionsRequired=true&fillIngredients=true&`

      // This will be the API call whenwe have preferences and ingredients to filter
      // `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=10&addRecipeInformation=true&ignorePantry=false&query=${ingredients}&instructionsRequired=true&fillIngredients=true&diet=${diet}&intolerances=${allergies}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/meal-list" component={MealList} />
          <Route path="/shopping-list" component={ShoppingList} />
          <Route path="/preferences" component={Preferences} />
          <Route path="/meal/:id" component={Meal} />
        </Switch>
      </Router>
      <button onClick={getRecipes}>Click for recipes</button>
    </div>
  );
}

export default App;
