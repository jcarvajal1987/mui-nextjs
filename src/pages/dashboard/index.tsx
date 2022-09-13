import React from "react"

import { GetServerSideProps } from "next"
import Link from "next/link"

import PostLayout from "@layout/postLayout"

export default function Dashboard(props) {
  const numberItems = 100
  const time = 0.5
  const stagger = time / numberItems

  return (
    <>
      <PostLayout>
        index dasboard ssr,{" "}
        <Link href="/dashboard/postOne">Ir a postOne soy</Link>
      </PostLayout>
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  await waitload(2)
  return {
    props: { dummy: "dummy" }, // will be passed to the page component as props
  }
}

function waitload(sec) {
  return new Promise((resolve) => setTimeout(resolve, sec * 3000))
}
