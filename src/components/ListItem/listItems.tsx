import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Link from "@mui/material/Link";
import NextLink from "next/link";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <NextLink href="/me">
        <Link href="#">
          <ListItemText primary="პროფილი" />
        </Link>
      </NextLink>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <NextLink href="/diaries">
        <Link href="#">
          <ListItemText primary="დღიურები" />
        </Link>
      </NextLink>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>

      <NextLink href="/growers">
        <Link href="#">
          <ListItemText primary="გროუერები" />
        </Link>
      </NextLink>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="მონაცემები" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="რამე" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <NextLink href="/signin">
        <ListItemText primary="ავტორიზაცია" />
      </NextLink>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <NextLink href="/register">
        <ListItemText primary="რეგისტრაცია" />
      </NextLink>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <NextLink href="#">
        <ListItemText primary="პაროლის აღდგენა" />
      </NextLink>
    </ListItem>
  </div>
);
