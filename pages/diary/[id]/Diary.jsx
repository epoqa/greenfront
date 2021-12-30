import React, { useEffect, useRef, useState } from "react";
//NEXT IMPORTS
import NextLink from "next/link";

//LIBRARY IMPORTS
import axios from "axios";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

import { NotificationManager } from "../../../src/components/Notifications/Notifications";

//MATERIAL UI IMPORTS
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Grower() {
  let [diary, setDiary] = useState([]);

  const router = useRouter();
  useEffect(async () => {
    router.query.id &&
      axios
        .get(`https://greenbackk.herokuapp.com/diary/id/${router.query.id}`)
        .then((res) => {
          setDiary(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [router]);

  const [commentState, setCommentRef] = useState(false);

  const commentRef = useRef();

  const sendRegisterInfoToBackend = (event) => {
    event.preventDefault();

    const commentRefValue = commentRef && commentRef.current.value;

    if (commentRefValue) {
      axios
        .put(
          `https://greenbackk.herokuapp.com/diary/comment/${router.query.id}`,
          {
            comment: commentRefValue,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          console.log(response);
          NotificationManager.success(response.statusText, "", 1500);
        })
        .catch((error) => {
          console.log(error);
          NotificationManager.error(error.response.data.error, "", 1500);
        });
    }
  };

  return (
    <>
      <div
        style={{ margin: "15px", padding: "20px", border: "1px solid black" }}
      >
        <h4>დღიურის სახელი: {diary.diaryName}</h4>
        <h4>ტიპი: {diary.type}</h4>
        <h4>აღწერა: {diary.description} </h4>
        <h4>შემქმნელი: {diary.owner}</h4>
        <h4>თარიღი: {diary.createdAt}</h4>
        <h5>დღიურის აიდი: {diary._id}</h5>
      </div>
      <div
        style={{ margin: "15px", padding: "20px", border: "1px solid black" }}
      >
        <h4>კომენტარები</h4>
        <hr></hr>
        <div>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  inputRef={commentRef}
                  name="comment"
                  required
                  fullWidth
                  id="comment"
                  label="კომენტარი"
                  autoFocus
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#3bbd2f" }}
              onClick={(e) => sendRegisterInfoToBackend(e)}
            >
              დაწერა
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item></Grid>
            </Grid>
          </Box>
        </div>
        {diary.comments
          ? diary.comments.map((comment) => (
              <div
                key={uuidv4()}
                style={{
                  margin: "5px",
                  padding: "8px",
                  border: "1px solid black",
                }}
              >
                <h3>{comment.owner}</h3>
                <hr />
                <h4>{comment.comment}</h4>
                <h5>date: {comment.createdAt}</h5>
              </div>
            ))
          : null}
      </div>
    </>
  );
}
