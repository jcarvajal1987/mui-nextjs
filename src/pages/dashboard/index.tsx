import React from "react"

import Link from "next/link"

import PostLayout from "@layout/PostLayout"

const Dashboard = () => {
  return (
    <div>
      index dasboard<Link href="/dashboard/postOne">Ir apost1</Link>
    </div>
  )
}

export default Dashboard

Dashboard.Layout = PostLayout
