import React, { useContext } from "react";
import { SearchContext } from '../Contexts/SearchContext';
import { Link } from "react-router-dom";

import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material';

import { servingRange } from "../utils/servingRange";
import { maxTimeOptions } from "../utils/maxTimeOptions";
import { allergyOptions } from "../utils/allergyOptions";
import { dietOptions } from "../utils/dietOptions";

import PreferenceOption from '../Components/PreferenceOption/PreferenceOption';
import AllergiesOption from '../Components/AllergiesOption/AllergiesOption';

function Preferences() {
  const { 
    servings, setServings, 
    time, setTime, 
    setAllergies, 
    diet, setDiet } = useContext(SearchContext);

  const handleServings = (e) => {
    setServings(e.target.value);
  };

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  const handleDiet = (e) => {
    setDiet(e.target.value);
  };

  const accordionTheme = createTheme({
    breakpoints: {
        values: {
            desktop: 600,
        }
    }
  });

  const useStyles = makeStyles(() => ({
    root: {
      margin: 'auto',
      [accordionTheme.breakpoints.up("desktop")]: {
          width: 600,
          margin: 'auto'
      }
    },
    accordion: {
      marginBottom: 0 
    },
    allergyList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, auto)',
      margin: 0,
      [accordionTheme.breakpoints.up("desktop")]: {
          gridTemplateColumns: 'repeat(4, auto)'
      }
    },
    allergy: {
        margin: 0,
        marginRight: 5,
        marginBottom: 5,
        padding: 5,
        backgroundColor: '#F3F3F3',
        borderRadius: 10,
        textAlign: 'center'
    }
  }));


  const classes = useStyles();

  return (    
    <>
      <Link to="/">Save</Link>
      <div className={classes.root}>
        <PreferenceOption 
          panelExpanded='panel1' 
          title="Servings" 
          ariaControls='panel1bh-content' 
          id='panel1bh-header' 
          optionState={servings}
          options={servingRange}
          onChange={handleServings}
          name="servings"
          accordionClass={classes.accordion}
        />
        <PreferenceOption 
          panelExpanded='panel2' 
          title="Ready in Minutes" 
          ariaControls='panel2bh-content' 
          id='panel2bh-header'
          optionState={time}
          options={maxTimeOptions} 
          onChange={handleTime}
          name="time"
          accordionClass={classes.accordion}
        />
        <AllergiesOption 
          allergyOptions={allergyOptions}
          setAllergies={setAllergies}
          accordionClass={classes.accordion}
          allergyListClass={classes.allergyList}
          allergyClass={classes.allergy}
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
          accordionClass={classes.accordion}
        />
      </div>
    </>
  );
}

export default Preferences;
