import React from "react"

import Link from "next/link"

import PostLayout from "@layout/postLayout"

const Dashboard = () => {
  return (
    <PostLayout>
      index dasboard, <Link href="/dashboard/postOne">Ir a postOne</Link>
    </PostLayout>
  )
}

export default Dashboard
