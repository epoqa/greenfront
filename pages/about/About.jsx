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
            <div className="px-4 py-5 my-5 text-center">
              <img
                className="d-block mx-auto mb-4"
                src="https://cdn.shopify.com/s/files/1/0588/8793/0056/files/bolo_300x.png?v=1628837134"
                alt=""
                width="172"
                height="157"
              />
              <h1 className="display-5 fw-bold">ჩვენ შესახებ</h1>
              <br />
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                  ლორემ იპსუმ სინდისებიც მნიშვნელოვანია ჩხრეკა გცემეს სახლია
                  მიმიცია ოცნებას. დაუკონკრეტებია დაგენიძლავები ერთავ ჭადრის
                  ცნება ორგაზმით. შესწყდა უბრძოლველად ვმართო
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg px-4 gap-3"
                  >
                    ლორემ
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg px-4"
                  >
                    იპსუმ
                  </button>
                </div>
              </div>
            </div>

            <div className="container px-4 py-5" id="hanging-icons">
              <h2 className="pb-2 border-bottom">ლორემ იპსუმ</h2>
              <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="col d-flex align-items-start">
                  <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                    <svg className="bi" width="1em" height="1em">
                      <use xlinkHref="#toggles2"></use>
                    </svg>
                  </div>
                  <div>
                    <h2>ლორემ იპსუმ</h2>
                    <p>
                    ლორემ იპსუმ სინდისებიც მნიშვნელოვანია ჩხრეკა გცემეს სახლია
                  მიმიცია ოცნებას. დაუკონკრეტებია დაგენიძლავები ერთავ ჭადრის
                    </p>
                    <a href="#" className="btn btn-primary">
                    ლორემ იპსუმ
                    </a>
                  </div>
                </div>
                <div className="col d-flex align-items-start">
                  <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                    <svg className="bi" width="1em" height="1em">
                      <use xlinkHref="#cpu-fill"></use>
                    </svg>
                  </div>
                  <div>
                    <h2>ლორემ იპსუმ</h2>
                    <p>
                    ლორემ იპსუმ სინდისებიც მნიშვნელოვანია ჩხრეკა გცემეს სახლია
                  მიმიცია ოცნებას. დაუკონკრეტებია დაგენიძლავები ერთავ ჭადრის
                    </p>
                    <a href="#" className="btn btn-primary">
                    ლორემ იპსუმ
                    </a>
                  </div>
                </div>
                <div className="col d-flex align-items-start">
                  <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                    <svg className="bi" width="1em" height="1em">
                      <use xlinkHref="#tools"></use>
                    </svg>
                  </div>
                  <div>
                    <h2>ლორემ იპსუმ</h2>
                    <p>
                    ლორემ იპსუმ სინდისებიც მნიშვნელოვანია ჩხრეკა გცემეს სახლია
                  მიმიცია ოცნებას. დაუკონკრეტებია დაგენიძლავები ერთავ ჭადრის
                    </p>
                    <a href="#" className="btn btn-primary">
                    ლორემ იპსუმ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <Footer />
        </ContentProvider>
      </Box>
    </ThemeProvider>
  );
};
export default About;
