import * as React from "react";
import NextLink from "next/link";

import { styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import MuiDrawer from "@mui/material/Drawer";
import {
  Toolbar,
  Divider,
  List,
  IconButton,
  ListItemText,
  ListItemIcon,
  ListItem,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { toggleNavigationBar } from "../../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { getNavigationBar } from "../../redux/selectors/selector";
import { v4 as uuidv4 } from "uuid";
const Navigation = () => {
  const dispatch = useDispatch();
  const NavigationBar = useSelector((state) => getNavigationBar(state));

  return (
    <Drawer variant="permanent" open={NavigationBar}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={() => dispatch(toggleNavigationBar())}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
    </Drawer>
  );
};
export default Navigation;

//MATERIAL UI STUFF & WILL TAKE THEM TO SEPERATE FILE LATER

const drawerWidth = 220;
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

const mainListItemsArray = [
  { text: "მთავარი", icon: <DashboardIcon /> },
  { text: "შესვლა", icon: <DashboardIcon /> },
  { text: "რეგისტრაცია", icon: <DashboardIcon /> },
  { text: "დღიურები", icon: <DashboardIcon /> },
  { text: "დღიურის შექმნა", icon: <DashboardIcon /> },
  { text: "გროუერები", icon: <DashboardIcon /> },
];
const mainListItems = (
  <div>
    {mainListItemsArray.map((item) => {
      return (
        <ListItem button key={uuidv4()}>
          <NextLink href="/home">
            <ListItemIcon>{item.icon}</ListItemIcon>
          </NextLink>
          <NextLink href="/home">
            <ListItemText
              disableTypography
              primary={
                <Typography
                  type="p"
                  style={{ color: "black", fontSize: "90%" }}
                >
                  {item.text}
                </Typography>
              }
            />
          </NextLink>
        </ListItem>
      );
    })}
  </div>
);
