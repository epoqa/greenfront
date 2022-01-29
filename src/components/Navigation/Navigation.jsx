import * as React from "react";
import  {Drawer , mainListItemsArray}  from "../../reuseableFunctions/MaterialUI";
import NextLink from "next/link";
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
        style={{
          maxHeight: "7vh",
          minHeight: "7vh",
        }}
      >
        <IconButton onClick={() => dispatch(toggleNavigationBar())}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>{mainListItems}</List>
    </Drawer>
  );
};
export default Navigation;


const mainListItems = (
  <div>
    {mainListItemsArray.map((item) => {
      return (
        <ListItem button key={uuidv4()}>
          <NextLink href={item.linkTo}>
            <ListItemIcon>{item.icon}</ListItemIcon>
          </NextLink>
          <NextLink href={item.linkTo}>
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
