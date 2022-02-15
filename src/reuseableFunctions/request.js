import axios from "axios";
import { backBaseURL } from "src/consts/consts";

export const getReq = (path, callback) => {
  axios
    .get(`${backBaseURL}${path}`)
    .then((res) => {
      callback(res.data.comments);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const putReq = (path, body, header, callback) => {
  axios
    .put(`${backBaseURL}${path}`, body, {
      headers: header,
    })
    .then((response) => {
      callback(response.data.comments);
    })
    .catch((error) => {
      console.log(error);
    });
};
