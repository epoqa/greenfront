import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import List from "@mui/material/List";
import NextLink from "next/link";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Toolbar from "@mui/material/Toolbar";
const drawerWidth = 240;
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export const mainListItems = (
  <div>
    <ListItem button>
      <NextLink href="/home">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
      </NextLink>
      <NextLink href="/home">
        <ListItemText primary="მთავარი" />
      </NextLink>
    </ListItem>
    <ListItem button>
      <NextLink href="/login">
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
      </NextLink>
      <NextLink href="/login">
        <ListItemText primary="შესვლა" />
      </NextLink>
    </ListItem>
    <ListItem button>
      <NextLink href="/register">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
      </NextLink>
      <NextLink href="/register">
        <ListItemText primary="რეგისტრაცია" />
      </NextLink>
    </ListItem>
    <ListItem button>
      <NextLink href="/diaries">
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
      </NextLink>
      <NextLink href="/diaries">
        <ListItemText primary="დღიურები" />
      </NextLink>
    </ListItem>
    <ListItem button>
      <NextLink href="/creatediary">
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
      </NextLink>
      <NextLink href="/creatediary">
        <ListItemText primary="დღიურის შექმნა" />
      </NextLink>
    </ListItem>

    <ListItem button>
      <NextLink href="/growers">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
      </NextLink>
      <NextLink href="/growers">
        <ListItemText primary="გროუერები" />
      </NextLink>
    </ListItem>
  </div>
);
const Navigation = () => {
  return (
    <Drawer variant="permanent" open={true}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>{mainListItems}</List>;
      <Divider />
    </Drawer>
  );
};
export default Navigation;
