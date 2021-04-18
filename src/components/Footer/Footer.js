import {
  Box,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import logo from "../../images/logo-2.png";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import DraftsOutlinedIcon from "@material-ui/icons/DraftsOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  footer: {
    background: `#f8f8f8`,
    padding: theme.spacing(12, 0, 2),
  },
  iconBtn: {
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
  service: {
    "& a": {
      color: "#747ca2",
      display: "block",
      textDecoration: "none",
      lineHeight: "2",
      transition: "all .3s linear",
      "&:hover": {
        color: "#fc796c",
        transform: "translate(12px)",
      },
    },
  },
  contact: {
    display: "flex",
    alignItems: "center",

    "& > *": {
      margin: theme.spacing(1),
    },
    "& h6": {
      color: "#15287D",
    },
    "& .MuiButtonBase-root": {
      backgroundImage: "linear-gradient(0deg, #f95fb2 0%, #fc796c 100%)",
      color: "#fff",
    },
    "& p": {
      color: "#7183d4",
    },
  },
}));
function Copyright() {
  return (
    <Typography variant="subtitle1">
      {"Copyright © "}
      {new Date().getFullYear()} FastPro. All Rights Reserved By Rakib Raza
    </Typography>
  );
}
const services = [
  "House Cleaning",
  "Kitchen Cleaning",
  "Office Cleaning",
  "Bedroom Cleaning",
  "Plumbing Service",
  "Residential Service",
];
const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <img
              style={{ display: "block", width: "240px" }}
              src={logo}
              alt="logo"
            />
            <Typography
              color="textSecondary"
              style={{ marginTop: "16px", lineHeight: "2" }}
            >
              Sed ut perspiciatis unde omnis error sit <br /> voluptatem
              accusantium remque <br /> laudantium
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
              <IconButton>
                {" "}
                <FaYoutube />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", color: "#15287d" }}
            >
              Services
            </Typography>
            <Box mt={2} className={classes.service}>
              {services.map((service) => (
                <Typography key={service} component={Link} to="/">
                  {service}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", color: "#15287d" }}
            >
              Contact
            </Typography>
            <Box mt={0.5} className={classes.contact}>
              <IconButton>
                <RoomOutlinedIcon />
              </IconButton>
              <Box>
                <Typography variant="h6">Address</Typography>
                <Typography color="textSecondary">
                  55 Main Street, New York
                </Typography>
              </Box>
            </Box>
            <Box className={classes.contact}>
              <IconButton>
                <DraftsOutlinedIcon />
              </IconButton>
              <Box>
                <Typography variant="h6">Email Address</Typography>
                <Typography color="textSecondary">
                  supportinfo@gmail.com
                </Typography>
              </Box>
            </Box>
            <Box className={classes.contact}>
              <IconButton>
                <PhoneInTalkOutlinedIcon />
              </IconButton>
              <Box>
                <Typography variant="h6">Phone Number</Typography>
                <Typography color="textSecondary">+880 (123) 456 99</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box mt={10} style={{ color: "#7183d4" }} align="center">
          {<Copyright />}
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
