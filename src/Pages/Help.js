import React from "react";
import PageTitle from "../Components/PageTitle/PageTitle";
import "../App.css";
import RadsImg from "../Rads-01.png";
import CheckIcon from "@mui/icons-material/Check";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@material-ui/core";

import "../App.css";

function Help() {
  return (
    <div className="help">
      <PageTitle
        text="Your Meal Planning Assistant Made EASY!"
        className="help-title"
      />
      <hr />
      <List>
        <ListItem>
          <ListItemText>
            <Box display="flex" alignItems="center">
              <CheckIcon className="helpScreen-icon" />{" "}
              <Typography>
                Set your meal PREFERENCES based on serving size, allergies, and
                more!
              </Typography>
            </Box>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Box display="flex" alignItems="center">
              <CheckIcon className="helpScreen-icon" />{" "}
              <Typography>Easily SEARCH for your favorite meals!</Typography>
            </Box>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Box display="flex" alignItems="center">
              <CheckIcon className="helpScreen-icon" />{" "}
              <Typography>
                SAVE your meals and a shopping list is automatically created for
                you!
              </Typography>
            </Box>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Box display="flex" alignItems="center">
              <CheckIcon className="helpScreen-icon" />{" "}
              <Typography>
                Don't lose what you saved! EMAIL multiple meals to yourself
                before you close the app.
              </Typography>
            </Box>
          </ListItemText>
        </ListItem>
      </List>

      <img src={RadsImg} alt="radishes" className="rads-img" />
    </div>
  );
}

export default Help;
