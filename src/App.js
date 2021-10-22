import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home";
import MealList from "./Pages/MealList";
import ShoppingList from "./Pages/ShoppingList";
import Preferences from "./Pages/Preferences";
import Meal from "./Pages/Meal";
import "./App.css";

import { SearchContext } from './Contexts/SearchContext'

function App() {
  const [query, setQuery] = useState("");
  const [servings, setServings] = useState("any")
  const [time, setTime] = useState(30)
  const [allergies, setAllergies] = useState("")
  const [diet, setDiet] = useState("")

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
            <Route path="/meal-list" component={MealList} />
            <Route path="/shopping-list" component={ShoppingList} />
            <Route path="/preferences" component={Preferences} />
            <Route path="/meal/:id" component={Meal} />
          </Switch>
        </Router>
      </SearchContext.Provider>
      
    </div>
  );
}

export default App;
