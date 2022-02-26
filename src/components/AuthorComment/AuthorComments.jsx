import React, { useRef, useState } from "react";
import styles from "./AuthorComments.module.css";
import { useRouter } from "next/router";
import { timeSince } from "src/reuseableFunctions/timeSince";
import uniqid from "uniqid";
import Avatar from "@mui/material/Avatar";
import {
  addCommentReq,
  deleteCommentReq,
} from "src/reuseableFunctions/request";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import {
  addCommentAction,
  deleteCommentAction,
} from "src/redux/actions/action";
import { backBaseURL } from "src/consts/consts";
import { NotificationManager } from "src/components/Notifications/Notifications";

import axios from "axios";
const AuthorComments = () => {
  const isLogged = useSelector((state) => state.isLogged);
  const owner = useSelector((state) => state.diary.owner);
  const authorComment = useSelector((state) => state.diary.authorComment);
  const [comment, setComment] = useState("");
  const diaryId = useSelector((state) => state.diary.id);
  const dispatch = useDispatch();
  const router = useRouter();
  const commentRef = useRef();

  const sendRegisterInfoToBackend = (event) => {
    event.preventDefault();
    const commentRefValue =
      commentRef && commentRef.current && commentRef.current.value;

    if (commentRefValue) {
      axios
        .post(
          `${backBaseURL}/diary/authorcomment`,
          {
            authorComment: commentRefValue,
            diaryId: diaryId,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          setComment(response.data.authorComment);
          NotificationManager.success(response.statusText);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="d-flex flex-column mb-3 justify-content-center align-items-center">
      <br />
      <h6>{(comment === "") ? authorComment : comment } </h6>
      <br />
      {isLogged === owner ? (
      <form>
        <div className="row h-100 align-items-center">
          <textarea
            ref={commentRef}
            rows="2"
            cols="40"
            type="text"
            className={`${styles.randomDiv} form-control my-2`}
            id="diaryName"
            aria-describedby="diaryName"
            maxLength="700"
            required
          />

          <button
            type="submit"
            onClick={(e) => sendRegisterInfoToBackend(e)}
            className="col-sm-12 my-auto w-100 btn center btn-primary"
          >
            დაწერა
          </button>
        </div>
      </form>
      ) : (
        null)}
    </div>
  );
};
export default AuthorComments;
