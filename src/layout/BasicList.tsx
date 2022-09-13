import React, { useState } from "react"

import InboxIcon from "@mui/icons-material/Inbox"
import { Grow, ListItem } from "@mui/material"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
const BasicList = () => {
  const names = ["whale", "squid", "turtle", "coral", "starfish"]
  const [check, setCheck] = useState(false)
  setTimeout(() => {
    setCheck(true)
  }, 2000)
  return (
    <Grow
      in={check}
      style={{ transformOrigin: "0 0 0" }}
      {...(check ? { timeout: 1000 } : {})}
    >
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
    </Grow>
  )
}

export default React.memo(BasicList)
