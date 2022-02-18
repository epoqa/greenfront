import React, { useState } from "react";
import uniqid from "uniqid";
import { deleteWeekAction } from "src/redux/actions/action";
import styles from "./Weeks.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { getDiaryWeeksSelector } from "../../redux/selectors/selector";
import { deleteWeekReq } from "src/reuseableFunctions/request";
const Weeks = ({ chosenWeek, setChosenWeek, setModalShow, owner, diaryId }) => {
  const dispatch = useDispatch();
  const weeksfromRedux = useSelector((state) => getDiaryWeeksSelector(state));
  const deleteWeek = (weekId) => {
    dispatch(deleteWeekAction(weekId));
    deleteWeekReq(diaryId, weekId);
  };

  return (
    <>
      <h6 className={styles.h1class + " fw-bold"}>კვირები</h6>
      <br />
      <div className="justify-content-center row">
        {weeksfromRedux
          ? weeksfromRedux.map((week, index) => (
              <a
                style={{
                  opacity: week.weekId === chosenWeek ? 1 : 0.4,
                }}
                onClick={(e) => setChosenWeek(week.weekId)}
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
                  {week.weekId === chosenWeek ? (
                    owner === true ? (
                      <DeleteIcon
                        color="error"
                        onClick={(e) => deleteWeek(week.weekId)}
                      />
                    ) : null
                  ) : null}
                  <br />
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
      <br />
    </>
  );
};
export default Weeks;
