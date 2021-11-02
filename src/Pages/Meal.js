import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import MealPageImage from "../Components/MealPageImage/MealPageImage";
import MealHeader from "../Components/MealHeader/MealHeader";
import MealTabs from "../Components/MealTabs/MealTabs";
import { FavoriteContext } from "../Contexts/FavoriteContext";
import swal from 'sweetalert';

const apiKey = `${process.env.REACT_APP_RECIPE_API_KEY}`;

function Meal() {
  const [meal, setMeal] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState([]);
  const [diets, setDiets] = useState([]);
  const { favorites } = useContext(FavoriteContext);

  let { id } = useParams();

  const addToFavorite = (meal) => {
    //loop through favorites array and if it doesn't equal id then push
    favorites.push(meal);
    swal("Success!", "This Recipe has been added to your meal list!", "success");
    // console.log(favorites);
  };

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/informationBulk?ids=${id}&includeNutrition=false&apiKey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMeal(data[0]);
        setIngredients(data[0].extendedIngredients);
        setDirections(data[0].analyzedInstructions[0].steps);
        setDiets(data[0].diets);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <main className="page-container">
      <MealPageImage src={meal.image} />
      <MealHeader
        title={meal.title}
        time={meal.readyInMinutes}
        servings={meal.servings}
        diets={diets}
      />
      <MealTabs
        summary={meal.summary}
        ingredients={ingredients}
        directions={directions}
      />
      <button onClick={() => addToFavorite(meal)} className="meal-btn">
        Add to Meal List
      </button>
    </main>
  );
}

export default Meal;
