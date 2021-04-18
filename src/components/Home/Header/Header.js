import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import NavBar from "../../NavBar/NavBar";
import image from "../../../images/header-img.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#15287D",
    minHeight: "100vh",
  },
  container: {
    minHeight: "calc(100vh - 68px)",
    alignItems: "center",
  },
  image: {
    display: "block",
    width: "100%",
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <NavBar />
        <Grid container className={classes.container}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" gutterBottom>
              Amazing <br />
              Quality Cleaning
              <br /> Service Agency
            </Typography>
            <Box>
              <Typography style={{ color: "#fff" }}>
                But I must explain to you how all this mistaken idea of
                denouncing <br />
                pleasure and praising pain born and complete
              </Typography>
            </Box>
            <Button
              endIcon={<ArrowForwardIcon />}
              variant="contained"
              color="secondary"
            >
              Get Started
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <img className={classes.image} src={image} alt="Cleaning" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Header;
