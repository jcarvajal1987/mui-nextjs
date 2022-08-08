import React from "react"

import Box from "@mui/material/Box"

import BasicList from "./BasicList"

const PostLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }} flex="1">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <BasicList />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 1,
          m: 1,

          borderRadius: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default PostLayout
