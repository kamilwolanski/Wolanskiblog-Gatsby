import React from "react"
import { Link } from "gatsby"
import Button from "../../atoms/Button/Button"
import { ContactAsideWrapper } from "./ContactAside.styles"

const ContactAside = () => {
  return (
    <ContactAsideWrapper>
      <h3>Kontakt</h3>
      <p>Nie wahaj się i napisz do mnie!</p>
      <Link to="/contact">
        <Button>Napisz</Button>
      </Link>
    </ContactAsideWrapper>
  )
}

export default ContactAside
