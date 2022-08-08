import React from "react"

const PostLayout = ({ children }) => {
  return (
    <>
      <div>PostLayout</div>
      <ul>
        <li>tab1</li>
        <li>tab2</li>
      </ul>
      {children}
    </>
  )
}

export default PostLayout
