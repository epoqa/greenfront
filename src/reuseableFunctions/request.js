import axios from "axios";
import { backBaseURL } from "src/consts/consts";

export const deleteCommentReq = (diaryId, commentId) => {
  axios
    .delete(`${backBaseURL}/diary/${diaryId}/comment/${commentId}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addCommentReq = (weekId, commentRefValue, commentId) => {
  axios
    .put(
      `${backBaseURL}/diary/comment/${weekId}`,
      { comment: commentRefValue, commentId },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
    .catch((error) => {
      console.log(error);
    });
};

export const deleteWeekReq = (diaryId, weekId) => {
  axios
    .delete(`${backBaseURL}/diary/week/${diaryId}/${weekId}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addWeekReq = (id, weekId, type) => {
  axios
    .put(
      `${backBaseURL}/diary/week/${id}`,
      {
        type: type,
        weekId,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
    .then((res) => {
      console.log(res.data);
    });
};

export const addPhotoReq = (url, owner, chosenWeek, diaryId) => {
  axios.put(
    `${backBaseURL}/diary/picture/${diaryId}`,
    {
      picture: url,
      owner,
      weekId: chosenWeek,
    },
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }
  );
};
