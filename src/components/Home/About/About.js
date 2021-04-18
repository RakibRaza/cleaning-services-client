import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import image from "../../../images/about-1.png";
import icon1 from "../../../images/icon-1.png";
import icon2 from "../../../images/icon-2.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  info: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(4),
    },
    "& img": {
      display: "block",
      width: "64px",
    },
  },
  imgContainer: {
    "& img": {
      display: "block",
      width: "100%",
    },
  },
}));
const About = () => {
  const classes = useStyles();
  return (
    <Box py={10}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Box className={classes.imgContainer}>
            <img src={image} alt="about us" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">About Company</Typography>
          <Typography
            variant="h4"
            style={{
              margin: "24px 0",
            }}
          >
            Professional Cleaning <br /> Service Agency
          </Typography>
          <Typography style={{ color: "#747ca2" }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem{" "}
            <br />
            accusantium doloremque laudantium totam
          </Typography>
          <Box className={classes.info}>
            <Box>
              <img src={icon1} alt="icon" />
              <Typography variant="h6" style={{ color: "#15287d" }}>
                Quality Company
              </Typography>
              <Typography color="textSecondary">
                Perspiciatis unde omnis iste natus error volup
              </Typography>
            </Box>
            <Box>
              <img src={icon2} alt="icon" />
              <Typography variant="h6" style={{ color: "#15287d" }}>
                Expert Members
              </Typography>
              <Typography color="textSecondary">
                Perspiciatis unde omnis iste natus error volup
              </Typography>
            </Box>
          </Box>
          <Button
            endIcon={<ArrowForwardIcon />}
            variant="contained"
            color="secondary"
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
