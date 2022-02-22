import React, { useRef, useState } from "react";
import styles from "./Comments.module.css";
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
const Comments = () => {
  const isLogged = useSelector((state) => state.isLogged);
  const commentsFF = useSelector((state) => state.diary.comments);
  const dispatch = useDispatch();
  const router = useRouter();
  const commentRef = useRef();
  const [pageNum, setPageNum] = useState(0);

  const sendRegisterInfoToBackend = (event) => {
    event.preventDefault();
    const commentRefValue =
      commentRef && commentRef.current && commentRef.current.value;

    if (commentRefValue) {
      const commentId = uniqid();
      dispatch(
        addCommentAction({
          textValue: commentRefValue,
          commentId,
        })
      );
      addCommentReq(router.query.id, commentRefValue, commentId);
      commentRef && commentRef.current ? (commentRef.current.value = "") : null;
    }
  };

  const deleteComment = (id) => {
    dispatch(deleteCommentAction(id));
    deleteCommentReq(router.query.id, id);
  };

  const handlePageClick = (data) => {
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
                className="col-sm-12 my-auto w-50 btn center btn-success"
              >
                დაწერა
              </button>
            </div>
          </form>
          <hr />
          <br />
          {commentsFF?.length > 0 && (
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              pageCount={Math.ceil(commentsFF.length / 5)}
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
          )}

          {commentsFF
            ? commentsFF.slice(pageNum * 5, pageNum * 5 + 5).map((comment) => (
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
                          <p className={`${styles.randomDiv2} small mb-0`}>
                            <a href="#" className="link-grey">
                              მოწონება
                            </a>{" "}
                            {comment.owner === isLogged ? (
                              <a
                                onClick={(e) =>
                                  deleteComment(comment.commentId)
                                }
                                className="link-grey"
                              >
                                {"  წაშლა"}
                              </a>
                            ) : null}
                          </p>
                          <div className="d-flex flex-row">
                            <i className="fas fa-star text-warning me-2"></i>
                            <i
                              className={`${styles.randomDiv2}far fa-check-circle`}
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
