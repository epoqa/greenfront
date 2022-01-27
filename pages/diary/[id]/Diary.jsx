/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import ContentProvider from "../../../src/components/ContentProvider/ContentProvider";
import Navigation from "../../../src/components/Navigation/Navigation";
import Header from "../../../src/components/Header/Header";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import useValidateToken from "../../../src/reuseableFunctions/validateToken";
import { useRouter } from "next/router";
import axios from "axios";
import uniqid from "uniqid";
import Loading from "../../../src/components/Loading/Loading";
import { NotificationManager } from "../../../src/components/Notifications/Notifications";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import { timeSince } from "../../../src/reuseableFunctions/timeSince";
import PersonIcon from "@mui/icons-material/Person";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
const mdTheme = createTheme();

const CreateDiary = () => {
  const [diary, setDiary] = useState({});
  const [comments, setComments] = useState([]);
  const router = useRouter();
  useEffect(() => {
    router.query.id &&
      axios
        .get(`https://greenbackk.herokuapp.com/diary/id/${router.query.id}`)
        .then((res) => {
          setDiary(res.data);
          console.log(res.data);
          setComments(res.data.comments);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [router]);

  const commentRef = useRef();

  const sendRegisterInfoToBackend = (event) => {
    console.log("asfasf");
    event.preventDefault();
    const commentRefValue =
      commentRef && commentRef.current && commentRef.current.value;

    if (commentRefValue) {
      axios
        .put(
          `https://greenbackk.herokuapp.com/diary/comment/${router.query.id}`,
          {
            comment: commentRefValue,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          console.log(response.data, "miniso");
          setComments(response.data.comments);
          commentRef && commentRef.current
            ? (commentRef.current.value = "")
            : null;
        })
        .catch((error) => {
          console.log(error);
          NotificationManager.error(error.response.data.error, "", 1500);
        });
    }
  };

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
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <div>
                  <section style={{ backgroundColor: "white" }}>
                    <div>
                      <h4 className="fw-bold pb-1">{diary.diaryName}</h4>

                      <h6>
                        <PersonIcon /> შექმნა {timeSince(diary.createdAt)} წინ{" "}
                        <a href={`/grower/${diary.owner}`}> {diary.owner}</a>-მ
                      </h6>
                      <br />

                      <div className="container">
                        <div className="row">
                          <div className="col-sm">
                            {" "}
                            <span>
                              <p>
                                {diary.type}
                                <br />
                                <small className="text-secondary">ჯიში</small>
                              </p>
                            </span>
                          </div>
                          <div className="col-sm">
                            {" "}
                            <span>
                              <p>
                                {diary.fertilizer}{" "}
                                <br />
                                <small className="text-secondary">სასუქი</small>
                              </p>
                            </span>
                          </div>
                          <div className="col-sm">
                            {" "}
                            <span>
                              <p>
                                {diary.ground}{" "}
                                <br />
                                <small className="text-secondary">ნიადაგი</small>
                              </p>
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm">
                            <span>
                              <p>
                                {diary.light} 
                                <br />
                                
                                <small className="text-secondary">განათება</small>
                              </p>
                            </span>
                          </div>
                          <div className="col-sm">
                            <span>
                              <p>
                                {diary.technology}{" "}
                                <br />
                                <small className="text-secondary">ტექნიკა</small>
                              </p>
                            </span>
                          </div>
                          <div className="col-sm">
                            {" "}
                            <span>
                              <p>
                                {diary.room}{" "}
                                <br />
                                <small className="text-secondary">გარემო</small>
                              </p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />

                    <h5 className="text-center">კვირები</h5>

                    <div className="container my-5 py-5 text-dark">
                      <div className="row d-flex justify-content-center">
                        <hr />
                        <div className="col-md-12 col-lg-10 col-xl-8">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="text-dark mb-0">
                              კომენტარები ({comments.length})
                            </h5>
                            <br />
                          </div>
                          <form>
                            <div className="row h-100 align-items-center">
                              <textarea
                                ref={commentRef}
                                style={{ resize: "none" }}
                                rows="2"
                                cols="40"
                                type="text"
                                className="form-control my-2"
                                id="diaryName"
                                aria-describedby="diaryName"
                                maxLength="700"
                                required
                              />

                              <button
                                type="submit"
                                onClick={(e) => sendRegisterInfoToBackend(e)}
                                className="col-sm-12 my-auto w-50 btn center btn-success"
                              >
                                დაწერა
                              </button>
                            </div>
                          </form>
                          <hr />
                          <br />
                          {comments
                            ? comments.map((comment) => (
                                <div key={uniqid()} className="card mb-3">
                                  <div className="card-body">
                                    <div className="d-flex flex-start">
                                      <img
                                        className="rounded-circle shadow-1-strong me-3"
                                        src="https://avatars.githubusercontent.com/u/75354679?v=4"
                                        alt="avatar"
                                        width="40"
                                        height="40"
                                      />
                                      <div className="w-100">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                          <div className="mb-1 text-primary mb-0 text-lowercase">
                                            <h6>{comment.owner}</h6>
                                            <p className="text-dark small ms-2">
                                              {comment.comment}
                                            </p>
                                          </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                          <p
                                            className="small mb-0"
                                            style={{ color: "#aaa" }}
                                          >
                                            <a href="#" className="link-grey">
                                              წაშლა
                                            </a>{" "}
                                            •
                                            <a href="#" className="link-grey">
                                              {" რედაქტირება"}
                                            </a>
                                          </p>
                                          <div className="d-flex flex-row">
                                            <i className="fas fa-star text-warning me-2"></i>
                                            <i
                                              className="far fa-check-circle"
                                              style={{ color: "#aaa" }}
                                            ></i>
                                            <p className="mb-0 small ">
                                              {timeSince(comment.createdAt)} წინ
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))
                            : null}
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <br />
              </Paper>
            </Grid>
          </Grid>
        </ContentProvider>
      </Box>
    </ThemeProvider>
  );
};
export default CreateDiary;
