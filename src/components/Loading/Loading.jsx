import React from "react";
import { CircularProgress } from "@mui/material";
import Styles from "./Loading.module.scss";
const Loading = ({ type } = "full") => {
  return (
    <div
      className={
        type === "full"
          ? Styles.mainLoadingDivFull
          : type === "partial"
          ? Styles.mainLoadingDivPartial
          : null
      }
    >
      <CircularProgress color="success" />
    </div>
  );
};

export default Loading;
