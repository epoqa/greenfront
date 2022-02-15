/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import ContentProvider from "../../src/components/ContentProvider/ContentProvider";
import Navigation from "../../src/components/Navigation/Navigation";
import Header from "../../src/components/Header/Header";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import styles from "./Home.module.css";
import { useRouter } from "next/router";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import uniqid from "uniqid";
import axios from "axios";
const mdTheme = createTheme();
import NextLink from "next/link";
import { timeSince } from "../../src/reuseableFunctions/timeSince";
import { v4 as uuidv4 } from "uuid";
import { backBaseURL } from "src/consts/consts";
import SingleDiary from "../../src/components/SingleDIary/SingleDiary";
const Home = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  let [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${backBaseURL}/diary/all`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${backBaseURL}/users/all`)
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router]);

  const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header />
        <Navigation />
        <ContentProvider>
          <h5 className="text-center my-1">ბოლოს დამატებული დღიურები</h5>
          <hr />
          <div
            className={`${styles.row} row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center `}
          >
            {data
              ? data.map((item, index) => (
                  <SingleDiary item={item} index={index} key={uniqid()} />
                ))
              : null}
          </div>
        </ContentProvider>
      </Box>
    </ThemeProvider>
  );
};
export default Home;
