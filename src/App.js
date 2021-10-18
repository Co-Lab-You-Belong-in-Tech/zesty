import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home";
import MealList from "./Pages/MealList";
import ShoppingList from "./Pages/ShoppingList";
import Preferences from "./Pages/Preferences";
import Meal from "./Pages/Meal";
import "./App.css";

function App() {
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
    </div>
  );
}

export default App;
