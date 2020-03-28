import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"

import Header from "./header"
import Footer from "./footer"
import { siteTheme } from "../shared/theme"
import { MenuContext } from "../shared/context"
import { globalStyles } from "../shared/globalStyles"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <ThemeProvider theme={siteTheme}>
        <Global
          styles={css`
            ${globalStyles}
          `}
        />
        <MenuContext.Provider
          value={{
            isMenuOpen,
            toggleMenu,
          }}
        >
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <Footer siteTitle={data.site.siteMetadata.title} />
        </MenuContext.Provider>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
