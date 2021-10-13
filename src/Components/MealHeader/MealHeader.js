import React from 'react';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';
import './MealHeader.css';

function MealHeader() {
    return (
        <div className="meal-header">
            <Title title="Soba Noodle Salad" />
            <Subtitle text="Total Time: 15min" />
            <Subtitle text="Servings: 4" />
        </div>
    );
};

export default MealHeader;
