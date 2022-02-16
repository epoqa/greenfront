import React, { useRef, useState } from "react";

// MATERIAL UI
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//NEXT IMPORTS
import NextLink from "next/link";
import { useRouter } from "next/router";

//OTHER IMPORTS
import { validateEmail } from "../../src/reuseableFunctions/validateEmail";
import { NotificationManager } from "../../src/components/Notifications/Notifications";

//LIBRARY IMPORTS
import axios from "axios";
import { backBaseURL } from "src/consts/consts";

const theme = createTheme();

export default function SignIn() {
  const router = useRouter();

  const [emailState, setEmailRef] = useState(false);
  const [passwordState, setPasswordRef] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const sendSigninInfoToBackend = (e) => {
    e.preventDefault();

    //DESTRUCTURING REF VALUES
    const passwordRefValue =
      passwordRef && null !== passwordRef.current && passwordRef.current.value;
    const emailRefValue =
      emailRef && null !== emailRef.current && emailRef.current.value;

    //  EMAIL CHECK WITH REGEX
    const EmailRegexCheck = emailRefValue && validateEmail(emailRefValue);

    setEmailRef(!emailRefValue || !EmailRegexCheck);
    setPasswordRef(!passwordRefValue || passwordRefValue.length < 8);

    if (
      passwordRefValue &&
      emailRefValue &&
      EmailRegexCheck &&
      passwordRefValue.length > 8
    ) {
      axios
        .post(`${backBaseURL}/users/login`, {
          email: emailRefValue,
          password: passwordRefValue,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("refreshToken", response.data.refreshToken);
          NotificationManager.success(response.statusText);
          router.push("/home");
        })
        .catch((error) => {
          console.log(error.response.data.error);
          NotificationManager.error(error.response.data.error);
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
          <Avatar sx={{ m: 1, bgcolor: "#60ff52" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            შესვლა
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="ელ.ფოსტის მისამართი"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={emailRef}
              error={Boolean(emailState)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="პაროლი"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={passwordRef}
              error={Boolean(passwordState)}
              helperText={
                Boolean(passwordState)
                  ? "შენი პაროლი 8 ასოზე ნაკლები ვერ იქნებოდა"
                  : ""
              }
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#3bbd2f" }}
              onClick={(e) => sendSigninInfoToBackend(e)}
            >
              შესვლა
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  დაგავიწყდა პაროლი ?
                </Link>
              </Grid>
              <Grid item>
                <NextLink href="/register">
                  <Link href="#" variant="body2">
                    {"დარეგისტრირდი"}
                  </Link>
                </NextLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
