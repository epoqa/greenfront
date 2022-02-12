import React, { useState } from "react";
import uniqid from "uniqid";
import styles from "./Weeks.module.css";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
const Weeks = ({ weeks, chosenWeek, setChosenWeek, setModalShow, owner, diaryId, setWeeks }) => {
  const deleteWeek = (index) => {
    axios
      .delete(`https://greenbackk.herokuapp.com/diary/week/${diaryId}/${index}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setWeeks(weeks.filter((week, i) => i !== index));
        console.log(res);
      }
      )
      .catch((err) => {
        console.log(err);
      } 
      );
  }

  return (
    <>
      <h6 className={styles.h1class + " fw-bold"}>კვირები</h6>
      <br />
      <div className="justify-content-center row">
        {weeks
          ? weeks.map((week, index) => (
              <a
                style={{
                  opacity: index === chosenWeek ? 1 : 0.4,
                }}
                onClick={(e) => setChosenWeek(index)}
                key={uniqid()}
                className={`${styles.weekParent} ${
                  week.weekType === "GER"
                    ? styles.GER
                    : week.weekType === "VEG"
                    ? styles.VEG
                    : week.weekType === "FLO"
                    ? styles.FLO
                    : week.weekType === "HAR"
                    ? styles.HAR
                    : null
                } d-flex flex-column col-xs-6 mb-5`}
              >
                {week.weekType}
                <span className={`${styles.weekMiddle} p2`}>
                  {index === 0 ? "G" : index}
                  <p className={`${styles.weekChild} p2`}>კვირა</p>
                  {index === chosenWeek ? owner === true ? <DeleteIcon color="error" onClick={e => deleteWeek(index)} /> :null : null}
                  <br/>
                </span>
              </a>
            ))
          : null}
          
      {owner ? (
        <a
          onClick={() => setModalShow(true)}
          className={`${styles.weekParent} ${styles.ADD}  d-flex flex-column col-xs-6`}
        >
          დამატება
          <span className={`${styles.weekMiddle}  ${styles.ADD} p2`}>+</span>
        </a>
      ) : null}
      </div>
      <br/>
    </>
  );
};
export default Weeks;
