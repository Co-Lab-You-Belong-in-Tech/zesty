import React, { useState } from "react";

import { servingRange } from "../utils/servingRange";
import { maxTimeOptions } from "../utils/maxTimeOptions";
import { allergyOptions } from "../utils/allergyOptions";
import { dietOptions } from "../utils/dietOptions";

import PreferenceOption from '../Components/PreferenceOption/PreferenceOption'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckboxOption from '../Components/CheckboxOption/CheckboxOption'

function Preferences() {
  const [servings, setServings] = useState("")
  // servings needs to be converted to an array before using it to filter results
    // because we want to search servings between those two numbers
  const [time, setTime] = useState("")
  // time needs to be convertered to a number it's used in API -> const timeNum = Number(time)
  const [expanded, setExpanded] = useState(false);
  const [allergies, setAllergies] = useState("")
  const [checkedState, setCheckedState] = useState(
    new Array(allergyOptions.length).fill(false)
  );
  const [diet, setDiet] = useState("")

  const handleServings = (e) => {
    setServings(e.target.value)
  }

  const handleTime = (e) => {
    setTime(e.target.value)
  }

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

  const handleDiet = (e) => {
    setDiet(e.target.value)
  }


  // Inside the AccordianDetails I want to have inputs for wither checkboxes or radio buttons
  // can I get the info from those inputs into this component? And then into the SearchBar to update the search?

  return (

    // to do:
      // add in save button that brings user back to Home page
    
    <div>
      <PreferenceOption 
        panelExpanded='panel1' 
        title="Servings" 
        ariaControls='panel1bh-content' 
        id='panel1bh-header' 
        type="radio"
        optionState={servings}
        options={servingRange}
        onChange={handleServings}
        name="servings"
      />
      <PreferenceOption 
        panelExpanded='panel2' 
        title="Max Time Ready in Minutes" 
        ariaControls='panel2bh-content' 
        id='panel2bh-header'
        type="radio"
        optionState={time}
        options={maxTimeOptions} 
        onChange={handleTime}
        name="time"
      />

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

      <PreferenceOption 
        panelExpanded='panel4' 
        title="Special Diet" 
        ariaControls='panel3bh-content' 
        id='panel4bh-header'
        type="radio"
        optionState={diet}
        options={dietOptions}
        onChange={handleDiet}
        name="diet"
      />
    </div>
  );
}

export default Preferences;
