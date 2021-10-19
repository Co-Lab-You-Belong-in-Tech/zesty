import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// lets try putting this in Preferences page

function PreferenceOption({ panelExpanded, title }) {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === panelExpanded} onChange={handleChange(panelExpanded)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    {title}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>2 servings</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    radio buttons will go here
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default PreferenceOption
