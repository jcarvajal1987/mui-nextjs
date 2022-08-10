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

      {children}
    </Box>
  )
}

export default PostLayout
