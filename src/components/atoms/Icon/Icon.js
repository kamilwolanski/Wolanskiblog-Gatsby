import React from "react"
import { Wrapper } from "./Icon.styles"

const Icon = ({ children, iconSize }) => {
  const wrapperWidth = iconSize * 1.5
  return (
    <Wrapper iconSize={iconSize} wrapperWidth={wrapperWidth}>
      {children}
    </Wrapper>
  )
}

export default Icon
