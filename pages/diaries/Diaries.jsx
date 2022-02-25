/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import ContentProvider from "../../src/components/ContentProvider/ContentProvider";
import Navigation from "../../src/components/Navigation/Navigation";
import Header from "../../src/components/Header/Header";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import styles from "./Diaries.module.css";
import { useRouter } from "next/router";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import axios from "axios";
import SingleDiary from "../../src/components/SingleDIary/SingleDiary";
import uniqid from "uniqid";
import { backBaseURL } from "src/consts/consts";
import Footer from "../../src/components/Footer/Footer";

const mdTheme = createTheme();

const Home = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${backBaseURL}/diary/all`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router]);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header />
        <Navigation />
        <ContentProvider>
        <div>
            <img className="img-fluid mb-5" alt="ad" src="https://getpet.ge/storage/app/media/uploaded-files/baner1140.jpg"></img>
          </div>
                <div
                  className={`${styles.row} row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center `}
                >
                  {data
                    ? data.map((item, index) => (
                        <SingleDiary item={item} index={index} key={uniqid()} />
                      ))
                    : null}
                </div>
                <br/>  
              <Footer/>
        </ContentProvider>
      </Box>
    </ThemeProvider>
  );
};
export default Home;
