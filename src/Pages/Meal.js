import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import MealPageImage from '../Components/MealPageImage/MealPageImage';
import MealHeader from '../Components/MealHeader/MealHeader';
import MealTabs from '../Components/MealTabs/MealTabs';

const apiKey = `${process.env.REACT_APP_RECIPE_API_KEY}`

const exampleIngredients = [
    "7 oz dried soba noodles (buckwheat noodles) (2-3 bundles)",
    "2 green onions/scallions", 
    "1 bunch cilantro (coriander) (0.7 oz, 20 g)",
    "1 Tbsp toasted white sesame seeds",
    "1 Tbsp neutral-flavored oil (vegetable, rice bran, canola, etc)",
    "1/2 tsp crushed red peppers (red pepper flakes)",
    "3 Tbsp honey (use maple syrup for vegan)",
    "3 Tbsp soy sauce"
]

const exampleDirections = [
    "Gather all the ingredients.",
    "To make the dressing, combine 1 Tbsp vegetable oil, 3 Tbsp sesame oil, and 1/2 tsp crushed red peppers in a small saucepan.",
    "Whisk all together and infuse the oil over medium heat for 3 minutes. Alternatively, you can put these ingredients in a small microwave-safe bowl and microwave for 3 minutes. Set aside to let it cool a bit; be careful while handling as it'll get very hot.",
    "Add 3 Tbsp honey and 3 Tbsp soy sauce to the oil mixture.",
    "Whisk all together until honey is completely dissolved.",
    "Bring water to a boil (You do not need to salt the water for cooking soba). Cook the soba noodles according to the package instructions, but make sure they are al dente. Drain into a colander and rinse the soba noodles under cold running water. This step is important to remove the starch from the soba noodles. Drain well and transfer to a large bowl.",
    "Thinly slice the green onions and chop cilantro into small pieces.",
    "Combine the soba noodles, dressing, green onion, cilantro, and sesame seeds in the bowl.",
    "Toss everything together. Transfer to a serving bowl or plate. Serve chilled or at room temperature."
]

function Meal() {
    const [ meal, setMeal ] = useState([])
    let {id} = useParams();

    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/informationBulk?ids=${id}&includeNutrition=false&apiKey=${apiKey}`
        )
        .then((response) => response.json())
        .then((data) => {
            setMeal(data[0])
            console.log(data[0])
        })
        .catch((error) => {
            console.log(error)
        })
    }, [id]) 


    return (
        <div>
            <MealPageImage src={meal.image} />
            <MealHeader />
            <MealTabs 
                summary="This recipe was originally published in May 2013 and it’s been one of the most popular recipes on Just One Cookbook. This Soba Noodle Salad recipe is the perfect blank slate for customization. If you like it spicy, add more crushed chili pepper. You can also add thin strips of cucumbers and carrots to make the salad into a main dish instead of a side dish. For extra protein and substance, a hard-boiled egg or leftover grilled tofu makes a great addition too. A few tips: Soba noodles cook much faster than spaghetti noodles so this noodle salad can be completed in a very short time. It’s important to drain the noodles well and run it under cold water. This helps to remove any starch from the noodles. You can prepare the dressing ahead of time but I don’t recommend tossing everything together until you are ready to serve, or else soba noodles will absorb the dressing and become soggy. If you or your children don’t eat spicy food at all, you can omit the crushed red peppers." 
                ingredients={exampleIngredients}
                directions={exampleDirections}
            />
        </div>
    );
};

export default Meal;

