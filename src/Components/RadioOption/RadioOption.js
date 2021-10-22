import React from 'react';
import Radio from '@mui/material/Radio';

import './Option.css';


function RadioOption({ id, name, title, optionState, onChange, accordionDetailsClass }) {
    return (
        <div className='accordion-details'>
            <Radio 
                id={id}
                name={name}
                value={id}
                inputProps={{ 'aria-label': id }}
                onChange={onChange}
                checked={optionState === id}  
            />
            <label>{title}</label>
        </div>
    );
};

export default RadioOption;
