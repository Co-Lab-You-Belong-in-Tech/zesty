import React, { useState } from "react";
import {
  Drawer,
  Typography,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListAltOutlined from "@mui/icons-material/ListAltOutlined";
import FilterListOutlined from "@mui/icons-material/FilterListOutlined";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import Info from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
// import ".../App.css";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "blue",
    fontSize: "20px",
  },
  icon: {
    color: "blue",
  },
}));

function DrawerComponent() {
  // eslint-disable-next-line
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/">
                <Box display="flex" alignItems="center">
                  <HomeOutlinedIcon /> <Typography>Home</Typography>
                </Box>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/preferences">
                <Box display="flex" alignItems="center">
                  <FilterListOutlined /> <Typography>Preferences</Typography>
                </Box>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/my-meal-list">
                <Box display="flex" alignItems="center">
                  <ListAltOutlined /> <Typography>My Meal List</Typography>
                </Box>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/shopping-list">
                <Box display="flex" alignItems="center">
                  <ShoppingCartOutlined />{" "}
                  <Typography>Shopping List</Typography>
                </Box>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/help">
                <Box display="flex" alignItems="center">
                  <Info /> <Typography>Help</Typography>
                </Box>
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
