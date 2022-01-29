import React from "react";
import uniqid from "uniqid";
import styles from "../../../styles/Diary.module.css";
const ChosenWeekPhotos = ({ chosenPics }) => {
  return (
    <div className={`${styles.row} row`}>
      {chosenPics
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
