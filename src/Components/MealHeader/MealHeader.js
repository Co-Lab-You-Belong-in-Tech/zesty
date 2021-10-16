import React from 'react';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';
import './MealHeader.css';

function MealHeader({ title, time, servings }) {
    return (
        <section className="meal-header">
            <Title title={title} />
            <Subtitle text={`Ready in ${time} min`} />
            <Subtitle text={`Servings: ${servings}`} />
        </section>
    );
};

export default MealHeader;
