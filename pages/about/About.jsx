/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import ContentProvider from "../../src/components/ContentProvider/ContentProvider";
import Navigation from "../../src/components/Navigation/Navigation";
import Header from "../../src/components/Header/Header";

import React from "react";

const mdTheme = createTheme();

import styles from "./About.module.css";
const About = () => {
  
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header />
        <Navigation />
        <ContentProvider>
          <div className={`${styles.container}`}>
            <h5>HELLO FROM ABOUT</h5>
            <h5>HELLO FROM ABOUT</h5>
            <h5>HELLO FROM ABOUT</h5>
            <h5>HELLO FROM ABOUT</h5>

</div>
        </ContentProvider>
      </Box>
    </ThemeProvider>
  );
};
export default About;
