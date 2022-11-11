import React, { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import {
  Nightlight as MoonIcon,
  LightMode as SunIcon,
  ColorLens as ColorIcon,
  Settings as SettingIcon,
} from "@mui/icons-material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

// type Anchor = "top" | "left" | "bottom" | "right";

export default function Drawer() {
  const [state, setState] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setState(newOpen);
  };

  const list = (anchor: string) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    ></Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Click</Button>
      <SwipeableDrawer
        anchor="right"
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list("right")}
      </SwipeableDrawer>
    </div>
  );
}
