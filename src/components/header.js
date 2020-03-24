import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useTheme } from "emotion-theming"

const TopHeader = styled.header`
  background: #fff;
  font-family: "Baloo Da 2", sans-serif;
  & > div {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
  }

  nav {
    a {
      display: inline-block;
      margin-right: 22px;
    }
  }
`

const LINKS = [
  {
    id: 1,
    title: "Home",
    urlPath: "/",
  },
  {
    id: 2,
    title: "About",
    urlPath: "/about",
  },
  {
    id: 3,
    title: "Services",
    urlPath: "/services",
  },
  {
    id: 4,
    title: "Contact Us",
    urlPath: "/contact",
  },
]

// color: #111;
// font-size: 28px;
// text-transform: uppercase;
// text-decoration: none;
// font-weight: 600;

const Header = ({ siteTitle }) => {
  const { colors } = useTheme()
  const { red, blue, black, lightGray } = colors
  return (
    <TopHeader>
      <div>
        <Link
          css={css`
            color: ${black};
            font-size: 20px;
            text-transform: uppercase;
            text-decoration: none;
            font-weight: 600;
            @media (min-width: 1024px) and (max-width: 1280px) {
              font-size: 20px;
            }
          `}
          to="/"
          className="top-header__title"
        >
          {siteTitle}
        </Link>
        <nav className="top-header__nav">
          {LINKS.map(({ id, title, urlPath }) => {
            return (
              <Link key={id} title={title} to={urlPath}>
                {title}
              </Link>
            )
          })}
        </nav>
      </div>
    </TopHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
