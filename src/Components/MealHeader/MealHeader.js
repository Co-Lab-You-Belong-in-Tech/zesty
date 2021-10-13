import React from 'react'
import Title from '../Title/Title'
import './MealHeader.css'

function MealHeader() {
    return (
        <div className="meal-header">
            <Title title="Soba Noodle Salad" />
            <h3>Total Time: 15min</h3>
            <h3>Servings: 4</h3>
        </div>
    )
}

export default MealHeader
