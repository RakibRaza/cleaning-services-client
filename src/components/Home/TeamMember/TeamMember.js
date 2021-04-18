import {
  Box,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const useStyles = makeStyles((theme) => ({
  imgContainer: {
    overflow: "hidden",
    "& img": {
      display: "block",
      width: "100%",
      transition: "all 1s linear",
      "&:hover": {
        transform: "scale(1.3)",
      },
    },
  },
  iconBtn: {
    textAlign: "center",
    marginBottom: theme.spacing(3),
    "& > *": {
      backgroundColor: "#e7e9f2",
      color: "#15287d",
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(3),
      transition: "all .3s linear",
      "&:hover": {
        color: "#fff",
        backgroundImage: "linear-gradient(0deg, #f95fb2 0%, #fc796c 100%)",
      },
    },
  },
}));
const TeamMember = ({ name, job, image }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box className={classes.imgContainer}>
        <img src={image} alt={name} />
      </Box>
      <Box p={3} style={{ background: "#fff" }}>
        <Typography variant="h5" align="center">
          {name}
        </Typography>
        <Typography align="center" variant="h6">
          {job}
        </Typography>
        <Box className={classes.iconBtn}>
          <IconButton>
            {" "}
            <FaFacebookF />
          </IconButton>
          <IconButton>
            {" "}
            <FaTwitter />
          </IconButton>
          <IconButton>
            {" "}
            <FaInstagram />
          </IconButton>
        </Box>
      </Box>
    </Grid>
  );
};

export default TeamMember;
