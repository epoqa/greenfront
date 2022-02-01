import React from "react";
import uniqid from "uniqid";
import styles from "../../../styles/Diary.module.css";
import { getAddedImages } from "../../redux/selectors/selector";
import { useSelector } from "react-redux";
const ChosenWeekPhotos = ({ chosenPics }) => {
  const imagesFromRedux = useSelector(getAddedImages);
  imagesFromRedux && console.log(imagesFromRedux, "ai to ");
  return (
    <div className={`${styles.row} row`}>
      {/* {chosenPics
        ? chosenPics.pictures.map((picture, index) => (
            <div key={uniqid()} className={`${styles.column} column`}>
              <img className={`${styles.columnimg}`} src={picture.picture} />
            </div>
          ))
        : null} */}
      {imagesFromRedux
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
