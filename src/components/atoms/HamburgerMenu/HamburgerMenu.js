import React, { useContext } from "react"
import { StyledHamburgerMenu, Burger } from "./HamburgerMenu.styles"
import { NavContext } from "../../../providers/NavProvider"

const HamburgerMenu = () => {
  const { isOpen, setIsOpen } = useContext(NavContext)

  return (
    <StyledHamburgerMenu onClick={() => setIsOpen(prev => !prev)}>
      <Burger isOpen={isOpen} />
    </StyledHamburgerMenu>
  )
}

export default HamburgerMenu
