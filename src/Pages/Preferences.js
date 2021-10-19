import React, { useState } from "react";

import { servingRange } from "../utils/servingRange";
import { maxTimeOptions } from "../utils/maxTimeOptions";
import { allergyOptions } from "../utils/allergyOptions";
import { dietOptions } from "../utils/dietOptions";

import PreferenceOption from '../Components/PreferenceOption/PreferenceOption'

// const accordianObject = {
//   panel1: {
//     expanded: 'panel1',
//     title: 'Serving Size',
//     ariaControls: 'panel1bh-content',
//     id: 'panel1bh-header'
//   },
//   panel2: {
//     expanded: 'panel2',
//     title: 'Total Time',
//     ariaControls: 'panel2bh-content',
//     id: 'panel2bh-header'
//   },
//   panel3: {
//     expanded: 'panel3',
//     title: 'Allergies',
//     ariaControls: 'panel3bh-content',
//     id: 'panel3bh-header'
//   },
//   panel4: {
//     expanded: 'panel4',
//     title: 'Special Diet',
//     ariaControls: 'panel4bh-content',
//     id: 'panel4bh-header'
//   }
// }

function Preferences() {
  const [diet, setDiet] = useState("")

  const handleDiet = (e) => {
    setDiet(e.target.value)
  }

  console.log(diet)
  // const [expanded, setExpanded] = React.useState(false);

  // const handleChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };
  // waiting to hear from Wendy if she wants only one panel open at a time

  // Inside the AccordianDetails I want to have inputs for wither checkboxes or radio buttons
  // can I get the info from those inputs into this component? And then into the SearchBar to update the search?

  return (
    <div>
      {/* <PreferenceOption 
        panelExpanded='panel1' 
        title="Servings" 
        ariaControls='panel1bh-content' 
        id='panel1bh-header' 
        options={servingRange}
      />
      <PreferenceOption 
        panelExpanded='panel2' 
        title="Max Time Ready" 
        ariaControls='panel2bh-content' 
        id='panel2bh-header'
        options={maxTimeOptions} 
      /> */}
      {/* <PreferenceOption 
        panelExpanded='panel3' 
        title="Allergies" 
        ariaControls='panel3bh-content' 
        id='panel3bh-header'
        options={allergyOptions}
      /> */}
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
