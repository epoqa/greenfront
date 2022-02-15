import React, { useRef, useState, useEffect } from "react";
import styles from "../../../styles/Diary.module.css";
import { useRouter } from "next/router";
import { timeSince } from "../../reuseableFunctions/timeSince";
import uniqid from "uniqid";
import Avatar from "@mui/material/Avatar";
import { getReq, putReq } from "../../reuseableFunctions/request";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { backBaseURL } from "src/consts/consts";
const Comments = () => {
  const isLogged = useSelector((state) => state.isLogged);

  const router = useRouter();
  const commentRef = useRef();
  const [comments, setComments] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  useEffect(() => {
    router.query.id && getReq(`/diary/id/${router.query.id}`, setComments);
  }, [router]);

  const sendRegisterInfoToBackend = (event) => {
    event.preventDefault();
    const commentRefValue =
      commentRef && commentRef.current && commentRef.current.value;

    if (commentRefValue) {
      putReq(
        `/diary/comment/${router.query.id}`,
        { comment: commentRefValue },
        {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        setComments
      );
      commentRef && commentRef.current ? (commentRef.current.value = "") : null;
    }
  };

  const deleteComment = (id) => {
    console.log(id);
    setComments((prevState) =>
      prevState.filter((comment) => comment._id !== id)
    );

    axios
      .delete(`${backBaseURL}/diary/${router.query.id}/comment/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePageClick = (data) => {
    // setPagComments(comments.slice((data.selected * 5), ((data.selected * 5) + 5)))
    setPageNum(data.selected);
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
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            pageCount={Math.ceil(comments.length / 5)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            activeClassName={"active"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakLinkClassName={"page-link"}
          />

          {comments
            ? comments.slice(pageNum * 5, pageNum * 5 + 5).map((comment) => (
                <div key={uniqid()} className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex flex-start">
                      <Avatar
                        className="rounded-circle shadow-1-strong me-3"
                        src="https://www.intellectualtakeout.org/assets/3/28/michaelscott.jpg"
                        alt="avatar"
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
                              მოწონება
                            </a>{" "}
                            {comment.owner === isLogged ? (
                              <a
                                onClick={(e) => deleteComment(comment._id)}
                                className="link-grey"
                              >
                                {"  წაშლა"}
                              </a>
                            ) : null}
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
