import React, { useContext } from "react";
import { FavoriteContext } from "../Contexts/FavoriteContext";

//create function to remove favorite

function MealList() {
  return (
    <div className="meal-list">
      <p>
        <span>Count of Meals</span>
        <span>Select</span>
      </p>
    </div>
  );
}
export default MealList;
