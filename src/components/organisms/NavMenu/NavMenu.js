import React, { useContext } from "react"
import { NavMenuWrapper } from "./NavMenu.styles"
import { Link } from "gatsby"
import { NavContext } from "../../../providers/NavProvider"
const NavMenu = () => {
  const { isOpen, setIsOpen } = useContext(NavContext)

  return (
    <NavMenuWrapper isOpen={isOpen}>
      <ul>
        <Link
          to="/"
          activeClassName="selected"
          onClick={() => setIsOpen(false)}
        >
          <li>Blog</li>
        </Link>
        <Link
          to="/about-me"
          activeClassName="selected"
          onClick={() => setIsOpen(false)}
        >
          <li>O mnie</li>
        </Link>
        <Link
          to="/contact"
          activeClassName="selected"
          onClick={() => setIsOpen(false)}
        >
          <li>Kontakt</li>
        </Link>
      </ul>
    </NavMenuWrapper>
  )
}

export default NavMenu
