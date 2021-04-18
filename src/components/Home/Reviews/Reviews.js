import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import Review from "../Review/Review";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://fastpro-cleaning-services.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Box py={10}>
      <Container>
        <Typography variant="h6" align="center">
          Clients Feedback
        </Typography>
        <Typography align="center" variant="h4">
          What Our Clients Say <br /> About Service
        </Typography>
        <Grid container spacing={4}>
          {reviews.map((review) => (
            <Review key={review._id} {...review} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Reviews;
