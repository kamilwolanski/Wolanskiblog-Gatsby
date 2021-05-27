import React from "react"
import { HelmetDatoCms } from "gatsby-source-datocms"
import { graphql, useStaticQuery } from "gatsby"

const Head = ({ title, description }) => {
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
      <meta
        name="description"
        content={description}
      />
    </HelmetDatoCms>
  )
}

export default Head
