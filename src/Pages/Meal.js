import React from 'react';
import MealPageImage from '../Components/MealPageImage/MealPageImage';
import MealHeader from '../Components/MealHeader/MealHeader';
import MealTabs from '../Components/MealTabs/MealTabs'


function Meal() {
    return (
        <div>
            <MealPageImage />
            <MealHeader />
            <MealTabs />
        </div>
    );
};

export default Meal;
