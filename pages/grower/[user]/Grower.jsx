/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import ContentProvider from "../../../src/components/ContentProvider/ContentProvider";
import Navigation from "../../../src/components/Navigation/Navigation";
import Header from "../../../src/components/Header/Header";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/router";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import uniqid from "uniqid";
import axios from "axios";
const mdTheme = createTheme();

export default function Grower() {
  let [user, setUser] = useState([]);
  const router = useRouter();

  useEffect(() => {
    router.query.user &&
      axios
        .get(`https://greenbackk.herokuapp.com/users/${router.query.user}`)
        .then((res) => {
          setUser(res.data);
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err);
        });
  }, [router]);

  return (
    <>
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
                  height: 500,
                }}
              >
   
                <p>121</p>
          
              </Paper>
            </Grid>
          </Grid>
        </ContentProvider>
      </Box>
    </ThemeProvider>
    </>
  );
}
