import { Container } from "@material-ui/core";
import React from "react";
import Footer from "../components/Footer/Footer";
import About from "../components/Home/About/About";
import CallToAction from "../components/Home/CallToAction/CallToAction";
import Contact from "../components/Home/Contact/Contact";
import Header from "../components/Home/Header/Header";
import Reviews from "../components/Home/Reviews/Reviews";
import Services from "../components/Home/Services/Services";
import Team from "../components/Home/Team/Team";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <Container>
        <About />
      </Container>
      <Team />
      <Contact />
      <Reviews />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
