import React, { useContext } from "react";
import { FavoriteContext } from "../Contexts/FavoriteContext";

//create function to remove favorite based off of id

function MealList() {
  const { favorites } = useContext(FavoriteContext);
  console.log(favorites);

  const mealList = favorites.map((favorite) => {
    return (
      <div className="meal-list">
        <div className="favorite-meal">
          <img src={favorite.image} alt={favorite.title} />
          <h3>{favorite.title}</h3>
        </div>
      </div>
    );
  });
  return (
    <div>
      {mealList
        ? mealList
        : "Your meal list is empty! Choose a recipe to add to your meal list"}
    </div>
  );
}
export default MealList;
