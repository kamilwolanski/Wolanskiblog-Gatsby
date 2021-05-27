import React from "react"
import { Wrapper, HeroContainer } from "./HeroSection.styles"
import { getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { convertToBgImage } from "gbimage-bridge"

const HeroSection = props => {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(relativePath: { eq: "zzz.jpg" }) {
          id
          extension
          absolutePath
          childImageSharp {
            gatsbyImageData(
              width: 2000
              quality: 100
              webpOptions: { quality: 100 }
            )
          }
        }
      }
    `
  )

  // console.log(backgroundImage123)

  const image = getImage(backgroundImage123)
  const bgImage = convertToBgImage(image)
  return (
    <HeroContainer>
      <Wrapper bgImage={bgImage.fluid.src}>
        <div className="welcome-text">
          <h1>Witaj na moim blogu</h1>
          <h2>Poznaj moje programistyczne projekty</h2>
        </div>
      </Wrapper>
    </HeroContainer>
  )
}

export default HeroSection
