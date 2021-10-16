import React from "react";
import { Link } from "react-router-dom";


function MealList() {
  const mealId = 635807;

  return (
    <div className="meal-list">
      <Link to={`/meal/${mealId}`}>See this meal</Link>
    </div>
  );
};


export default MealList;
