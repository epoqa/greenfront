import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";

import NextLink from "next/link";

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
