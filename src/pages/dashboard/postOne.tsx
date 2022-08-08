import React from "react"

import Link from "next/link"

import PostLayout from "@layout/PostLayout"

const postOne = () => {
  return (
    <div>
      postOne<Link href="/dashboard">Ir a index</Link>
    </div>
  )
}

export default postOne

postOne.Layout = PostLayout
