import React, { useContext } from "react";
import { SearchContext } from '../Contexts/SearchContext'
import { Link } from "react-router-dom";

import { servingRange } from "../utils/servingRange";
import { maxTimeOptions } from "../utils/maxTimeOptions";
import { allergyOptions } from "../utils/allergyOptions";
import { dietOptions } from "../utils/dietOptions";

import PreferenceOption from '../Components/PreferenceOption/PreferenceOption'
import AllergiesOption from '../Components/AllergiesOption/AllergiesOption'

function Preferences() {
  const { 
    servings, setServings, 
    time, setTime, allergies, 
    setAllergies, 
    diet, setDiet } = useContext(SearchContext)

  const handleServings = (e) => {
    setServings(e.target.value)
  }

  const handleTime = (e) => {
    setTime(e.target.value)
  }

  const handleDiet = (e) => {
    setDiet(e.target.value)
  }

  return (    
    <div className="preferences">
      <Link to="/">Save</Link>
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

      <AllergiesOption 
        allergyOptions={allergyOptions}
        allergies={allergies} 
        setAllergies={setAllergies}
      />

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
