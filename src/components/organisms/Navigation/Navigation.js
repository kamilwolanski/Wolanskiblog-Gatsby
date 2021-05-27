import React, { useContext, useRef, useEffect } from "react"
import { Nav } from "./Navigation.styles"
import IconsContainer from "../../molecules/IconsContainer/IconsContainer"
import Logo from "../../molecules/Logo/Logo"
import { Link } from "gatsby"
import HamburgerMenu from "../../atoms/HamburgerMenu/HamburgerMenu"
import NavMenu from "../NavMenu/NavMenu"
import { NavContext } from "../../../providers/NavProvider"
const Navigation = () => {
  const navRef = useRef(null)
  const { isOpen, setIsOpen } = useContext(NavContext)

  useEffect(() => {
  }, [isOpen, setIsOpen])
  useEffect(() => {
    function closeMenu(e) {
      if (navRef.current) {
        if (navRef.current.contains(e.target)) {
          return
        }
      }

      setIsOpen(false)
    }
    window.addEventListener("click", closeMenu, true)

    return () => {
      window.removeEventListener("click", closeMenu, true)
    }
  }, [setIsOpen])
  return (
      <Nav ref={navRef}>
        <IconsContainer />
        <Link to="/" onClick={() => setIsOpen(false)}>
          <Logo />
        </Link>
        <HamburgerMenu />
        <NavMenu />
      </Nav>
  )
}

export default Navigation
