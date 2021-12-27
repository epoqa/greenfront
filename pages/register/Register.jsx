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

const SignUp = () => {
  const router = useRouter();
  const [usernameState, setUsernameRef] = useState(false);
  const [emailState, setEmailRef] = useState(false);
  const [passwordState, setPasswordRef] = useState(false);

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const sendRegisterInfoToBackend = (event) => {
    event.preventDefault();

    const passwordRefValue = passwordRef && passwordRef.current.value;
    const usernameRefValue = usernameRef && usernameRef.current.value;
    const emailRefValue = emailRef && emailRef.current.value;

    //  EMAIL CHECK WITH REGEX
    const EmailRegexCheck = validateEmail(emailRefValue);

    setUsernameRef(!usernameRefValue);
    setEmailRef(!emailRefValue || !EmailRegexCheck);
    setPasswordRef(!passwordRefValue || passwordRefValue.length < 8);
    if (
      passwordRefValue &&
      emailRefValue &&
      usernameRefValue &&
      EmailRegexCheck &&
      passwordRefValue.length > 8
    ) {
      axios
        .post("http://localhost:3333/users/register", {
          username: usernameRefValue,
          email: emailRefValue,
          password: passwordRefValue,
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
          <Avatar sx={{ m: 1, bgcolor: "#60ff52" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            შექმენი ანგარიში
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  inputRef={usernameRef}
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="მომხმარებელი"
                  autoFocus
                  error={Boolean(usernameState)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  inputRef={emailRef}
                  required
                  fullWidth
                  id="email"
                  label="ელ.ფოსტის მისამართი"
                  name="email"
                  autoComplete="email"
                  error={Boolean(emailState)}
                  helperText={
                    Boolean(emailState) ? "არასწორი ფოსტის მისმართი" : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={passwordRef}
                  required
                  fullWidth
                  name="password"
                  label="პაროლი"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={Boolean(passwordState)}
                  helperText={Boolean(passwordState) ? "სუსტი პაროლი" : ""}
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
              დარეგისტრირდი
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <NextLink href="/signin">
                  <Link href="#" variant="body2">
                    {"უკვე გაქვს ანგარიში? შესვლა"}
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

export default SignUp;
