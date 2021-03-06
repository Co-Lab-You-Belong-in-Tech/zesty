import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './MealTabs.css';

function MealTabs({ summary, ingredients, directions }) {
    const tabTheme = createTheme({
        breakpoints: {
            values: {
                desktop: 600,
            }
        }
    });
    
    const useStyles = makeStyles(() => ({
        tabs: {
            [tabTheme.breakpoints.up("desktop")]: {
                width: 600,
                margin: 'auto'
            }
        }
    }));

    const classes = useStyles();

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const createMarkup = () => {
        return {__html: `${summary}`}
    };

    const getIngredients = ingredients.map((ingredient, index) => {
        return (
            <li className="ingredient" key={index}>{ingredient.original}</li>
        );
    });

    const getSteps = directions.map((step) => {
        return (
             <li className="step" key={step.step}>{step.step}</li>
        );
    });

    return (
        <Box className={classes.tabs}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Meal Info" value="1" />
                    <Tab label="Ingredients" value="2" />
                    <Tab label="Directions" value="3" />
                </TabList>
                </Box>
                <TabPanel value="1">
                    <div className="meal-info" dangerouslySetInnerHTML={createMarkup()} />
                </TabPanel>
                <TabPanel value="2">
                    <ul className="ingredients">
                        {getIngredients}
                    </ul>
                </TabPanel>
                <TabPanel value="3">
                    <ol className="directions">
                        {getSteps}
                    </ol>
                </TabPanel>
            </TabContext>
        </Box>
    );
};

export default MealTabs;
