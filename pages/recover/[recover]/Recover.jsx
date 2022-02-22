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
import { NotificationManager } from "../../../src/components/Notifications/Notifications";

//LIBRARY IMPORTS
import axios from "axios";
import { backBaseURL } from "src/consts/consts";

const theme = createTheme();

export default function Recover() {
  const [passwordState, setPasswordState] = useState("");

  const router = useRouter();
  const passwordRef = useRef();

  const recover = async (e) => {

    e.preventDefault();
    const passwordRefValue =
    passwordRef && null !== passwordRef.current && passwordRef.current.value;


    if(passwordRefValue.length < 8){
      NotificationManager.error("პაროლი უნდა შეიცავდეს 8 სიმბოლოს");
      return;
    }
    axios
      .post(`${backBaseURL}/user/recover/${router.query.recover}`, {
        password: passwordRefValue,
      })
      .then((res) => {
        if (res.status === 200) {
          NotificationManager.success(res.data.message);
          router.push("/login");
        } else {
          NotificationManager.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err).then((res) => {
          NotificationManager.error(res.data.message);
        });
      });
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
            ახალი პაროლი
          </Typography>

          <Box component="form" noValidate sx={{ mt: 1 }}>
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
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#3bbd2f" }}
              onClick={(e) => recover(e)}
            >
              დაყენება
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/login" variant="body2">
                  შესვლა
                </Link>
              </Grid>
              <Grid item>
                <NextLink href="/register">
                  <Link href="#" variant="body2">
                    {"რეგისტრაცია"}
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
