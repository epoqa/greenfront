import axios from "axios";
const baseURL = "https://greenbackk.herokuapp.com";

export const getReq = (path, callback, secondCallback) => {
  axios
    .get(`${baseURL}${path}`)
    .then((res) => {
      callback(res.data.comments);
      if (secondCallback) {
        secondCallback(res.data.comments.slice(0, 5));
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const putReq = (path, body, header, callback) => {
  axios
    .put(`${baseURL}${path}`, body, {
      headers: header,
    })
    .then((response) => {
      callback(response.data.comments);
    })
    .catch((error) => {
      console.log(error);
    });
};
