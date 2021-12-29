import React, { useEffect, useRef, useState } from "react";

//MATERIAL UI IMPORTS
import Typography from "@material-ui/core/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//NEXT IMPORTS
import NextLink from "next/link";
import { useRouter } from "next/router";

//LIBRARY IMPORTS
import axios from "axios";

//OTHER IMPORTS
import { validateEmail } from "../../src/reuseableFunctions/validateEmail";
import { NotificationManager } from "../../src/components/Notifications/Notifications";

const theme = createTheme();

const CreateDiary = () => {
  const router = useRouter();
  const [usernameState, setUsernameRef] = useState(false);
  const [emailState, setEmailRef] = useState(false);
  const [passwordState, setPasswordRef] = useState(false);

  const nameRef = useRef();
  const typeRef = useRef();
  const descRef = useRef();

  const sendRegisterInfoToBackend = (event) => {
    event.preventDefault();

    const nameRefValue = nameRef && nameRef.current.value;
    const typeRefValue = typeRef && typeRef.current.value;
    const descRefValue = descRef && descRef.current.value;

    
    if (
      nameRefValue &&
      typeRefValue &&
      descRefValue
    ) {
      axios
        .post("http://localhost:3333/diary/create", {
          diaryName: nameRefValue,
          type: typeRefValue,
          desc: descRefValue,
        })
        .then((response) => {
          console.log(response);
          NotificationManager.success(response.statusText, "", 1500);
          router.push("signin");
        })
        .catch((error) => {
          console.log(error.response.data.error);
          NotificationManager.error(error.response.data.error, "", 1500);
        });
    }
  };

  return (
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
          <Avatar sx={{ m: 2, bgcolor: "#60ff52" }}>
          </Avatar>
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
                rows="4"
                cols="50"
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
                <NextLink href="#">
                  <Link href="#" variant="body2">
                    {"ჩემი დღიურები"}
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

export default CreateDiary;
