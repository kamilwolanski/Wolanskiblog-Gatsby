import React, { useContext } from "react"
import { AboutAuthorWrapper } from "./AboutAuthor.styles"
import Button from "../../atoms/Button/Button"
import { FontSizesButton } from "../../atoms/Button/Button"
import { Link} from "gatsby"
import { WindowWidthContext } from "../../../providers/WindowWidthProvider"
import { StaticImage } from "gatsby-plugin-image"

const AboutAuthor = props => {
  const { windowWidth } = useContext(WindowWidthContext)
  return (
    <AboutAuthorWrapper>
      <h3>o autorze</h3>
      <div className="author-portrait">
        <StaticImage src='../../../images/IMG_20210509_113454nbn.jpg' placeholder="none" width={300} quality="100" alt="Wizerunek autora bloga"/>
      </div>
      <p>
        Hej! Nazywam się Kamil Wolański i zamierzam zostać programistą. Moim
        głównym zainteresowaniem są technologie webowe na ścieżce frontendu, a
        używaną biblioteką React JS.
      </p>
      <Link to="/about-me">
        <Button
          fontSize={
            windowWidth >= 1800 ? FontSizesButton.M : FontSizesButton.SM
          }
          margintb={20}
        >
          dowiedz się więcej
        </Button>
      </Link>
    </AboutAuthorWrapper>
  )
}

export default AboutAuthor
