import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Sidebar from "../../Sidebar/Sidebar";
import BookingForm from "./BookingForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51IeCmuDRBBDh9LMwUd3U4sM5whgWF9kpX9oCLXkgsAsh0CwND3y3unXpIcxwa6qIrnwgcpscPpfUMKUGid8j7fFe00Cj9cTOna"
);

const Booking = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`https://fastpro-cleaning-services.herokuapp.com/service/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data[0]));
  }, [id]);

  return (
    <Sidebar topic="Book">
      <Grid container>
        <Grid item xs={12} md={6}>
          <Elements stripe={stripePromise}>
            <BookingForm service={service} />
          </Elements>
        </Grid>
      </Grid>
    </Sidebar>
  );
};

export default Booking;
