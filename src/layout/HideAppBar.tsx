import * as React from "react"

import AppBar from "@mui/material/AppBar"
import Slide from "@mui/material/Slide"
import useScrollTrigger from "@mui/material/useScrollTrigger"

import Navbar from "@layout/Navbar"

export default function HideAppBar(props) {
  const { children, window, target, referencia, inputEl } = props

  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar position="static" component="nav">
        <Navbar></Navbar>
      </AppBar>
    </Slide>
  )
}
