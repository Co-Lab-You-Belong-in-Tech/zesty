import React, { useState } from 'react';

import { makeStyles } from "@mui/styles";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RadioOption from '../RadioOption/RadioOption';

function PreferenceOption({ panelExpanded, title, ariaControls, id, options, onChange, optionState, name }) {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    
      const useStyles = makeStyles(() => ({
        accordion: {
          marginBottom: 0,
        },
        accordionDetails: {
          backgroundColor: 'white'
        }
      }));
    
      const classes = useStyles();

    return (
        <Accordion
            TransitionProps={{ unmountOnExit: true }}
            expanded={expanded === panelExpanded} 
            onChange={handleChange(panelExpanded)}
            className={classes.accordion}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={ariaControls}
                id={id}
                sx={{ bgcolor: 'white' }}
            >
                <Typography sx={{ fontFamily: 'Montserrat', fontWeight: 500, textAlign: 'left', fontSize: '1.125rem', color: 'text.secondary' }}>
                    {title}
                </Typography>
                <Typography sx={{ marginLeft: 5, color: 'text.secondary', fontFamily: 'Montserrat', fontSize: '1rem' }}>
                    {optionState}
                </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
                {options.map((option) => {
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
    );
};

export default PreferenceOption;
