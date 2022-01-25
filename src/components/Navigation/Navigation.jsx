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
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <NextLink href="/home">
        <ListItemText primary="მთავარი" />
      </NextLink>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <NextLink href="/signin">
        <ListItemText primary="შესვლა" />
      </NextLink>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <NextLink href="/register">
        <ListItemText primary="რეგისტრაცია" />
      </NextLink>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <NextLink href="/diaries">
        <ListItemText primary="დღიურები" />
      </NextLink>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <NextLink href="/creatediary">
        <ListItemText primary="დღიურის შექმნა" />
      </NextLink>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <NextLink href="/diary/61c8701972830d1143283730">
        <ListItemText primary="ცალკეული დღიური" />
      </NextLink>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <NextLink href="/growers">
        <ListItemText primary="გროუერები" />
      </NextLink>
    </ListItem>
  </div>
);
