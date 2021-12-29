import React, { useState, useEffect } from "react";

//NEXT IMPORTS
import NextLink from "next/link";
import { useRouter } from "next/router";

//LIBRARY IMPORTS
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

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
      {diary.map((diary) => (
        <NextLink href={{ pathname: `/diary/${diary._id}` }} key={uuidv4()}>
          <div
            style={{
              margin: "75px",
              padding: "15px",
              border: "1px solid black",
              cursor: "pointer",
            }}
          >
            <h4>დღიურის სახელი: {diary.diaryName}</h4>
            <h4>ტიპი: {diary.type}</h4>
            <h4>აღწერა: {diary.description} </h4>
            <h4>შემქმნელი: {diary.owner}</h4>
            <h4>თარიღი: {diary.date}</h4>
            <h5>დღიურის აიდი: {diary._id}</h5>
          </div>
        </NextLink>
      ))}
    </>
  );
}
