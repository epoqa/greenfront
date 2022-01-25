import React from "react";
import { CircularProgress } from "@mui/material";
import Styles from "./Loading.module.scss";
const Loading = () => {
  return (
    <div className={Styles.mainLoadingDiv}>
      <CircularProgress color="success" />
    </div>
  );
};

export default Loading;
