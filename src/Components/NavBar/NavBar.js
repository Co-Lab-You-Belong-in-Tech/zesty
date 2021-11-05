import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Drawer from "../Drawer/Drawer";
import ZestyLogo from "../../logo.png";

// import "./NavBar.css";

const useStyles = makeStyles((theme) => ({
  navBar: {
    background: "linear-gradient(180deg, #983019 3.69%, #FFCE6D 135.4%)",
  },
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
    color: "white",
  },
  logo: {
    flexGrow: "1",
    marginRight: theme.spacing(5),
  },
  logoImage: {
    width: "100px",
    marginTop: "10px",
  },
}));

function NavBar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    // I think we can delete the nav here - check with Blake
    <nav className="nav-bar">
      <AppBar position="static" className={classes.navBar}>
        <CssBaseline />
        <Toolbar>
          {isMobile ? (
            <Drawer />
          ) : (
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/preferences" className={classes.link}>
                Preferences
              </Link>
              <Link to="/my-meal-list" className={classes.link}>
                My Meal List
              </Link>
              <Link to="/shopping-list" className={classes.link}>
                Shopping List
              </Link>
              <Link to="/help" className={classes.link}>
                Help
              </Link>
            </div>
          )}
          <Typography variant="h4" className={classes.logo}>
            <img className={classes.logoImage} src={ZestyLogo} alt="logo" />
          </Typography>
        </Toolbar>
      </AppBar>
    </nav>
  );
}

export default NavBar;
