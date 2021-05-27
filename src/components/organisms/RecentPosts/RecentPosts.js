import React from "react"
// import { useFirstPosts } from '../../../hooks/useFirstPosts';
import { useFirstPosts } from "../../../hooks/useFirstPosts"
import RecentPost from '../../molecules/RecentPost/RecentPost'
import { RecentPostsWrapper } from "./RecentPosts.styles"

const RecentPosts = () => {
  const { posts } = useFirstPosts()
  return (
    <RecentPostsWrapper>
      <h3 style={{ textAlign: "center" }}>Ostatnie wpisy</h3>
      <ul>
          {posts.map((node, i) => (
              <RecentPost key={i}{...node}/>
          ))}
      </ul>
    </RecentPostsWrapper>
  )
}

export default RecentPosts
