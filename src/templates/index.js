import * as React from "react"
import { ThemeProvider } from "styled-components"
import Layout from "../components/templates/Layout"
import { GlobalStyles } from "../styles/globalStyles"
import { theme } from "../styles/theme"
import HeroSection from "../components/molecules/HeroSection/HeroSection"
import Aside from "../components/organisms/Aside/Aside"
import Main from "../components/organisms/Main/Main"
import Posts from "../components/organisms/Posts/Posts"
import { graphql } from "gatsby"
import Pagination from "../components/molecules/Pagination/Pagination"
import { HelmetDatoCms } from "gatsby-source-datocms"

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    datoCmsSite {
      globalSeo {
        siteName
        fallbackSeo {
          title
          description
        }
      }
      faviconMetaTags {
        tags
      }
    }
    allDatoCmsPost(skip: $skip, limit: $limit, sort: {fields: [meta___createdAt]order: DESC}) {
      edges {
        node {
          id
          title
          image {
            gatsbyImageData(width: 1100, placeholder: BLURRED, height: 400)
          }
          slug
          content {
            value
            blocks {
              __typename
              ... on DatoCmsMyblock {
                id: originalId
                __typename
                image {
                  size
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`
const IndexPage = props => {
  const { siteName } = props.data.datoCmsSite.globalSeo
  return (
    <>
      <HelmetDatoCms favicon={props.data.datoCmsSite.faviconMetaTags}>
        <title>{siteName}</title>
        <meta
          name="description"
          content={props.data.datoCmsSite.globalSeo.fallbackSeo.description}
        />
      </HelmetDatoCms>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <HeroSection />
          <Main>
            <Aside />
            {props.pageContext.numPages > 1 && (
              <Pagination
                currentPage={props.pageContext.currentPage}
                numPages={props.pageContext.numPages}
              />
            )}
            <Posts
              posts={props.data.allDatoCmsPost.edges.map((x, index) => {
                return Object.assign({}, x.node, {
                  date: props.pageContext.date[index],
                })
              })}
            />
          </Main>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default IndexPage
