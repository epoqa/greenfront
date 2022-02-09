/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import uniqid from "uniqid";
import styles from "../../../styles/Diary.module.css";
import { getAddedImages } from "../../redux/selectors/selector";
import { useSelector } from "react-redux";
import style from "./ChosenWeekPhotos.module.css";
import { useState } from 'react';

const ChosenWeekPhotos = ({ chosenPics, chosenWeek }) => {
  const [display, setDisplay] = useState('none');
  const [imgSrc, setImgSrc] = useState('');
  const imagesFromRedux = useSelector((state) =>
    getAddedImages(state, chosenWeek)
  );

  const zoomPic = (src) => {
    setDisplay('block');
    setImgSrc(src);

  }
  return (
    <div className={`${styles.row} row`}>
      {imagesFromRedux?.length > 0 &&
        imagesFromRedux.map((item) => {
          return (
            <div key={uniqid()} className={`${styles.column} column`}>
              <img onClick={e => zoomPic(item.picture)} className={`${styles.columnimg} ${style.myImg}`} src={item.picture} />
              {/* <div className={`${style.back} d-flex flex-column min-vh-100 justify-content-center align-items-center`}> */}
                <div id="myModal" style={{display: display}} className={`${style.modal}` }>
                  <span onClick={e => setDisplay('none')} className={style.close}>&times;</span>
                  <img className={style.modalcontent} src={imgSrc} id="img01" />
                  
                </div>
              {/* </div> */}
            </div>
          );
        })}
    </div>
  );
};

export default ChosenWeekPhotos;
