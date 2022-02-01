import axios from "axios";
const baseURL = "https://greenbackk.herokuapp.com";

export const getReq = (path, callback) => {
  axios
    .get(`${baseURL}${path}`)
    .then((res) => {
      callback(res.data.comments);
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
      console.log(response, "aba rava");
      callback(response.data.comments);
    })
    .catch((error) => {
      console.log(error);
    });
};
