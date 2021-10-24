import React from "react";
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

function App() {
  let favorites = [];

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
