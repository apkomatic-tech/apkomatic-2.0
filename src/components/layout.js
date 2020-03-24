import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"

import Header from "./header"
import "./layout.css"

const theme = {
  colors: {
    black: "#070918",
    lightGray: "#F3F5FA",
    red: "#B60045",
    blue: "#0051FF",
  },
}

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
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            body {
              background-color: #fff;
            }
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
