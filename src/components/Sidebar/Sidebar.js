import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Hidden,
  IconButton,
  makeStyles,
  useTheme,
  AppBar,
  Typography,
  Toolbar,
  Box,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EventNoteIcon from "@material-ui/icons/EventNote";
import { NavLink } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import MessageIcon from "@material-ui/icons/Message";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useAuthContext } from "../../context/AuthContext";
import logo from "../../images/logo-2.png";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      background: "#fff",
      boxShadow: "none",
      color: "#000",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    background: "#F4F7FC",
    minHeight: "100vh",
  },
  logo: {
    display: "block",
    width: "200px",
    padding: theme.spacing(1),
  },
  activeMenu: {
    color: "red",
    borderRight: "2px solid red",
    "& svg": {
      color: "red",
    },
  },
}));

function Sidebar({ topic, children }) {
  const classes = useStyles();
  const { currentUserInfo, defaultId } = useAuthContext();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const clientMenu = [
    {
      name: "Book",
      link: `/booking/${defaultId}`,
      icon: <AddShoppingCartIcon />,
    },
    { name: "Booking List", link: "/booking-list", icon: <EventNoteIcon /> },
    { name: "Review", link: "/add-review", icon: <MessageIcon /> },
  ];
  const adminMenu = [
    { name: "Order List", link: "/order-list", icon: <EventNoteIcon /> },
    { name: "Add Service", link: "/add-service", icon: <AddIcon /> },
    { name: "Make Admin", link: "/make-admin", icon: <GroupAddIcon /> },
    {
      name: "Manage Services",
      link: "/manage-services",
      icon: <DashboardIcon />,
    },
  ];
  const drawer = (
    <div>
      <Box style={{ height: "64px" }}>
        <NavLink to="/">
          <img src={logo} alt="logo" className={classes.logo} />
        </NavLink>
      </Box>
      <List>
        <ListItem
          className={topic === "Dashboard" ? classes.activeMenu : ""}
          button
          component={NavLink}
          to="/dashboard"
        >
          <ListItemIcon>
            {" "}
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        {currentUserInfo?.isAdmin ? (
          <>
            {adminMenu.map((menu) => {
              const { name, link, icon } = menu;
              return (
                <ListItem
                  className={topic === name ? classes.activeMenu : ""}
                  button
                  key={name}
                  component={NavLink}
                  to={link}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={name} />
                </ListItem>
              );
            })}
          </>
        ) : (
          <>
            {clientMenu.map((menu) => {
              const { name, link, icon } = menu;
              return (
                <ListItem
                  className={topic === name ? classes.activeMenu : ""}
                  button
                  key={name}
                  component={NavLink}
                  to={link}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={name} />
                </ListItem>
              );
            })}
          </>
        )}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {topic}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

export default Sidebar;
