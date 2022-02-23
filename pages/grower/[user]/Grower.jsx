/* eslint-disable @next/next/no-html-link-for-pages */
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
import React, { useEffect, useRef, useState } from "react";
import uniqid from "uniqid";
import axios from "axios";
import { backBaseURL } from "src/consts/consts";
import Footer from "../../../src/components/Footer/Footer";
import Avatar from "@mui/material/Avatar";
import { timeSince } from "src/reuseableFunctions/timeSince";
import styles from "./Grower.module.css";
import SingleDiary from "../../../src/components/SingleDiary/SingleDiary";
const mdTheme = createTheme();

export default function Grower() {
  let [user, setUser] = useState([]);
  const router = useRouter();
  let [diaries, setDiaries] = useState([]);
  useEffect(() => {
    router.query.user &&
      axios
        .get(`${backBaseURL}/users/${router.query.user}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

    router.query.user &&
      axios
        .get(`${backBaseURL}/diary/user/${router.query.user}`)
        .then((res) => {
          setDiaries(res.data);
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
                  }}
                >
                  <div className="">
                    <div className={`${styles.randomDiv} px-4 pb-1 cover`}>
                      <div className="media pt-4 align-items-start profile-head">
                        <div className="profile mr-3">
                          <img
                            src="https://i.pinimg.com/originals/b8/a8/df/b8a8df76d3ed4c6b978167d2a68555f0.jpg"
                            alt="..."
                            width="180"
                            className="rounded mb-2 img-thumbnail"
                          />
                        </div>
                        <div className="media-body mb-5 text-white">
                          <h4 className="mt-0 mb-0">{user.username}</h4>
                          <p className="small mb-4">
                            {" "}
                            <i className="fas fa-map-marker-alt mr-2"></i>{" "}
                            შემოუერთდა {timeSince(user.Joined)} წინ
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-light p-4 d-flex justify-content-start text-center">
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <h5 className="font-weight-bold mb-0 d-block">1</h5>
                          <small className="text-muted">
                            {" "}
                            <i className="fas fa-image mr-1"></i>დღიურები
                          </small>
                        </li>
                        <li className="list-inline-item">
                          <h5 className="font-weight-bold mb-0 d-block">75</h5>
                          <small className="text-muted">
                            {" "}
                            <i className="fas fa-user mr-1"></i>მოწონება
                          </small>
                        </li>
                        <li className="list-inline-item">
                          <h5 className="font-weight-bold mb-0 d-block">40</h5>
                          <small className="text-muted">
                            {" "}
                            <i className="fas fa-user mr-1"></i>რეითი
                          </small>
                        </li>
                      </ul>
                    </div>
                    <div className="px-4 py-3">
                      <h5 className="mb-2">ჩემს შესახებ</h5>
                      <div className="p-4 rounded shadow-sm bg-light">
                        <p className="font-italic mb-0">Web Developer</p>
                        <p className="font-italic mb-0">Lives in New York</p>
                        <p className="font-italic mb-0">Photographer</p>
                      </div>
                    </div>
                    <div className="py-4 px-4">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h5 className="mb-0">დღიურები</h5>
                      </div>
                      <div
                        className={`${styles.row} d-flex justify-content-start row`}
                      >
                        {diaries &&
                          diaries.map((item) => (
                            <div key={uniqid()}>
                              <SingleDiary item={item} />
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </Paper>
              </Grid>
            </Grid>
            <br />
            <Footer />
          </ContentProvider>
        </Box>
      </ThemeProvider>
    </>
  );
}
