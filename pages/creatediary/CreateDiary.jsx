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
import uniqid from 'uniqid';
import Loading from "../../src/components/Loading/Loading";
import { NotificationManager } from "../../src/components/Notifications/Notifications";

const mdTheme = createTheme();

const CreateDiary = () => {

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };


  //STATE
  const [loadingState, setLoadingState] = useState();
  useValidateToken(setLoadingState);

  const router = useRouter();

  const nameRef = useRef();
  const typeRef = useRef();
  const descRef = useRef();

  const sendRegisterInfoToBackend = (event) => {
    event.preventDefault();

    const nameRefValue =
      nameRef && null !== nameRef.current && nameRef.current.value;
    const typeRefValue =
      typeRef && null !== typeRef.current && typeRef.current.value;
    const descRefValue =
      descRef && null !== descRef.current && descRef.current.value;

    if (nameRefValue && typeRefValue && descRefValue) {
      axios
        .post(
          "https://greenbackk.herokuapp.com/diary/create",
          {
            diaryName: nameRefValue,
            type: typeRefValue,
            description: descRefValue,
            id: uniqid()
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
                    <h5 className="text-center" >შექმენი ახალი დღიური</h5>
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
                      </div>
                      <br />
                      <div className="form-group">
                        <h6 htmlFor="diaryDesc">დღიურის აღწერა</h6>
                        <textarea
                          ref={descRef}
                          rows="5"
                          cols="60"
                          type="text"
                          className="form-control"
                          id="diaryName"
                          aria-describedby="diaryName"
                          maxLength="700"
                          required
                        />
                      </div>
                      <br />
                      <h6 htmlFor="inputState">ჯიში</h6>
                      <select ref={typeRef} id="inputState" className="form-control">
                        <option selected >სხვა...</option>
                        <option>ჯიში 1</option>
                        <option>ჯიში 2</option>
                        <option>ჯიში 3</option>
                      </select>
                      <br />
                      
                      <button onClick={(e) => sendRegisterInfoToBackend(e)} type="submit" className="btn btn-success">
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
