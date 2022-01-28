import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import ContentProvider from "../../src/components/ContentProvider/ContentProvider";
import Navigation from "../../src/components/Navigation/Navigation";
import Header from "../../src/components/Header/Header";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import useValidateToken from "../../src/reuseableFunctions/validateToken";
import { useRouter } from "next/router";
import axios from "axios";
import uniqid from "uniqid";
import Loading from "../../src/components/Loading/Loading";
import { NotificationManager } from "../../src/components/Notifications/Notifications";

const mdTheme = createTheme();

const CreateDiary = () => {
  const [loadingState, setLoadingState] = useState();
  useValidateToken(setLoadingState);

  const router = useRouter();

  const nameRef = useRef();
  const typeRef = useRef();

  const lightRef = useRef();
  const fertRef = useRef();
  const techRef = useRef();
  const roomRef = useRef();
  const groundRef = useRef();

  const sendRegisterInfoToBackend = (event) => {
    event.preventDefault();

    const nameRefValue =
      nameRef && null !== nameRef.current && nameRef.current.value;
    const typeRefValue =
      typeRef && null !== typeRef.current && typeRef.current.value;
    const lightRefValue =
      lightRef && null !== lightRef.current && lightRef.current.value;
    const fertRefValue =
      fertRef && null !== fertRef.current && fertRef.current.value;
    const techRefValue =
      techRef && null !== techRef.current && techRef.current.value;
    const roomRefValue =
      roomRef && null !== roomRef.current && roomRef.current.value;
    const groundRefValue =
      groundRef && null !== groundRef.current && groundRef.current.value;

    if (
      nameRefValue &&
      typeRefValue &&
      lightRefValue &&
      fertRefValue &&
      techRefValue &&
      roomRefValue &&
      groundRefValue
    ) {
      axios
        .post(
          "https://greenbackk.herokuapp.com/diary/create",
          {
            diaryName: nameRefValue,
            type: typeRefValue,

            light: lightRefValue,
            fertilizer: fertRefValue,
            technology: techRefValue,
            room: roomRefValue,
            ground: groundRefValue,
            id: uniqid(),
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          NotificationManager.success(response.statusText);
          router.push(`/diary/${response.data.id}`);
        })
        .catch((error) => {
          console.log(error.response.data.error);
          NotificationManager.error(error.response.data.error);
        });
    }
  };

  return loadingState ? (
    <Loading />
  ) : (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header />
        <Navigation />
        <ContentProvider>
          <Grid container spacing={4}>
            <Grid item xs={12} md={13} lg={13}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div>
                  <h5 className="text-center">შექმენი ახალი დღიური</h5>
                  <hr />
                  <br />
                  <form>
                    <div className="form-group">
                      <h6 htmlFor="diaryName">დღიურის სახელი</h6>
                      <input
                        ref={nameRef}
                        type="text"
                        className="form-control"
                        id="diaryName"
                        aria-describedby="diaryName"
                        maxLength="50"
                        required
                      />
                      <small className="text-secondary">
                        შეყვანილი ინფოს შეცვლა სამომავლოდ შეუძლებელია
                      </small>
                    </div>
                    <br />
                    <h6 htmlFor="diaryName">ჯიში</h6>
                    <input
                      ref={typeRef}
                      type="text"
                      className="form-control"
                      id="diaryName"
                      aria-describedby="diaryName"
                      maxLength="50"
                      required
                    />
                    <br />
                    <h6 htmlFor="diaryName">განათება</h6>
                    <input
                      ref={lightRef}
                      type="text"
                      className="form-control"
                      id="diaryName"
                      aria-describedby="diaryName"
                      maxLength="50"
                      required
                    />
                    <br />
                    <h6 htmlFor="diaryName">სასუქი</h6>
                    <input
                      ref={fertRef}
                      type="text"
                      className="form-control"
                      id="diaryName"
                      aria-describedby="diaryName"
                      maxLength="50"
                      required
                    />
                    <br />
                    <h6 htmlFor="diaryName">ტექნიკა</h6>
                    <input
                      ref={techRef}
                      type="text"
                      className="form-control"
                      id="diaryName"
                      aria-describedby="diaryName"
                      maxLength="50"
                      required
                    />
                    <br />
                    <h6 htmlFor="inputState">გარემოს ტიპი</h6>
                    <select
                      defaultValue="შიგნით"
                      ref={roomRef}
                      id="inputState"
                      className="form-control"
                    >
                      <option>აირჩიეთ...</option>
                      <option>შიგნით</option>
                      <option>გარეთ</option>
                    </select>
                    <br />
                    <h6 htmlFor="inputState">ნიადაგის ტიპი</h6>
                    <select
                      defaultValue="შიგნით"
                      ref={groundRef}
                      id="inputState"
                      className="form-control"
                    >
                      <option>აირჩიეთ...</option>
                      <option>ჰიდროფონიკა</option>
                      <option>ნიადაგი</option>
                    </select>
                    <br />

                    <button
                      onClick={(e) => sendRegisterInfoToBackend(e)}
                      type="submit"
                      className="btn btn-success"
                    >
                      შენახვა
                    </button>
                  </form>
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
