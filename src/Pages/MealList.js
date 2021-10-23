import React, { useContext } from "react";
import { FavoriteContext } from "../Contexts/FavoriteContext";

//create function to remove favorite based off of id

function MealList(meal) {
  const { favorites } = useContext(FavoriteContext);
  console.log(favorites);

  const favoritesList = favorites.map((favorite) => {
    const removeFromFavorite = (meal) => {
      favorites.pop(meal);
      console.log(favorites);
    };
    return (
      <div className="meal-list">
        <div className="favorite-meal">
          <img src={favorite.image} alt={favorite.title} />
          <h3>{favorite.title}</h3>
        </div>
        <button onClick={() => removeFromFavorite(meal)}>
          Remove from meal list
        </button>
      </div>
    );
  });
  return (
    <div>
      {favoritesList
        ? favoritesList
        : "Your meal list is empty! Choose a recipe to add to your meal list"}
    </div>
  );
}
export default MealList;
