import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import Service from "../Service/Service";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://fastpro-cleaning-services.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Box py={10} style={{ background: "#f8f8f8" }}>
      <Container>
        <Typography variant="h6" align="center">
          What We Do
        </Typography>
        <Typography align="center" variant="h4">
          We Offer Best Professional <br /> Cleaning Service
        </Typography>
        <Grid container spacing={4}>
          {services.map((service) => (
            <Service key={service._id} {...service} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
