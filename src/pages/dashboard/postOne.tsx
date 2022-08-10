import React from "react"

import Link from "next/link"

import PostLayout from "@layout/postLayout"

const postOne = () => {
  return (
    <PostLayout>
      postOne, <Link href="/dashboard">Ir a index</Link>
    </PostLayout>
  )
}

export default postOne
