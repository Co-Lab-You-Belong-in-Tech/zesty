import React from 'react'
import Checkbox from '@mui/material/Checkbox';

import '../RadioOption/Option.css'

function CheckboxOption({ id, title, onChange, checked }) {
    return (
        <div className="accordion-details">
           <Checkbox 
                checked={checked}
                onChange={onChange}
                id={id}
                name={id}
                inputProps={{ 'aria-label': id }}
           />
           <label>{title}</label> 
        </div>
    )
}

export default CheckboxOption
