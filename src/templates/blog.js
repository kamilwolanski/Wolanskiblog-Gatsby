import React from "react"
import Layout from "../components/templates/Layout"
import Main from "../components/organisms/Main/Main"
import Aside from "../components/organisms/Aside/Aside"
import { Wrapper } from "../components/organisms/Posts/Posts.styles"
import { graphql } from "gatsby"
import Post from "../components/molecules/Post/Post"
import { HelmetDatoCms } from "gatsby-source-datocms"

export const query = graphql`
  query ($slug: String!) {
    datoCmsPost(slug: { eq: $slug }) {
      title
      image {
        gatsbyImageData(width: 900, placeholder: BLURRED, height: 400)
      }
      slug
      seoMetaTags {
        tags
      }
      content {
        value
        blocks {
          __typename
          ... on DatoCmsMyblock {
            id: originalId
            __typename
            image {
              gatsbyImageData(
                imgixParams: { fit: "crop", auto: "format", minH: 300 }
                height: 600
              )
              size
              url
            }
          }
        }
      }
    }
    sitePage {
      context {
        isFull
      }
    }
  }
`

const Blog = props => {
  return (
    <>
      <HelmetDatoCms seo={props.data.datoCmsPost.seoMetaTags} />
      <Layout>
        <Main isFull>
          <Aside />
          <Wrapper>
            <Post
              node={Object.assign({}, props.data.datoCmsPost, {
                date: props.pageContext.date,
              })}
              isFull={props.pageContext.isFull}
            />
          </Wrapper>
        </Main>
      </Layout>
    </>
  )
}

export default Blog
