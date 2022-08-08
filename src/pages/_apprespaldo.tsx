import * as React from "react"

import { CacheProvider, EmotionCache } from "@emotion/react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import Toolbar from "@mui/material/Toolbar"
import { AppProps } from "next/app"
import Head from "next/head"

import createEmotionCache from "../createEmotionCache"
import Navbar from "../layout/Navbar"
import theme from "../theme"

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
          <Navbar />

          <Toolbar />
          <Container>
            <Box component="main" sx={{ my: 2 }}>
              <Component {...pageProps} />
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  )
}
