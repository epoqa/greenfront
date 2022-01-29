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

let NavigationBar = false;
const Header = () => {
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
          Dashboard
        </Typography>
      </Toolbar>
      <IconButton
        color="inherit"
        sx={{
          marginRight: "20px",
        }}
      >
        <Badge badgeContent={"login"} color="secondary">
          <LoginIcon />
        </Badge>
      </IconButton>
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
