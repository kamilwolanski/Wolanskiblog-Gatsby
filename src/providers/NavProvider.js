import React, { useState } from "react"

const initialState = {
  isOpen: false,
  setIsOpen: () => dispatchEvent,
}
export const NavContext = React.createContext(initialState)

const NavProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <NavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavContext.Provider>
  )
}

export default NavProvider
