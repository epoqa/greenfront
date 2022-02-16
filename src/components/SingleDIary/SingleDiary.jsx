/* eslint-disable @next/next/no-img-element */
import React from "react";
import uniqid from "uniqid";
import PanoramaTwoToneIcon from "@mui/icons-material/PanoramaTwoTone";
import styles from "./SingleDiary.module.css";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { timeSince } from "../../reuseableFunctions/timeSince";
const SingleDiary = ({ item }) => {
  const router = useRouter();
  return (
    <div key={uniqid()} className={`${styles.mainSingleDiaryDiv} col `}>
      <img
        onClick={(e) => router.push(`/diary/${item.id}`)}
        className={`${styles.columnimg} rounded`}
        src={
          item.weeks.length > 0
            ? item.weeks.find((week) => week.pictures[0] !== undefined)
              ? item.weeks.find((week) => week.pictures[0] !== undefined)
                  .pictures[0].picture
              : "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"
            : "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"
        }
        alt="სურათი"
      />
      <div
        className={`${styles.weeks}`}
        style={{
          backgroundColor:
            item.weeks.length > 0
              ? item.weeks[item.weeks.length - 1].weekType === "GER"
                ? "#5db7ff"
                : item.weeks[item.weeks.length - 1].weekType === "VEG"
                ? "#a2da7a"
                : item.weeks[item.weeks.length - 1].weekType === "FLO"
                ? "#ff8855"
                : item.weeks[item.weeks.length - 1].weekType === "HAR"
                ? "#e35149"
                : "gray"
              : "gray",
        }}
      >
        {" "}
        {item.weeks.length} კვირა
      </div>
      <div>
        <p
          onClick={(e) => router.push(`/diary/${item.id}`)}
          className={`${styles.pointer} text-center my-1`}
        >
          {item.diaryName.length > 15
            ? item.diaryName.split("").slice(0, 14).join("") + ".."
            : item.diaryName}
        </p>
        <a href={"/grower/" + item.owner} className="text-center my-1">
          {item.owner}
        </a>
        <br />

        <small>{item.facturer ? item.facturer : null}</small>
        <br />
        <small className={`${styles.diaryStats} text-center`}>
          {item.comments.length} კომენტარი • {item.weeks.length} კვირა
        </small>
      </div>
    </div>
  );
};

export default SingleDiary;
