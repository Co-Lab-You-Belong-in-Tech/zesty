import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import RadioOption from '../RadioOption/RadioOption'

function PreferenceOption({ panelExpanded, title, ariaControls, id, type, options, onChange, optionState, name, checked }) {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <Accordion expanded={expanded === panelExpanded} onChange={handleChange(panelExpanded)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={ariaControls}
                id={id}
            >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    {title}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>{optionState}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {options.map((option, index) => {
                    return (
                        <RadioOption 
                            key={option.id}
                            id={option.id}
                            name={name}
                            title={option.title}
                            onChange={onChange}
                            optionState={optionState}
                        />
                    )   
                })}
            </AccordionDetails>
        </Accordion>
    )
}

export default PreferenceOption
