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

const mdTheme = createTheme();

const Home = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://greenbackk.herokuapp.com/diary/all`)
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
          <Grid container spacing={0}>
            <Grid item xs={12} md={13} lg={13}>
              <Paper
                sx={{
                  p: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <br />
                <div
                  className={`${styles.row} d-flex justify-content-around row`}
                >
                  {data
                    ? data.map((item, index) => (
                        <SingleDiary item={item} index={index} key={uniqid()} />
                      ))
                    : null}
                </div>
              </Paper>
            </Grid>
          </Grid>
        </ContentProvider>
      </Box>
    </ThemeProvider>
  );
};
export default Home;
