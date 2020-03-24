import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useTheme } from "emotion-theming"

import { ButtonGhostLink } from "../shared/buttonStyles"

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

const Header = ({ siteTitle }) => {
  const { colors } = useTheme()
  const { red, blue, black, lightGray, white, textColor } = colors

  const TopHeader = styled.header`
    background: ${white};
    .container,
    .container-fluid {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
      @media (max-width: 767px) {
        height: 60px;
      }
    }

    a {
      text-decoration: none;
    }

    nav {
      a:not(:last-child) {
        margin-right: 3.5rem;
      }
      a {
        display: inline-block;
      }
      a:not(.btn) {
        color: ${textColor};
        font-weight: 600;
        transition: color 220ms linear;
        &:hover,
        &.active {
          color: ${blue};
        }
      }
    }
  `

  return (
    <TopHeader>
      <div className="container-fluid">
        <Link
          css={css`
            color: ${black};
            text-decoration: none;
            font-weight: 600;
            font-size: 2rem;
            margin: 0;
            @media (min-width: 1024px) {
              font-size: 2.4rem;
            }
          `}
          to="/"
          className="h1 uppercase"
        >
          {siteTitle}
        </Link>
        <nav className="top-header__nav">
          {LINKS.map(({ id, title, urlPath }) => {
            const isContact = urlPath.match(/\/contact/gi)
            const linkProps = { key: id, title, to: urlPath }
            return isContact ? (
              <ButtonGhostLink className="btn" {...linkProps}>
                {title}
              </ButtonGhostLink>
            ) : (
              <Link activeClassName="active" {...linkProps}>
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
