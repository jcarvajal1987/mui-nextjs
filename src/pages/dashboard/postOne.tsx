import React, { useState } from "react"

import { Grow } from "@mui/material"
import Link from "next/link"

import PostLayout from "@layout/postLayout"

const PostOne = () => {
  const [check, setCheck] = useState(true)
  //setTimeout(() => {
  //  setCheck(!check)
  //}, 2000)

  return (
    <PostLayout>
      <Grow in={check} style={{ transformOrigin: "0 0 0" }} delay={3000}>
        <div>
          postOne, <Link href="/dashboard">Ir a index</Link>
        </div>
      </Grow>
    </PostLayout>
  )
}

export default PostOne
