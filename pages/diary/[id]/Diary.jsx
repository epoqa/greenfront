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
import { useRouter } from "next/router";
import axios from "axios";
import DiaryMainSpecs from "../../../src/components/DiaryMainSpecs/DiaryMainSpecs";
import styles from "../../../styles/Diary.module.css";
import Popup from "../../../src/components/Popup/Popup";
import PhotoUploadInput from "../../../src/components/PhotoUploadInput/photoUploadInput";
import Comments from "../../../src/components/Comments/Comments";
import Weeks from "../../../src/components/Weeks/Weeks";
import ChosenWeekPhotos from "../../../src/components/ChosenWeekPhotos/ChosenWeekPhotos";
const mdTheme = createTheme();

const CreateDiary = () => {
  const [modalShow, setModalShow] = useState(false);
  const [chosenWeek, setChosenWeek] = useState(0);
  const [diary, setDiary] = useState({});
  const [weeks, setWeeks] = useState([]);

  const router = useRouter();
  const rerenderfunc = (arg) => {
    setWeeks(arg);
  };

  useEffect(() => {
    router.query.id &&
      axios
        .get(`https://greenbackk.herokuapp.com/diary/id/${router.query.id}`)
        .then((res) => {
          setDiary(res.data);
          setWeeks(res.data.weeks);
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
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                }}
              >
                <div>
                  <section style={{ backgroundColor: "white" }}>
                    <DiaryMainSpecs diary={diary} />

                    <Weeks
                      weeks={weeks}
                      chosenWeek={chosenWeek}
                      setChosenWeek={setChosenWeek}
                    />
                    <Popup
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                      rerenderfunc={rerenderfunc}
                      owner={diary.owner}
                      id={router.query.id}
                      func={setModalShow}
                    />
                    <br />

                    <h6 className={styles.h1class + " fw-bold"}>ფოტოები</h6>
                    <ChosenWeekPhotos chosenPics={weeks[chosenWeek]} />
                    <PhotoUploadInput />
                    <Comments />
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
