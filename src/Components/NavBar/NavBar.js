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
import DrawerComponent from "../Drawer/Drawer";
// import ZestyLogo from '../../logo.png'
import "./NavBar.css";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function NavBar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    // I think we can delete the nav here - check with Blake
    <nav className="nav-bar">
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/meal-list" className={classes.link}>
                Meal List
              </Link>
              <Link to="/grocery-list" className={classes.link}>
                Shopping List
              </Link>
              <Link to="/preferences" className={classes.link}>
                Preferences
              </Link>              
            </div>
          )}
          <Typography variant="h4" className={classes.logo}>
            {/* <img className="logo" src={ZestyLogo} alt="" /> */}
            Zesty
          </Typography>
        </Toolbar>
      </AppBar>
    </nav>
  );
}

export default NavBar;
