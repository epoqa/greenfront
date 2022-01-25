import React, { useState, useEffect } from "react";

//NEXT IMPORTS
import NextLink from "next/link";
import { v4 as uuidv4 } from "uuid";

//LIBRARY IMPORTS
import axios from "axios";

export default function Growers() {
  let [diary, setDiaries] = useState([]);

  useEffect(() => {
    axios
      .get("https://greenbackk.herokuapp.com/diary/all")
      .then((res) => {
        setDiaries(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {diary.map((singleDiary) => (
        <NextLink
          href={{ pathname: `/diary/${singleDiary.id}` }}
          key={uuidv4()}
        >
          <div
            style={{
              margin: "75px",
              padding: "15px",
              border: "1px solid black",
              cursor: "pointer",
            }}
          >
            <h4>დღიურის სახელი: {singleDiary.diaryName}</h4>
            <h4>ტიპი: {singleDiary.type}</h4>
            <h4>აღწერა: {singleDiary.description} </h4>
            <h4>შემქმნელი: {singleDiary.owner}</h4>
            <h4>თარიღი: {singleDiary.createdAt}</h4>
            <h5>დღიურის აიდი: {singleDiary.id}</h5>
          </div>
        </NextLink>
      ))}
    </>
  );
}
