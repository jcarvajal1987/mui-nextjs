import React from "react"

import InboxIcon from "@mui/icons-material/Inbox"
import { ListItem } from "@mui/material"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
const BasicList = () => {
  const names = ["whale", "squid", "turtle", "coral", "starfish"]
  return (
    <List component="nav">
      {names.map((name) => (
        <ListItem key={name} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}

export default BasicList
