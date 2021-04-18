import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import banner from "../../../images/contact-bg.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const useStyles = makeStyles((theme) => ({
  root: {
    background: `#15287D url('${banner}') no-repeat right`,
    padding: theme.spacing(10, 0),
    textAlign: "center",
  },
}));
const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="h6" style={{ color: "#fff" }}>
          Conatct Us
        </Typography>
        <Typography
          style={{
            color: "#fff",
          }}
          variant="h4"
        >
          Needs Any Servicing <br /> To Contact Us
        </Typography>
        <TextField
          margin="normal"
          variant="outlined"
          fullWidth
          placeholder="Name"
        />
        <TextField
          margin="normal"
          variant="outlined"
          fullWidth
          placeholder="Email"
        />
        <TextField
          margin="normal"
          variant="outlined"
          fullWidth
          placeholder="Service Title"
        />
        <TextField
          margin="normal"
          variant="outlined"
          fullWidth
          placeholder="Write Message"
          multiline
          rows={8}
        />
        <Button
          endIcon={<ArrowForwardIcon />}
          variant="contained"
          color="secondary"
        >
          Book a Service
        </Button>
      </Container>
    </div>
  );
};

export default Contact;
