/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
//test
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import ContentProvider from "src/components/ContentProvider/ContentProvider";
import Navigation from "src/components/Navigation/Navigation";
import Header from "src/components/Header/Header";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/router";
import axios from "axios";
import DiaryMainSpecs from "src/components/DiaryMainSpecs/DiaryMainSpecs";
import styles from "./Diary.module.css";
import Popup from "src/components/Popup/Popup";
import PhotoUploadInput from "src/components/PhotoUploadInput/PhotoUploadInput";
import Comments from "src/components/Comments/Comments";
import Weeks from "src/components/Weeks/Weeks";
import ChosenWeekPhotos from "src/components/ChosenWeekPhotos/ChosenWeekPhotos";
import { useSelector, useDispatch } from "react-redux";
import { addDiaryAction } from "src/redux/actions/action";
import { backBaseURL } from "src/consts/consts";
import Loading from "src/components/Loading/Loading";
const mdTheme = createTheme();
import Footer from "../../../src/components/Footer/Footer";

const CreateDiary = () => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [chosenWeek, setChosenWeek] = useState(0);
  const [diary, setDiary] = useState({});
  const [weeks, setWeeks] = useState([]);
  const [owner, setOwner] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isLogged = useSelector((state) => state.isLogged);

  const router = useRouter();
  const rerenderfunc = (arg) => {
    setWeeks(arg);
  };

  useEffect(() => {
    router.query.id &&
      axios
        .get(`${backBaseURL}/diary/id/${router.query.id}`)
        .then((res) => {
          setDiary(res.data);
          setWeeks(res.data.weeks);
          dispatch(addDiaryAction(res.data));
          setChosenWeek(res.data.weeks[0].weekId);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [router]);

  const deleteDiary = () => {
    axios
      .delete(`${backBaseURL}/diary/id/${router.query.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        router.push(`/`);
      });
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
                  <section className={`${styles.randomDiv}`}>
                    <DiaryMainSpecs
                      deleteDiary={deleteDiary}
                      diary={diary}
                      owner={diary.owner === isLogged}
                    />

                    <Weeks
                      chosenWeek={chosenWeek}
                      setChosenWeek={setChosenWeek}
                      setModalShow={setModalShow}
                      owner={diary.owner === isLogged}
                      diaryId={router.query.id}
                    />
                    <Popup
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                      owner={diary.owner}
                      id={router.query.id}
                      setChosenWeek={setChosenWeek}
                    />
                    <br />

                    <h6 className={styles.h1class + " fw-bold"}>ფოტოები</h6>
                    {isLogged === diary.owner ? (
                      <PhotoUploadInput
                        chosenWeek={chosenWeek}
                        diary={diary}
                        setIsLoading={setIsLoading}
                      />
                    ) : null}

                    {!isLoading && (
                      <ChosenWeekPhotos
                        chosenPics={weeks[chosenWeek]}
                        chosenWeek={chosenWeek}
                      />
                    )}
                    {isLoading && <Loading type="partial" />}

                    <Comments />
                  </section>
                </div>
                <br />
                
              </Paper>
            </Grid>
          </Grid>
          <br/>  
<Footer />
        </ContentProvider>
      </Box>
    </ThemeProvider>
  );
};
export default CreateDiary;
