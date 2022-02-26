/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import uniqid from "uniqid";
import { getAddedImages } from "../../redux/selectors/selector";
import { useSelector } from "react-redux";
import styles from "./ChosenWeekPhotos.module.css";
import { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DeleteIcon from "@mui/icons-material/Delete";
import { timeSince } from "../../reuseableFunctions/timeSince";

const ChosenWeekPhotos = ({ chosenPics, chosenWeek }) => {
  const [display, setDisplay] = useState("none");
  const [imgSrc, setImgSrc] = useState("");
  const [imgIndex, setImgIndex] = useState(0);
  const imagesFromRedux = useSelector((state) =>
    getAddedImages(state, chosenWeek)
  );

  const zoomPic = (src, index) => {
    setDisplay("block");
    setImgSrc(src);
    setImgIndex(index);
  };

  const setImgFunc = (index) => {
    if (index < 0) {
      setImgIndex(imagesFromRedux.length - 1);
      setImgSrc(imagesFromRedux[imagesFromRedux.length - 1].picture);
    } else if (index > imagesFromRedux.length - 1) {
      setImgIndex(0);
      setImgSrc(imagesFromRedux[0].picture);
    } else {
      setImgIndex(index);
      setImgSrc(imagesFromRedux[index].picture);
    }
  };

  return (
    <div className={`${styles.row} row`}>
      {imagesFromRedux?.length > 0 &&
        imagesFromRedux.map((item, index) => {
          return (
            <div key={uniqid()} className={`${styles.column} column`}>
              <div className={styles.gfg}>
                {" "}
                <img
                  onClick={(e) => zoomPic(item.picture, index)}
                  className={`${styles.columnimg} ${styles.myImg}`}
                  src={item.picture}
                />
                <p className={styles.dateParagraph}>
                  {timeSince(item.createdAt)} წინ
                </p>
              </div>

              <div
                id="myModal"
                style={{ display: display }}
                className={`${styles.modal}`}
              >
                <span
                  onClick={(e) => setDisplay("none")}
                  className={styles.close}
                >
                  &times;
                </span>
                <img className={styles.modalcontent} src={imgSrc} id="img01" />
                <span className={styles.arrow}>
                  {" "}
                  <ChevronLeftIcon
                    onClick={(e) => setImgFunc(imgIndex - 1)}
                    fontSize="50px"
                  />
                  <ChevronRightIcon
                    onClick={(e) => setImgFunc(imgIndex + 1)}
                    fontSize="50px"
                  />
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ChosenWeekPhotos;
