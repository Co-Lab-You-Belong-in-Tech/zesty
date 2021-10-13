import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function MealTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                    Meal Info
                </TabPanel>
                <TabPanel value="2">
                    Ingredients
                </TabPanel>
                <TabPanel value="3">
                    Directions
                </TabPanel>
            </TabContext>
    </Box>
    );
};

export default MealTabs;
