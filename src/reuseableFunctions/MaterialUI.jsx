import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import InfoIcon from "@mui/icons-material/Info";
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
  { text: "მთავარი", icon: <HomeIcon />, linkTo: "/home" },
  // { text: "შესვლა", icon: <DashboardIcon />, linkTo: "/login" },
  // { text: "რეგისტრაცია", icon: <DashboardIcon />, linkTo: "/register" },
  { text: "დღიურები", icon: <MenuBookIcon />, linkTo: "/diaries" },
  { text: "დღიურის შექმნა", icon: <NoteAddIcon />, linkTo: "/creatediary" },
  { text: "გროუერები", icon: <PeopleIcon />, linkTo: "/growers" },
  { text: "ჩვენ შესახებ", icon: <InfoIcon />, linkTo: "/about" },
];

export { Drawer, mainListItemsArray };
