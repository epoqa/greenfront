import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import axios from "axios";

//MATERIAL UI IMPORTS
import Typography from "@material-ui/core/Typography";

import {
  Box,
  Grid,
  Link,
  TextField,
  CssBaseline,
  Avatar,
  Button,
} from "@mui/material";

import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//NEXT IMPORTS
import NextLink from "next/link";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";

//OTHER IMPORTS
import { NotificationManager } from "../../src/components/Notifications/Notifications";
import useValidateToken from "../../src/reuseableFunctions/validateToken";

//COMPONENTS
import Loading from "../../src/components/Loading/Loading";
import { truncate } from "fs";

const theme = createTheme();

const CreateDiary = () => {
  //STATE
  const [loadingState, setLoadingState] = useState<boolean>(true);
  useValidateToken(setLoadingState);

  const router = useRouter();

  const nameRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);

  const sendRegisterInfoToBackend = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    const nameRefValue =
      nameRef && null !== nameRef.current && nameRef.current.value;
    const typeRefValue =
      typeRef && null !== typeRef.current && typeRef.current.value;
    const descRefValue =
      descRef && null !== descRef.current && descRef.current.value;

    if (nameRefValue && typeRefValue && descRefValue) {
      axios
        .post(
          "https://greenbackk.herokuapp.com/diary/create",
          {
            diaryName: nameRefValue,
            type: typeRefValue,
            description: descRefValue,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          console.log(response);
          NotificationManager.success(response.statusText);
          router.push("/diaries");
        })
        .catch((error) => {
          console.log(error.response.data.error);
          NotificationManager.error(error.response.data.error);
        });
    }
  };

  return loadingState ? (
    <Loading />
  ) : (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: "#60ff52" }}></Avatar>
          <Typography component="h1" variant="h5">
            შექმენი დღიური
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  inputRef={nameRef}
                  name="diaryName"
                  required
                  fullWidth
                  id="diaryName"
                  label="დღიურის სახელი"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  inputRef={typeRef}
                  required
                  fullWidth
                  id="type"
                  label="ჯიში"
                  name="type"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={descRef}
                  required
                  fullWidth
                  name="description"
                  label="აღწერა"
                  type="text"
                  id="description"
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
              შექმენი
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <NextLink href="/diaries">
                  <Link href="#" variant="body2">
                    {"დღიურები"}
                  </Link>
                </NextLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

// //TSATICLY GENERATE

// type Post = {
//   author: string;
//   content: string;
// };
// export const getStaticProps = async () => {
//   // const res = await fetch("https://.../posts");
//   const posts: Post[] = [{ author: "luka", content: "nicee" }];

//   return {
//     props: {
//       posts,
//     },
//   };
// };
export default CreateDiary;
