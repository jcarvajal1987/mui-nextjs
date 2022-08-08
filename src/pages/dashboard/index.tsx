import React from "react"

import Link from "next/link"

import PostLayout from "../../layout/postLayout"

const Dashboard = () => {
  return (
    <div>
      index dasboard, <Link href="/dashboard/postOne">Ir a postOne</Link>
    </div>
  )
}

export default Dashboard

Dashboard.Layout = PostLayout
