import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { servingRange } from "../utils/servingRange";
import { maxTimeOptions } from "../utils/maxTimeOptions";
import { allergyOptions } from "../utils/allergyOptions";
import { dietOptions } from "../utils/dietOptions";

const accordianObject = {
  panel1: {
    expanded: 'panel1',
    title: 'Serving Size',
  },
  panel2: {
    expanded: 'panel2',
    title: 'Total Time',
  },
  panel3: {
    expanded: 'panel3',
    title: 'Allergies',
  },
  panel4: {
    expanded: 'panel4',
    title: 'Special Diet',
  }
}

function Preferences() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === accordianObject.panel1.expanded} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {accordianObject.panel1.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>2 servings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            radio buttons will go here
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === accordianObject.panel2.expanded} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {accordianObject.panel2.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            30 minutes
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            radio buttons will go here
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === accordianObject.panel3.expanded} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {accordianObject.panel3.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            dairy, eggs
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            checkboxes will go here
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === accordianObject.panel4.expanded} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {accordianObject.panel4.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Vegan
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            radio buttons will go here
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Preferences;
