import * as React from "react"

import { CacheProvider, EmotionCache } from "@emotion/react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Slide from "@mui/material/Slide"
import { ThemeProvider } from "@mui/material/styles"
import Toolbar from "@mui/material/Toolbar"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import { AppProps } from "next/app"

import createEmotionCache from "../createEmotionCache"
import Navbar from "../layout/Navbar"
import theme from "../theme"

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
  window?: () => Window
  children: React.ReactElement
}

function HideOnScroll(props: MyAppProps) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const Layout = Component.Layout || EmptyLayout

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar component="nav">
            <Navbar></Navbar>
          </AppBar>
        </HideOnScroll>
        <Box height="100vh" display="flex" flexDirection="column">
          <Toolbar sx={{ display: "flex" }} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  )
}

const EmptyLayout = ({ children }) => <>{children}</>
