import { Avatar, Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  client: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(6),
    "& > *": {
      margin: theme.spacing(1),
    },
    "& h6": {
      color: "#15287D",
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  box: {
    border: "8px solid #f2f8ff",
    transition: "all .3s linear",
    "&:hover": {
      borderColor: "#007cfb",
    },
  },
}));
const Review = ({ name, image, description, designation }) => {
  const classes = useStyles();
  return (
    <Grid item md={4}>
      <Box p={5} className={classes.box}>
        <FaQuoteLeft style={{ fontSize: "50px", color: "#007cfb" }} />
        <Typography
          style={{ lineHeight: "2", marginTop: "16px" }}
          color="textSecondary"
        >
          {description}
        </Typography>
        <Box className={classes.client}>
          <Avatar alt="Remy Sharp" src={image} className={classes.large} />
          <Box>
            <Typography variant="h6">{name}</Typography>
            <Typography color="textSecondary">{designation}</Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Review;
