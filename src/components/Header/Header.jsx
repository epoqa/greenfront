/* eslint-disable @next/next/no-img-element */
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { useDispatch, useSelector } from "react-redux";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { getNavigationBar } from "../../redux/selectors/selector";
import { toggleNavigationBar } from "../../redux/actions/action";
import LoginIcon from "@mui/icons-material/Login";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { NotificationManager } from "../Notifications/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";

let NavigationBar = false;
const Header = () => {
  let [user, setUser] = useState("notLoggedIn");

  const router = useRouter();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const refreshToken = window.localStorage.getItem("refreshToken");
    if (!token) {
      return;
      console.log("no token");
    }

    token &&
      axios
        .get("https://greenbackk.herokuapp.com/authToken", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          console.log(response.data);
          setUser(response.data);
        });
  }, []);

  NavigationBar = useSelector((state) => getNavigationBar(state));
  const dispatch = useDispatch();
  return (
    <AppBar
      position="absolute"
      open={false}
      sx={{}}
      style={{
        height: "7vh",
        backgroundColor: "green",
        dispay: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Toolbar
        sx={{
          pr: "24px",
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => dispatch(toggleNavigationBar())}
          sx={{
            marginRight: "36px",
            ...(NavigationBar && { display: "none" }),
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
          მწვანე დღიური
        </Typography>
      </Toolbar>
      {user === "notLoggedIn" ? (
        <IconButton
          onClick={() => router.push("/login")} 
          color="inherit"
          sx={{
            marginRight: "20px",
          }}
        >
          <Badge badgeContent={"login"} color="secondary">
            <LoginIcon />
          </Badge>
        </IconButton>
      ) : (
        <div className="row">
          <div className="col">
            {" "}
            <img
              style={{ cursor: "pointer" }}
              onClick={(e) => router.push(`/grower/${user.username}`)}
              className="rounded-circle shadow-1-strong me-3 col"
              src="https://avatars.githubusercontent.com/u/75354679?v=4"
              alt="avatar"
              width="40"
              height="40"
            />
          </div>
          <div className="col m-1">
            <LogoutIcon
            style={{ cursor: "pointer" }}
              onClick={(e) => {
                window.localStorage.clear();
                router.push("/");
                setUser("notLoggedIn");
              }}
            />
          </div>
        </div>
      )}
    </AppBar>
  );
};

export default Header;

//MATERIAL UI STUFF & WILL TAKE THEM TO SEPERATE FILE LATER

const drawerWidth = 220;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  //consdition here
  ...(NavigationBar && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
