import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import axios from "axios";
import { useAuthContext } from "../../../context/AuthContext";
import { Alert } from "@material-ui/lab";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  payInput: {
    display: "block",
    margin: "10px 0 20px 0",
    maxWidth: "500px",
    padding: "20px 24px",
    fontSize: "1em",
    boxShadow:
      "rgba(50, 50, 93, 0.14902) 0px 1px 3px,rgba(0, 0, 0, 0.0196078) 0px 1px 0px",
    border: "0",
    outline: "0",
    borderRadius: "4px",
    background: "white",
  },
}));
const BookingForm = ({ service }) => {
  const classes = useStyles();
  const { currentUserInfo } = useAuthContext();
  const [paymentError, setPaymentError] = useState("");
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const inputValue = service?.title || "Loading...";
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
    } else {
      try {
        const res = await axios.post(
          "https://fastpro-cleaning-services.herokuapp.com/placeOrder",
          {
            title: service.title,
            price: service.price,
            image: service.image,
            description: service.description,
            email: currentUserInfo.email,
            name: currentUserInfo.displayName,
            status: "Pending",
            paymentId: paymentMethod.id,
          }
        );
        if (res.data) {
          history.push("/booking-list");
        }
      } catch (error) {
        console.error(error.message);
      }
    }
  };
  const [value, setValue] = React.useState("Creadit Card");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setPaymentError("");
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [paymentError]);
  return (
    <form onSubmit={handleSubmit}>
      {paymentError && (
        <Alert variant="filled" severity="error">
          {paymentError}
        </Alert>
      )}
      <TextField
        margin="normal"
        variant="outlined"
        fullWidth
        value={currentUserInfo?.displayName}
      />
      <TextField
        margin="normal"
        variant="outlined"
        fullWidth
        value={currentUserInfo?.email}
      />
      <TextField
        margin="normal"
        variant="outlined"
        fullWidth
        value={inputValue}
      />
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">Pay With</FormLabel>
        <RadioGroup row name="payment" value={value} onChange={handleChange}>
          <FormControlLabel
            value="Creadit Card"
            control={<Radio />}
            label="Creadit Card"
          />
          <FormControlLabel value="Paypal" control={<Radio />} label="Paypal" />
        </RadioGroup>
      </FormControl>
      <CardElement className={classes.payInput} />
      <Typography>
        Your Service charged will be <strong> ${service.price}</strong>
      </Typography>
      <Box align="right">
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </Button>
      </Box>
    </form>
  );
};

export default BookingForm;
