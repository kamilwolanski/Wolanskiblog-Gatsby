import React from "react"
import Post from "../../molecules/Post/Post"
import { Wrapper } from "./Posts.styles"

const Posts = ({ posts }) => {
  return (
    <Wrapper >
      {posts.map(node => (
        <Post key={node.id} node={node} />
      ))}
    </Wrapper>
  )
}

export default Posts
