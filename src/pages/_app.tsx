import * as React from "react"

import { CacheProvider, EmotionCache } from "@emotion/react"
import { Box } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import { AppProps } from "next/app"

import HideAppBar from "@layout/HideAppBar"

import createEmotionCache from "../createEmotionCache"
import theme from "../theme"

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
  window?: () => Window
  children: React.ReactElement
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const [scrollTarget, setScrollTarget] = React.useState(undefined)
  const inputEl = React.useRef(null)
  React.useEffect(() => {
    setScrollTarget(inputEl.current)
  }, [inputEl])

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div
          style={{
            display: "flex",
            overflow: "hidden",
            height: "100vh",
            flexDirection: "column",
          }}
        >
          {/*<HideAppBar
            display="flex"
            referencia={inputEl}
            window={scrollTarget}
          />*/}
          <HideAppBar window={scrollTarget} />
          <Box
            ref={inputEl}
            style={{
              flex: "auto",
              overflow: "auto",
              display: "grid",
            }}
          >
            <Component {...pageProps} />
          </Box>
        </div>
      </ThemeProvider>
    </CacheProvider>
  )
}
