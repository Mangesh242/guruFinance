import React from "react";
import { Box } from "@mui/material";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Hero />
      <Services />
      <About />
      <Contact />
    </Box>
  );
};

export default Home;
