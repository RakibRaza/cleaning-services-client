import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useHistory, useLocation } from "react-router";
import logo from "../images/logo-2.png";
import { GrGoogle } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  continue: {
    display: "flex",
    color: "#fff",
    justifyContent: "space-between",
    padding: theme.spacing(1),
    borderRadius: theme.spacing(0.6),
    alignItems: "center",
    cursor: "pointer",
    background: "#15287D",
    "& svg": {
      fontSize: theme.spacing(4),
      color: "#fff",
    },
    "& p": {
      fontWeight: "bold",
    },
  },
}));
const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { googleSignIn } = useAuthContext();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      history.replace(from);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Container maxWidth="sm">
      <NavLink to="/">
        <img
          style={{ display: "block", margin: "80px auto" }}
          src={logo}
          alt="logo"
        />
      </NavLink>

      <Typography
        align="center"
        variant="h5"
        style={{ fontWeight: "bold", marginBottom: "32px" }}
      >
        Login With
      </Typography>
      <Box onClick={handleGoogleSignIn} className={classes.continue}>
        <GrGoogle />
        <Typography>Continue with Google</Typography>
      </Box>
    </Container>
  );
};

export default Login;
