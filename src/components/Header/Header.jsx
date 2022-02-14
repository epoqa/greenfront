/* eslint-disable @next/next/no-img-element */
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { getNavigationBar } from "../../redux/selectors/selector";
import { toggleNavigationBar } from "../../redux/actions/action";
import LoginIcon from "@mui/icons-material/Login";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { NotificationManager } from "../Notifications/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector, useDispatch } from "react-redux";

import { loggedInUser } from "../../redux/actions/action";
import userByToken from "../../reuseableFunctions/userByToken";
import Avatar from "@mui/material/Avatar";

import styles from "./Header.module.css";

let NavigationBar = false;

const Header = () => {
  const router = useRouter();
  userByToken();
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  NavigationBar = useSelector((state) => getNavigationBar(state));

  return (
    <AppBar
      open={false}
      //LEAVE AS IT IS FOR NOW
      // className={styles.appBar}
      sx={{
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
      {isLogged === false || undefined ? (
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
            <Avatar
              className={styles.pointer}
              onClick={(e) => router.push(`/grower/${isLogged}`)}
              src="https://sportshub.cbsistatic.com/i/2021/03/18/27c1f588-bb39-4226-945d-e6ffb885b52c/prison-mike-1216447.jpg"
              alt="avatar"
              sx={{ width: 34, height: 34 }}
            />
          </div>
          <div className="col m-1">
            <LogoutIcon
              className={styles.pointer}
              onClick={(e) => {
                window.localStorage.clear();
                dispatch(loggedInUser(false));
                router.push("/");
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
