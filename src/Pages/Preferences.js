import React, { useState } from "react";

import { servingRange } from "../utils/servingRange";
import { maxTimeOptions } from "../utils/maxTimeOptions";
import { allergyOptions } from "../utils/allergyOptions";
import { dietOptions } from "../utils/dietOptions";

import PreferenceOption from '../Components/PreferenceOption/PreferenceOption'

function Preferences() {
  const [diet, setDiet] = useState("")
  const [time, setTime] = useState("")
  // time needs to be convertered to a number it's used in API
  const [servings, setServings] = useState("")
  // servings needs to be converted to an array before using it to filter results
    // because we want to search servings between those two numbers

  const handleDiet = (e) => {
    setDiet(e.target.value)
  }

  const handleTime = (e) => {
    setTime(e.target.value)
  }

  const handleServings = (e) => {
    setServings(e.target.value)
  }

  // waiting to hear from Wendy if she wants only one panel open at a time

  // Inside the AccordianDetails I want to have inputs for wither checkboxes or radio buttons
  // can I get the info from those inputs into this component? And then into the SearchBar to update the search?

  return (
    <div>
      <PreferenceOption 
        panelExpanded='panel1' 
        title="Servings" 
        ariaControls='panel1bh-content' 
        id='panel1bh-header' 
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
        optionState={time}
        options={maxTimeOptions} 
        onChange={handleTime}
        name="time"
      />
      {/* <PreferenceOption 
        panelExpanded='panel3' 
        title="Allergies" 
        ariaControls='panel3bh-content' 
        id='panel3bh-header'
        options={allergyOptions}
      />  */}
      <PreferenceOption 
        panelExpanded='panel4' 
        title="Special Diet" 
        ariaControls='panel3bh-content' 
        id='panel4bh-header'
        optionState={diet}
        options={dietOptions}
        onChange={handleDiet}
        name="diet"
      />
    </div>
  );
}

export default Preferences;
