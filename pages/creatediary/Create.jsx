import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems } from "../../src/components/Navigation/Navigation";
import { AppBar, Drawer } from "../../src/reuseableFunctions/homeFunctions";

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={13} lg={13}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div>
                    <h5 className="text-center" >შექმენი ახალი დღიური</h5>
                    <hr />
                    <br />
                    <form>
                      <div className="form-group">
                        <h6 htmlFor="diaryName">დღიურის სახელი</h6>
                        <input
                          type="text"
                          className="form-control"
                          id="diaryName"
                          aria-describedby="diaryName"
                          maxLength="50"
                          required
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <h6 htmlFor="diaryDesc">დღიურის აღწერა</h6>
                        <textarea
                          rows="5"
                          cols="60"
                          type="text"
                          className="form-control"
                          id="diaryName"
                          aria-describedby="diaryName"
                          maxLength="700"
                          required
                        />
                      </div>
                      <br />
                      <h6 htmlFor="inputState">ჯიში</h6>
                      <select id="inputState" className="form-control">
                        <option selected >სხვა...</option>
                        <option>ჯიში 1</option>
                        <option>ჯიში 2</option>
                        <option>ჯიში 3</option>
                      </select>
                      <br />
                      <h6 htmlFor="inputState">ოთახის ტიპი</h6>
                      <select id="inputState" className="form-control">
                        <option selected >სხვა...</option>
                        <option>ოთახი</option>
                        <option>გარეთ</option>
                        <option>სათბური</option>
                      </select>
                      <br />
                      <button type="submit" className="btn btn-success">
                        შენახვა
                      </button>
                    </form>
                  </div>
                  <br />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
