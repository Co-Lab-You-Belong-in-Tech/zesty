import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import MealPageImage from '../Components/MealPageImage/MealPageImage';
import MealHeader from '../Components/MealHeader/MealHeader';
import MealTabs from '../Components/MealTabs/MealTabs';

const apiKey = `${process.env.REACT_APP_RECIPE_API_KEY}`

function Meal() {
    const [ meal, setMeal ] = useState([])
    const [ ingredients, setIngredients ] = useState([])
    const [ directions, setDirections ] = useState([])
    let {id} = useParams();

    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/informationBulk?ids=${id}&includeNutrition=false&apiKey=${apiKey}`
        )
        .then((response) => response.json())
        .then((data) => {
            setMeal(data[0])
            setIngredients(data[0].extendedIngredients)
            setDirections(data[0].analyzedInstructions[0].steps)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [id]) 



    return (
        <div>
            <MealPageImage src={meal.image} />
            <MealHeader 
                title={meal.title}
                time={meal.readyInMinutes}
                servings={meal.servings}
            />
            <MealTabs 
                summary={meal.summary} 
                ingredients={ingredients}
                directions={directions}
            />
        </div>
    );
};

export default Meal;

