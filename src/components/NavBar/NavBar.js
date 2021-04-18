import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { useAuthContext } from "../../context/AuthContext";
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "250px",
  },
  appBar: {
    background: "none",
    boxShadow: "none",
  },
  links: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const { logOut, currentUserInfo } = useAuthContext();
  const [open, setOpen] = useState(false);
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <AppBar className={classes.appBar} position="static" color="secondary">
      <Toolbar>
        <Box style={{ flexGrow: 1 }}>
          <img
            style={{ display: "block", width: "200px" }}
            src={logo}
            alt="logo"
          />
        </Box>
        <Hidden smDown>
          <Box className={classes.links}>
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button color="inherit">about</Button>
            <Button color="inherit">contact</Button>
            {currentUserInfo && (
              <Button component={Link} to="/dashboard" color="inherit">
                Dashboard
              </Button>
            )}
            {currentUserInfo ? (
              <Button
                onClick={handleLogOut}
                color="primary"
                variant="contained"
              >
                Logout
              </Button>
            ) : (
              <Button
                component={Link}
                to="/login"
                color="primary"
                variant="contained"
              >
                Login
              </Button>
            )}
          </Box>
          <Avatar alt="Remy Sharp" src={currentUserInfo?.photoURL} />
        </Hidden>
        <Hidden mdUp>
          <Box>
            <IconButton onClick={() => setOpen(true)} color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
          <Drawer open={open} onClose={() => setOpen(false)}>
            <List disablePadding className={classes.drawer}>
              <ListItem button component={Link} to="/">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="About" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Contact" />
              </ListItem>
              {currentUserInfo && (
                <ListItem button component={Link} to="/dashboard">
                  <ListItemText primary="Dashboard" />
                </ListItem>
              )}
            </List>
            {currentUserInfo ? (
              <Button
                onClick={handleLogOut}
                color="primary"
                variant="contained"
              >
                Logout
              </Button>
            ) : (
              <Button
                component={Link}
                to="/login"
                color="primary"
                variant="contained"
              >
                Login
              </Button>
            )}
            <Button>{currentUserInfo?.displayName}</Button>
          </Drawer>
        </Hidden>
      </Toolbar>

      <ScrollToTop showBelow={250} />
    </AppBar>
  );
};

export default NavBar;
