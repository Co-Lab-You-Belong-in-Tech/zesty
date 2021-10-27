import React from "react";
import "../App.css";
import RadsImg from "../Rads-01.png";
import CheckIcon from "@mui/icons-material/Check";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";

import "../App.css";

const useStyles = makeStyles(() => ({
  icon: {
    color: "blue",
  },
}));

function Help() {
  return (
    <div className="help">
      <br />
      <List>
        <ListItem>
          <ListItemText>
            <Box display="flex" alignItems="center">
              <CheckIcon />{" "}
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
              <CheckIcon />{" "}
              <Typography>Easily SEARCH for your favorite meals!</Typography>
            </Box>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Box display="flex" alignItems="center">
              <CheckIcon />{" "}
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
              <CheckIcon />{" "}
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
