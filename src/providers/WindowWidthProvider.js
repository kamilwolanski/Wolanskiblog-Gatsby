import React, { useState, useEffect } from "react"

const initialState = {
  windowWidth: 0,
  setWindowWidth: () => dispatchEvent,
}

export const WindowWidthContext = React.createContext(initialState)

const WindowWidthProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(null)

  useEffect(() => {
    setWindowWidth(window.innerWidth)

    window.addEventListener("resize", handleWindowWidth)

    return () => window.removeEventListener("resize", handleWindowWidth)
  }, [])

  const handleWindowWidth = e => {
    setWindowWidth(e.target.innerWidth)
  }

  return (
    <WindowWidthContext.Provider value={{ windowWidth }}>
      {children}
    </WindowWidthContext.Provider>
  )
}

export default WindowWidthProvider
