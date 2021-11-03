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
    fontSize: "20px",
  },
  icon: {
    color: "#fff",
  },
  paper: {
    background: "#6a784d",
  },
}));

function DrawerComponent() {
  // eslint-disable-next-line
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        classes={{ paper: classes.paper }}
      >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className="nav-link">
                <Box display="flex" alignItems="center">
                  <HomeOutlinedIcon className="nav-icon" />
                  <Typography>Home</Typography>
                </Box>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/preferences" className="nav-link">
                <Box display="flex" alignItems="center">
                  <FilterListOutlined className="nav-icon" />
                  <Typography>Preferences</Typography>
                </Box>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/my-meal-list" className="nav-link">
                <Box display="flex" alignItems="center">
                  <ListAltOutlined className="nav-icon" />
                  <Typography>My Meal List</Typography>
                </Box>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/shopping-list" className="nav-link">
                <Box display="flex" alignItems="center">
                  <ShoppingCartOutlined className="nav-icon" />
                  <Typography>Shopping List</Typography>
                </Box>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/help" className="nav-link">
                <Box display="flex" alignItems="center">
                  <Info className="nav-icon" /> <Typography>Help</Typography>
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
