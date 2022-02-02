/* eslint-disable @next/next/no-img-element */
import React from "react";
import uniqid from "uniqid";
import styles from "../../../styles/Diary.module.css";
import { getAddedImages } from "../../redux/selectors/selector";
import { useSelector } from "react-redux";
const ChosenWeekPhotos = ({ chosenPics }) => {
  const imagesFromRedux = useSelector(getAddedImages);
  return (
    <div className={`${styles.row} row`}>
     
      {imagesFromRedux.length > 0
        ? imagesFromRedux.map((item) => {
            return (
              <div key={uniqid()} className={`${styles.column} column`}>
                <img className={`${styles.columnimg}`} src={item.picture} />
              </div>
            );
          })
        : chosenPics
        ? chosenPics.pictures.map((picture, index) => (
            <div key={uniqid()} className={`${styles.column} column`}>
              <img className={`${styles.columnimg}`} src={picture.picture} />
            </div>
          ))
        : null}
    </div>
  );
};

export default ChosenWeekPhotos;
