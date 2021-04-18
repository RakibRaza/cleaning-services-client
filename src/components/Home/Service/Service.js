import {
  Box,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useHistory } from "react-router";
import { useAuthContext } from "../../../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  box: {
    boxShadow: theme.shadows[4],
    cursor: "pointer",
    borderBottom: "8px solid #007CFB",
    transition: "all .3s linear",
    "&:hover": {
      borderBottom: "8px solid #fef22e",
    },
  },
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
  icon: {
    background: "#007cfb",
    transition: "all .5s linear",
    "&:hover": {
      background: "#fef22e",
      transform: "translate(15px)",
    },
  },
  subtitle: {
    color: "#747ca2",
    lineHeight: "1.8",
    padding: "0 8px",
  },
}));
const Service = ({ _id, image, title, description, price }) => {
  const { setDefaultId, currentUserInfo } = useAuthContext();
  const classes = useStyles();
  const history = useHistory();
  const handleClick = (id) => {
    if (!currentUserInfo?.isAdmin) {
      setDefaultId(id);
      history.push(`/booking/${id}`);
    }
  };
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box onClick={() => handleClick(_id)} className={classes.box}>
        <Box className={classes.imgContainer}>
          <img src={image} alt={title} />
        </Box>
        <Box p={5}>
          <Typography gutterBottom variant="h5" align="center">
            {title}
          </Typography>
          <Typography
            style={{ color: "#FA679D" }}
            align="center"
            variant="h6"
            gutterBottom
          >
            ${price}
          </Typography>
          <Typography className={classes.subtitle} align="center">
            {description}
          </Typography>
          <Box align="center" mt={2}>
            <IconButton className={classes.icon}>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Service;
