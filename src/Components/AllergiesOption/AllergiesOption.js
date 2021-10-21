import React, { useState } from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CheckboxOption from '../CheckboxOption/CheckboxOption'

function AllergiesOption({ allergyOptions, allergies, setAllergies }) {
    const [expanded, setExpanded] = useState(false);
    const [checkedState, setCheckedState] = useState(
      new Array(allergyOptions.length).fill(false)
    );

    const handleAllergies = (position) => {
        const updatedCheckedState = checkedState.map((item, index) => 
          index === position ? !item : item
        )
        setCheckedState(updatedCheckedState)
        const chosenAllergies = []
        for(let i = 0; i < updatedCheckedState.length; i++) {
          if(updatedCheckedState[i]) {
            chosenAllergies.push(allergyOptions[i].id)
          }
        }
        const allergyQuery = chosenAllergies.join()
        setAllergies(allergyQuery) 
      }
    
      const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };

    return (
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel3bh-content'
            id='panel3bh-header'
            >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Allergies
            </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{allergies}</Typography>
            </AccordionSummary>
          <AccordionDetails>
            {allergyOptions.map((option, index) => {
              return (
                <CheckboxOption 
                  key={option.id}
                  id={option.id}
                  title={option.title}
                  onChange={() => handleAllergies(index)}
                  checked={checkedState[index]}
                /> 
              )   
            })}
          </AccordionDetails>
        </Accordion>
    )
}

export default AllergiesOption
