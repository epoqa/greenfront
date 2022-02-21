/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import ContentProvider from "../../src/components/ContentProvider/ContentProvider";
import Navigation from "../../src/components/Navigation/Navigation";
import Header from "../../src/components/Header/Header";
import Footer from "../../src/components/Footer/Footer";
import React from "react";
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const mdTheme = createTheme();

import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header />
        <Navigation />
        <ContentProvider>
<section className="mb-4">
    <h2 className="h1-responsive font-weight-bold text-center my-4">კონტაქტი</h2>
    <p className="text-center w-responsive mx-auto mb-5">ტექსტი კონტაქტის</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11914.402270937777!2d44.766064!3d41.7075578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5e9da6befdd90808!2sANKOS.SHOP!5e0!3m2!1sen!2sge!4v1645436805482!5m2!1sen!2sge" className={styles.map} loading="lazy"></iframe>
        <br/>
        <br/>
    <div className="row d-flex justify-content-center">

        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><BusinessIcon />
                    <p>ი.აბაშიძის 32 თბილისი, 0178</p>
                </li>

                <li><PhoneIcon/>
                    <p>+995 593 22 32 22</p>
                </li>

                <li><EmailIcon />
                    <p>contact@email.com</p>
                </li>
            </ul>
        </div>

    </div>

</section>
          <Footer />
        </ContentProvider>
      </Box>
    </ThemeProvider>
  );
};
export default Contact;
