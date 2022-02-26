import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import ContentProvider from "../../../src/components/ContentProvider/ContentProvider";
import Navigation from "src/components/Navigation/Navigation";
import Header from "src/components/Header/Header";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import uniqid from "uniqid";
import axios from "axios";
import { backBaseURL } from "src/consts/consts";
import Footer from "src/components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import SingleDiary from "src/components/SingleDIary/SingleDiary";
import EditIcon from "@mui/icons-material/Edit";
const mdTheme = createTheme();
import { timeSince } from "src/reuseableFunctions/timeSince";
import styles from "./Grower.module.css";
import ProfileEdit from "src/components/ProfileEdit/ProfileEdit";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import UserPhoto from "src/components/UserPhoto/UserPhoto";
export default function Grower() {
  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();

  let [user, setUser] = useState([]);
  const router = useRouter();
  let [diaries, setDiaries] = useState([]);
  const isLogged = useSelector((state) => state.isLogged);
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
            <div className="">
              <div className={`${styles.randomDiv} px-4 pb-1 cover`}>
                <div className="media pt-4 align-items-start profile-head">
                  <div className="profile mr-3">
                    <UserPhoto user={user} setUser={setUser} />
                  </div>
                  <div className="media-body mb-5 text-white">
                    <h4 className="mt-0 mb-0">{user.username}</h4>
                    <p className="small mb-4">
                      {" "}
                      <i className="fas fa-map-marker-alt mr-2"></i> შემოუერთდა{" "}
                      {timeSince(user.Joined)} წინ
                    </p>
                    {user.username === isLogged ? (
                      <button
                        onClick={(e) => setModalShow(true)}
                        className="btn btn-primary"
                      >
                        <EditIcon /> განახლება
                      </button>
                    ) : null}
                    <br />
                    <br />

                    <div className="row">
                      <div className="col-sm-1 ">
                        {user.gender === "ქალი" ? (
                          <span>
                            <FemaleIcon />{" "}
                          </span>
                        ) : user.gender === "კაცი" ? (
                          <span>
                            <MaleIcon />
                          </span>
                        ) : null}{" "}
                      </div>
                      <div className="col-sm-1">{user.age + " წლის"}</div>
                      <div className="col-sm-2">{user.location + "დან"}</div>
                    </div>
                    <ProfileEdit
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                      user={user}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-light p-4 d-flex justify-content-start text-center">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <h5 className="font-weight-bold mb-0 d-block">
                      {user.diariesNum}
                    </h5>
                    <small className="text-muted">
                      {" "}
                      <i className="fas fa-image mr-1"></i>დღიურები
                    </small>
                  </li>
                  <li className="list-inline-item">
                    <h5 className="font-weight-bold mb-0 d-block">
                      {user.likes}
                    </h5>
                    <small className="text-muted">
                      {" "}
                      <i className="fas fa-user mr-1"></i>მოწონება
                    </small>
                  </li>
                  <li className="list-inline-item">
                    <h5 className="font-weight-bold mb-0 d-block">
                      {user.likes === 0
                        ? "0"
                        : (user.diariesNum / 123).toFixed(2)}
                    </h5>
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
                  <p className="text-muted mb-0">
                    {user.about === "none" ? "" : user.about}
                  </p>
                </div>
              </div>
              <div className="py-4 px-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h5 className="mb-0">დღიურები</h5>
                </div>
                <div
                  className={`${styles.row} row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center `}
                >
                  {diaries
                    ? diaries.map((item, index) => (
                        <SingleDiary item={item} index={index} key={uniqid()} />
                      ))
                    : null}
                </div>
              </div>
            </div>

            <br />
            <Footer />
          </ContentProvider>
        </Box>
      </ThemeProvider>
    </>
  );
}
