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
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import uniqid from "uniqid";
import axios from "axios";
const mdTheme = createTheme();

const Home = () => {

  const router = useRouter();
  const [data, setData] = useState([]);
  useEffect(() => {
      axios
        .get(`https://greenbackk.herokuapp.com/diary/all`)
        .then((res) => {
          setData(res.data);
         console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
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
                  height: 500,
                }}
              >
                <h5 className='text-center my-1'>ბოლოს დამატებულები</h5>
                <hr/>
                <div className={`${styles.row} d-flex justify-content-center row`}>
                      {data
                        ? data.map((item, index) => (

                            <div
                              
                              key={uniqid()}
                              className={`${styles.column} mx-1 border border-secondary rounded column`}
                              
                            >
                              <img
                              style={{cursor: 'pointer'}}
                              onClick={(e) => router.push(`/diary/${item.id}`)}
                                className={`${styles.columnimg} rounded`}
                                src={(item.weeks.length > 0) ? item.weeks.find(week => week.pictures[0] !== undefined).pictures[0].picture : 'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg'}
                                alt='სურათი'
                              />
                              <div>
                                <p style={{cursor: 'pointer'}} onClick={(e) => router.push(`/diary/${item.id}`)} className='text-center my-1'>{item.diaryName}</p>
                                <a href={'/grower/' + item.owner} className='text-center my-1'>{item.owner}</a>
                                <br/>
                                <small className='text-center'>{item.comments.length} კომენტარი • {item.weeks.length} კვირა</small>


                              </div>
                            </div>
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
