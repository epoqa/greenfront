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

const Home = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  let [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://greenbackk.herokuapp.com/diary/all`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://greenbackk.herokuapp.com/users/all")
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
          <Grid container spacing={0}>
            <Grid item xs={12} md={13} lg={13}>
              <Paper
                sx={{
                  p: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h5 className="text-center my-1">ბოლოს დამატებული დღიურები</h5>
                <hr />
                <div
                  className={`${styles.row} d-flex justify-content-center row`}
                >
                  {data
                    ? data.map((item, index) => (
                        <div
                          key={uniqid()}
                          className={`${styles.column} mx-1 border border-secondary rounded column`}
                        >
                          <img
                            onClick={(e) => router.push(`/diary/${item.id}`)}
                            className={`${styles.columnimg} rounded`}
                            src={
                              item.weeks.length > 0
                                ? (item.weeks.find(
                                    (week) => week.pictures[0] !== undefined
                                  )) ?
                                  item.weeks.find(
                                    (week) => week.pictures[0] !== undefined
                                  ).pictures[0].picture
                                : "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"
                                : "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"
                            }
                            alt="სურათი"
                          />
                          <div>
                            <p
                              onClick={(e) => router.push(`/diary/${item.id}`)}
                              className={`${styles.pointer} text-center my-1`}
                            >
                              {item.diaryName}
                            </p>
                            <a
                              href={"/grower/" + item.owner}
                              className="text-center my-1"
                            >
                              {item.owner}
                            </a>
                            <br />
                            <small className="text-center">
                              {item.comments.length} კომენტარი •{" "}
                              {item.weeks.length} კვირა
                            </small>
                          </div>
                        </div>
                      ))
                    : null}
                </div>
                <br />
                <h5 className="text-center my-1">
                  ბოლოს დამატებული მომხმარებლები
                </h5>
                <hr />
                <div className="row">
                  <div className="container py-1 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                      {users.map((user) => (
                        <NextLink
                          href={{ pathname: `/grower/${user.username}` }}
                          key={uuidv4()}
                        >
                          <div className="col py-2 col-md-9 col-lg-7 col-xl-5">
                            <div
                              className={`${styles.card2} card`}
                            >
                              <div className="card-body p-4">
                                <div className="d-flex text-black">
                                  <div className="flex-shrink-0">
                                    <img
                                      src="https://i.pinimg.com/736x/9c/ec/85/9cec857533316f8e86c228f1efcbe8df--a-character-michael-scott-quotes.jpg"
                                      alt="Generic placeholder image"
                                      className={`${styles.imgFluid} img-fluid`}

                                    />
                                  </div>
                                  <div className="flex-grow-1 ms-3">
                                    <h5 className="mb-1">{user.username}</h5>
                                    <p
                                      className={`${styles.randomDiv2} mb-2 pb-1`}
                                    >
                                      შემოუერთდა {timeSince(user.Joined)} წინ
                                    </p>
                                    <div
                                      className={`${styles.randomDiv1} d-flex justify-content-start rounded-3 p-2 mb-2`}
                                    >
                                      <div>
                                        <p className="small text-muted mb-1">
                                          დღიურები
                                        </p>
                                        <p className="mb-0">41</p>
                                      </div>
                                      <div className="px-3">
                                        <p className="small text-muted mb-1">
                                          ქულა
                                        </p>
                                        <p className="mb-0">976</p>
                                      </div>
                                      <div>
                                        <p className="small text-muted mb-1">
                                          რეითი
                                        </p>
                                        <p className="mb-0">3</p>
                                      </div>
                                    </div>
                                    <div className="d-flex pt-1">
                                      <button
                                        type="button"
                                        className="btn btn-outline-primary me-1 flex-grow-1"
                                      >
                                        რამე
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-primary flex-grow-1"
                                      >
                                        რამე
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </NextLink>
                      ))}
                    </div>
                  </div>
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
