import React from 'react';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';
import './MealHeader.css';

function MealHeader({ title, time, servings, diets }) {
    const displayDiets = diets.map((diet) => {
        return (
            <p className="diet">{diet}</p>
        )
    })

    return (
        <section className="meal-header">
            <Title title={title} />
            <Subtitle text={`Ready in ${time} min`} />
            <Subtitle text={`Servings: ${servings}`} />
            <div className="diet-list">{displayDiets}</div>
        </section>
    );
};

export default MealHeader;
