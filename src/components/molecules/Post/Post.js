import React from "react"
import { Wrapper, ContentWrapper, ButtonWrapper } from "./Post.styles"
import Button from "../../atoms/Button/Button"
import { Link } from "gatsby"
import { StructuredText, Image } from "react-datocms"
import { render, renderRule } from "datocms-structured-text-to-html-string"
import { isHeading } from "datocms-structured-text-utils"
import Interweave from "interweave"
import { GatsbyImage } from "gatsby-plugin-image"
import Comments from "../Comments"

function truncate(str, n) {
  return str.length > n ? `${str.substr(0, n - 1)}...` : str
}

const Post = ({ node, isFull }) => {
  const options = {
    renderBlock({}) {
      return null
    },
    renderText: text => text.replace(/Hello/, "Howdy"),
    customRules: [
      renderRule(
        isHeading,
        ({ adapter: { renderNode }, node, children, key }) => {
          return renderNode(`h${node.level}`, { key }, children)
        }
      ),
    ],
  }

  return (
    <>
      <Wrapper>
        <GatsbyImage image={node.image.gatsbyImageData} alt="sdfwerwefsd" />
        <div className="post-info">
          <div className="post-info__published-date">
            <span className="post-info__day">{node.date.day} </span>
            <span className="post-info__month">{node.date.month}</span>
            <span className="post-info__year">{node.date.year}</span>
          </div>
          {!isFull ? (
            <Link to={node.slug}>
              <h2 className="post-info__title-notFull">{node.title}</h2>
            </Link>
          ) : (
            <h2 className="post-info__title">{node.title}</h2>
          )}
        </div>
        <ContentWrapper>
          {!isFull && (
            <Interweave
              content={truncate(render(node.content, options), 320)}
            />
          )}
          <StructuredText
            data={isFull ? node.content : null}
            renderBlock={({ record }) => {
              if (record.__typename === "DatoCmsMyblock" && isFull) {
                return (
                  <Image
                    className="blogImg"
                    data={record.image.gatsbyImageData.images.fallback}
                  />
                )
              } else {
                return null
              }
            }}
          />
        </ContentWrapper>
        <ButtonWrapper>
          {!isFull && (
            <Link to={`/${node.slug}`}>
              <Button>
                <span>Czytaj dalej</span>
              </Button>
            </Link>
          )}
        </ButtonWrapper>
      </Wrapper>
      {isFull && <Comments />}
    </>
  )
}

export default Post
