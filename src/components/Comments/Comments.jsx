import React, { useRef, useState, useEffect } from "react";
import styles from "../../../styles/Diary.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { timeSince } from "../../reuseableFunctions/timeSince";
import uniqid from "uniqid";

const Comments = () => {
  const router = useRouter();

  useEffect(() => {
    router.query.id &&
      axios
        .get(`https://greenbackk.herokuapp.com/diary/id/${router.query.id}`)
        .then((res) => {
          setComments(res.data.comments);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [router]);
  const commentRef = useRef();
  const [comments, setComments] = useState([]);
  const sendRegisterInfoToBackend = (event) => {
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
          setComments(response.data.comments);
          commentRef && commentRef.current
            ? (commentRef.current.value = "")
            : null;
        })
        .catch((error) => {
          console.log(error);
          NotificationManager.error(error.response.data.error);
        });
    }
  };
  return (
    <div className="container my-5 py-5 text-dark">
      <div className="row d-flex justify-content-center">
        <h6 className={styles.h1class + " fw-bold"}>კომენტარები</h6>
        <div className="col-md-12 col-lg-10 col-xl-8">
          <div className="d-flex justify-content-between align-items-center mb-4"></div>
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
                          <p className="small mb-0" style={{ color: "#aaa" }}>
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
  );
};
export default Comments;