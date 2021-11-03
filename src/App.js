import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home";
import MealList from "./Pages/MealList";
import ShoppingList from "./Pages/ShoppingList";
import Preferences from "./Pages/Preferences";
import Meal from "./Pages/Meal";
import Help from "./Pages/Help";
import "./App.css";
import { FavoriteContext } from "./Contexts/FavoriteContext";

import { SearchContext } from './Contexts/SearchContext'

function App() {
  const [query, setQuery] = useState("");
  const [servings, setServings] = useState("any")
  const [time, setTime] = useState(60)
  const [allergies, setAllergies] = useState("")
  const [diet, setDiet] = useState("")
  let favorites = [];

  return (
    <div className="App">
      <SearchContext.Provider 
        value={{ 
          query, setQuery,
          servings, setServings,
          time, setTime, 
          allergies, setAllergies, 
          diet, setDiet }}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/preferences" component={Preferences} />
              <FavoriteContext.Provider value={{ favorites }}>
              <Route
                path="/my-meal-list"
                component={MealList}
                favorites={favorites}
              />
              <Route path="/shopping-list" component={ShoppingList} />
              <Route path="/meal/:id" component={Meal} />
              <Route path="/help" component={Help} />  
            </FavoriteContext.Provider>
          </Switch>
        </Router>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
