import React from "react"
import { Link } from "gatsby"
import { RecentPostWrapper } from "./RecentPost.styles"
import { BiTimeFive } from "react-icons/bi"
import { polishDate } from "../../../../polishDate"

const RecentPost = ({ node }) => {
  const date = new Date(node.meta.createdAt)
  const { day, month, year } = polishDate(date)
  return (
    <Link to={`/${node.slug}`} activeClassName="activePost">
      <RecentPostWrapper>
        <p className="recentPost-title">{node.title}</p>
        <p className="recentPost-data">
          <span>
            <BiTimeFive />
          </span>
          {`${day} ${month} ${year}`}
        </p>
      </RecentPostWrapper>
    </Link>
  )
}

export default RecentPost
