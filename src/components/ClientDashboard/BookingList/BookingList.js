import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import Sidebar from "../../Sidebar/Sidebar";
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
  pending: {
    color: "#FF4545",
    background: "#FFE3E3",
    padding: theme.spacing(1, 3),
    borderRadius: theme.spacing(1),
    border: "2px solid #FF4545",
    "&:hover": {
      background: "#FFE3E3",
    },
  },
  done: {
    color: "#009444",
    background: "#C6FFE0",
    padding: theme.spacing(1, 3),
    borderRadius: theme.spacing(1),
    border: "2px solid #009444",
    "&:hover": {
      background: "#C6FFE0",
    },
  },
  on: {
    color: "#FFBD3E",
    background: "rgba(255, 189, 62,.3)",
    padding: theme.spacing(1, 3),
    borderRadius: theme.spacing(1),
    border: "2px solid #FFBD3E",
    "&:hover": {
      background: "rgba(255, 189, 62,.3)",
    },
  },
}));
const BookingList = () => {
  const classes = useStyles();
  const { currentUserInfo } = useAuthContext();
  const [booking, setBooking] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://fastpro-cleaning-services.herokuapp.com/clientOrders?email=${currentUserInfo.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
        setIsLoading(false);
      });
  }, [currentUserInfo.email]);
  if (isLoading) {
    return (
      <Sidebar topic="Booking List">
        <Box align="center">
          <Typography variant="h4">Loading.....</Typography>
        </Box>
      </Sidebar>
    );
  }
  return (
    <Sidebar topic="Booking List">
      {booking.length < 1 ? (
        <Box align="center">
          <Typography variant="h4">Your have no booking yet.</Typography>
        </Box>
      ) : (
        <Grid container spacing={4}>
          {booking.map((book) => {
            const { _id, title, image, description, status } = book;
            return (
              <Grid key={_id} item md={4}>
                <Box className={classes.box}>
                  <Box className={classes.imgContainer}>
                    <img src={image} alt={title} />
                  </Box>
                  <Box p={5}>
                    <Typography
                      style={{
                        color: "#15287d",
                        fontWeight: "bold",
                      }}
                      gutterBottom
                      variant="h5"
                      align="center"
                    >
                      {title}
                    </Typography>
                    <Typography align="center">{description}</Typography>
                    <Box align="center" mt={2}>
                      <Button
                        className={
                          status === "Done"
                            ? classes.done
                            : status === "Pending"
                            ? classes.pending
                            : classes.on
                        }
                      >
                        {status}
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Sidebar>
  );
};

export default BookingList;
