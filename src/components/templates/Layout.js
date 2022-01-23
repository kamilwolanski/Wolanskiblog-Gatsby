import React, { useEffect } from "react"
import { Wrapper, Footer } from "./Layout.styles"
import Navigation from "../organisms/Navigation/Navigation"
import WindowWidthProvider from "../../providers/WindowWidthProvider"
import NavProvider from "../../providers/NavProvider"
import { ThemeProvider } from "styled-components"
import { theme } from "../../styles/theme"
import { GlobalStyles } from "../../styles/globalStyles"

// import Search from "../molecules/Search/Search"
const Layout = ({ children }) => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'optimize.activate' })
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <WindowWidthProvider>
          <NavProvider>
            <Navigation />
          </NavProvider>
          {children}
        </WindowWidthProvider>
        <Footer>
          <p>2021 WolanskiBlog - Wszelkie prawa zastrzeżone</p>
        </Footer>
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout
