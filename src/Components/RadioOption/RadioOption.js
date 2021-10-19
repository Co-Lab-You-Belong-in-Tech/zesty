import React from 'react'
import Radio from '@mui/material/Radio';

function RadioOption({ id, name, title, optionState, onChange }) {
    return (
        <div>
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
    )
}

export default RadioOption
