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

export default function Recover() {
  const router = useRouter();

  const emailRef = useRef();

  const recover = async (e) => {
    e.preventDefault();
    const emailRefValue =
      emailRef && null !== emailRef.current && emailRef.current.value;


    axios
      .post(`${backBaseURL}/user/recover`, {
        email: emailRefValue,
      })
      .then((res) => {
        if (res.status === 200) {
          NotificationManager.success(res.data.message);
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
            პაროლის აღდგენა
          </Typography>

          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="ელ.ფოსტა"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={emailRef}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#3bbd2f" }}
              onClick={(e) => recover(e)}
            >
              აღდგენა
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
