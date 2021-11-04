import React, { useContext } from "react";
import { SearchContext } from "../Contexts/SearchContext";

import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";

import { servingRange } from "../utils/servingRange";
import { maxTimeOptions } from "../utils/maxTimeOptions";
import { allergyOptions } from "../utils/allergyOptions";
import { dietOptions } from "../utils/dietOptions";

import PageTitle from "../Components/PageTitle/PageTitle";
import SaveButton from "../Components/SaveButton/SaveButton";
import PreferenceOption from "../Components/PreferenceOption/PreferenceOption";
import AllergiesOption from "../Components/AllergiesOption/AllergiesOption";

function Preferences() {
  const {
    servings,
    setServings,
    time,
    setTime,
    setAllergies,
    diet,
    setDiet,
  } = useContext(SearchContext);

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
    <main className="page-container">
      <PageTitle text="Set Your Preferences!" />
      <SaveButton text="Save" />
      <PreferenceOption
        panelExpanded="panel1"
        title="Servings"
        ariaControls="panel1bh-content"
        id="panel1bh-header"
        optionState={servings}
        options={servingRange}
        onChange={handleServings}
        name="servings"
        accordionClass={classes.accordion}
        accordionSummaryClass={classes.accordionSummary}
        accordionDetailsClass={classes.accordionDetails}
      />
      <PreferenceOption
        panelExpanded="panel2"
        title="Ready in Minutes"
        ariaControls="panel2bh-content"
        id="panel2bh-header"
        optionState={time}
        options={maxTimeOptions}
        onChange={handleTime}
        name="time"
        accordionClass={classes.accordion}
        accordionDetailsClass={classes.accordionDetails}
      />
      <AllergiesOption
        allergyOptions={allergyOptions}
        setAllergies={setAllergies}
        accordionClass={classes.accordion}
        allergyListClass={classes.allergyList}
        allergyClass={classes.allergy}        
        accordionDetailsClass={classes.accordionDetails}
      />
      <PreferenceOption
        panelExpanded="panel4"
        title="Special Diet"
        ariaControls="panel3bh-content"
        id="panel4bh-header"
        optionState={diet}
        options={dietOptions}
        onChange={handleDiet}
        name="diet"
        accordionClass={classes.accordion}
        accordionDetailsClass={classes.accordionDetails}
      />
    </main>
  );
}

export default Preferences;
