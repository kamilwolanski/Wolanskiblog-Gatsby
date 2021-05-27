import React from "react"
import { HelmetDatoCms } from "gatsby-source-datocms"
import { graphql, useStaticQuery } from "gatsby"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsSite {
        faviconMetaTags {
          tags
        }
        globalSeo {
          siteName
        }
      }
    }
  `)

  return (
    <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags}>
      <title>{`${title} | ${data.datoCmsSite.globalSeo.siteName}`}</title>
    </HelmetDatoCms>
  )
}

export default Head
