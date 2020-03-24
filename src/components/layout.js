import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"

import Header from "./header"
import { siteTheme } from "../shared/theme"
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

  return (
    <>
      <ThemeProvider theme={siteTheme}>
        <Global
          styles={css`
            ${globalStyles}
          `}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>Footer</footer>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
