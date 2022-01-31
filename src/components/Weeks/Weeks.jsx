import React, { useState } from "react";
import uniqid from "uniqid";
import styles from "../../../styles/Diary.module.css";
const Weeks = ({ weeks, chosenWeek, setChosenWeek, setModalShow }) => {
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
                } d-flex flex-column col-xs-6`}
              >
                {week.weekType}
                <span className={`${styles.weekMiddle} p2`}>
                  {index === 0 ? "G" : index}
                  <p className={`${styles.weekChild} p2`}>კვირა</p>
                </span>
              </a>
            ))
          : null}

        <a
          onClick={() => setModalShow(true)}
          className={`${styles.weekParent} ${styles.ADD}  d-flex flex-column col-xs-6`}
        >
          დამატება
          <span className={`${styles.weekMiddle}  ${styles.ADD} p2`}>+</span>
        </a>
      </div>
    </>
  );
};
export default Weeks;
