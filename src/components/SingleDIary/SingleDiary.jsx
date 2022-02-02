/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../../styles/Home.module.css";
import uniqid from "uniqid";
import PanoramaTwoToneIcon from "@mui/icons-material/PanoramaTwoTone";
import Styles from "./SingleDiary.module.scss";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
const SingleDiary = ({ item }) => {
  const router = useRouter();
  const thumbnailImage = item.weeks.find((week) => week.pictures[0])
    ?.pictures[0].picture;

  return (
    <div key={uniqid()} className={Styles.mainSingleDiaryDiv}>
      {thumbnailImage && (
        <div className={Styles.singleDiaryImageWrapper}>
          <Image
            src={
              item.weeks.find((week) => week.pictures[0])?.pictures[0].picture
            }
            width={250}
            height={150}
            alt="ფოტო არალი"
          />
        </div>
      )}

      {!thumbnailImage && (
        <PanoramaTwoToneIcon sx={{ width: "150px", height: "150px" }} />
      )}
      <div className={Styles.singleDiaryInfoMainDiv}>
        <p
          style={{ cursor: "pointer" }}
          onClick={(e) => router.push(`/diary/${item.id}`)}
        >
          {item.diaryName}
        </p>
        <div className={Styles.singleDiaryInfoCommentsAndOwner}>
          <NextLink
            href={"/grower/" + item.owner}
            style={{ background: "red" }}
          >
            <p style={{ color: "green", cursor: "pointer" }}>
              {item.owner.split("").slice(0, 6).join("") + "..."}
            </p>
          </NextLink>
          <br />
          <small className="text-center">
            {item.comments.length} კომენტარი • {item.weeks.length} კვირა
          </small>
        </div>
      </div>
    </div>
  );
};

export default SingleDiary;
