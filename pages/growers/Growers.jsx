/* eslint-disable @next/next/no-html-link-for-pages */
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
import { useRouter } from "next/router";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import uniqid from "uniqid";
import axios from "axios";
const mdTheme = createTheme();
import { v4 as uuidv4 } from "uuid";
import { timeSince } from "../../src/reuseableFunctions/timeSince";
import NextLink from "next/link";
import { backBaseURL } from "src/consts/consts";

import styles from "./Growers.module.css";
import Avatar from "@mui/material/Avatar";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SearchIcon from "@mui/icons-material/Search";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Footer from "../../src/components/Footer/Footer";

const Home = () => {
  let [users, setUsers] = useState([]);
  let [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(`${backBaseURL}/users/all`)
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header />
        <Navigation />
        <ContentProvider>
          <div className=" ">
            <h4 className="p-2 ml-auto text-dark font">აღმოაჩინე გროუერები</h4>
            <div className={`${styles.searchParent}`}>
              <div className="p-2 form-outline">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  placeholder="ძებნა..."
                  id="form1"
                  className="form-control p-2"
                />
                {/* <select className="p-1 form-select" aria-label="Default select example">
  <option selected onClick={e => sortBy('')}>დალაგება</option>
  <option value="1" onClick={e => sortBy('bylike')}>მოწონებით</option>
  <option value="2" onClick={e => sortBy('bydiary')}>დღიურებით</option>
  <option value="3" onClick={e => sortBy('byname')}>სახელით</option>
</select> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container py-1 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <ul className="list-group">
                  {users
                    .filter((val) => {
                      if (search == "") {
                        return val;
                      } else if (
                        val.username
                          .toLowerCase()
                          .includes(search.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((user) => (
                      <NextLink
                        href={{ pathname: `/grower/${user.username}` }}
                        key={uuidv4()}
                      >
                        <li
                          className={`${styles.parentLi} mt-2 d-flex flex-row list-group-item`}
                        >
                          <Avatar
                            className="rounded-circle shadow-1-strong me-3"
                            src={user.picture}
                            alt="avatar"
                          />
                          <h6
                            className={`${styles.nameStyle} p-1 flex-row text-primary`}
                          >
                            {window.matchMedia("(max-width: 460px)").matches
                              ? user.username.length > 5
                                ? user.username.split("").slice(0, 5).join("") +
                                  ".."
                                : user.username
                              : user.username}
                          </h6>
                          <div className={`${styles.growerStats} p-2 flex-row`}>
                            <span className=" text-primary p-2 flex-row m-3">
                              <ThumbUpIcon />
                              <small className={`p-1 flex-row`}>{user.likes}</small>
                              <small
                                className={`${styles.statText} p-1 flex-row`}
                              >
                                მოწონება
                              </small>
                            </span>
                            <span className="text-success">
                              <MenuBookIcon />{" "}
                              <small className={`p-1 flex-row`}>{user.diariesNum}</small>
                              <small
                                className={`${styles.statText} p-1 flex-row`}
                              >
                                დღიური
                              </small>
                            </span>
                          </div>
                        </li>
                      </NextLink>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <br/>  
          <Footer />
        </ContentProvider>
      </Box>
    </ThemeProvider>
  );
};
export default Home;
