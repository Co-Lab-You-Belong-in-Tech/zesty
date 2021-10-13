import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './MealTabs.css'

function MealTabs({ summary, ingredients, directions }) {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getIngredients = ingredients.map((ingredient, index) => {
        return (
            <li key={index}>{ingredient}</li>
        )
      })

      const getDirections = directions.map((direction, index) => {
        return (
            <li key={index}>{direction}</li>
        )
    })

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Meal Info" value="1" />
                    <Tab label="Ingredients" value="2" />
                    <Tab label="Directions" value="3" />
                </TabList>
                </Box>
                <TabPanel value="1">
                    <div className="meal-info">{summary}</div>
                </TabPanel>
                <TabPanel value="2">
                    <ul className="ingredients">
                        {getIngredients}
                    </ul>
                </TabPanel>
                <TabPanel value="3">
                    <ol className="directions">
                        {getDirections}
                    </ol>
                </TabPanel>
            </TabContext>
        </Box>
    );
};

export default MealTabs;
