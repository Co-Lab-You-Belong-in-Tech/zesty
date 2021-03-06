import React, { useState } from 'react'

import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckboxOption from '../CheckboxOption/CheckboxOption';

function AllergiesOption({ allergyOptions, setAllergies }) {
  const [expanded, setExpanded] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(allergyOptions.length).fill(false)
  );
  const [ allergyArray, setAllergyArray ] = useState([]);

  const handleAllergies = (position) => {
    const updatedCheckedState = checkedState.map((item, index) => 
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    const chosenAllergies = [];
    for(let i = 0; i < updatedCheckedState.length; i++) {
      if(updatedCheckedState[i]) {
        chosenAllergies.push(allergyOptions[i].id);
      };
    };
    const allergyQuery = chosenAllergies.join()
    setAllergies(allergyQuery);
    setAllergyArray(chosenAllergies);
    };
    
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionTheme = createTheme({
    breakpoints: {
      values: {
        desktop: 600,
      },
    },
  });

  const useStyles = makeStyles(() => ({
    accordion: {
      marginBottom: 0,
      background: 'white'
    },
    accordionDetails: {
      backgroundColor: 'white'
    },
    allergyList: {
      display: "grid",
      gridTemplateColumns: "repeat(3, auto)",
      margin: 0,
      [accordionTheme.breakpoints.up("desktop")]: {
        gridTemplateColumns: "repeat(4, auto)",
      },
    },
    allergy: {
      margin: 0,
      marginRight: 5,
      marginBottom: 5,
      padding: 5,
      backgroundColor: "#F3F3F3",
      borderRadius: 5,
      textAlign: "center",
    },
  }));

  const classes = useStyles();


  return (
    <Accordion 
      expanded={expanded === 'panel3'} 
      onChange={handleChange('panel3')}
      className={classes.accordion}
      TransitionProps={{ unmountOnExit: true }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel3bh-content'
        id='panel3bh-header'
        sx={{ bgcolor: 'white' }}
      >
        <Typography sx={{ flexShrink: 0, fontFamily: 'Montserrat', fontWeight: 500, textAlign: 'left', fontSize: '1.125rem' }}>
          Allergies
        </Typography>
        <Typography sx={{ marginLeft: 5, color: 'text.secondary', fontFamily: 'Montserrat', textAlign: 'left', fontSize: '1rem' }}>
          <div className={classes.allergyList}>
            {allergyArray.map((allergy) => {
              return (
                <p className={classes.allergy} key={allergy}>{allergy}</p>
              )
            })}
          </div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
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
  );
};

export default AllergiesOption;
