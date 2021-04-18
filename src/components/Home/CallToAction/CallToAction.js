import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import banner from "../../../images/banner.jpg";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const useStyles = makeStyles((theme) => ({
  root: {
    background: `url('${banner}') no-repeat center/cover`,
    padding: theme.spacing(15, 0),
    textAlign: "center",
  },
}));
const CallToAction = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="h6" style={{ color: "#fff" }}>
          Make An Appointment
        </Typography>
        <Typography
          style={{
            color: "#fff",
          }}
          variant="h4"
        >
          We Have Over 25+ Years Experience <br /> In Cleaning Service
        </Typography>
        <Grid container spacing={4} justify="center">
          <Grid item>
            <Button
              endIcon={<ArrowForwardIcon />}
              variant="contained"
              color="secondary"
            >
              Contact Us
            </Button>
          </Grid>
          <Grid item>
            <Button
              endIcon={<ArrowForwardIcon />}
              variant="contained"
              color="secondary"
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CallToAction;
