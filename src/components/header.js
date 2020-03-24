import PropTypes from "prop-types"
import React, { useContext, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useTheme } from "emotion-theming"

import { MenuContext } from "../shared/context"
import { ButtonGhostLink } from "../shared/buttonStyles"
import TwitterLogo from "../images/icons8-twitter.svg"
import EnvelopeLogo from "../images/enevelope-solid.svg"

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

const useHeaderHeight = () => {
  const headerRef = useRef(null)
  const headerHeight = useRef(0)

  useEffect(() => {
    console.log(`header initializied...${headerRef.current.clientHeight}px`)
    headerHeight.current = `${headerRef.current.clientHeight}px`
  }, [])

  return {
    headerRef,
    headerHeight,
  }
}

const Header = ({ siteTitle }) => {
  const { colors, breakpoints } = useTheme()
  const { red, blue, black, lightGray, white, textColor } = colors
  const { small, medium, large } = breakpoints
  const menu = useContext(MenuContext)
  const { headerRef, headerHeight } = useHeaderHeight()

  const TopHeader = styled.header`
    background: ${white};
    .container,
    .container-fluid {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
      @media (max-width: ${small}px) {
        height: 60px;
      }
    }

    a {
      text-decoration: none;
    }

    nav {
      > a:not(:last-child) {
        margin-right: 3.5rem;
      }
      > a {
        display: inline-block;
      }
      > a:not(.btn) {
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
    <TopHeader ref={headerRef}>
      <div className="container-fluid">
        <Link
          css={css`
            color: ${black};
            text-decoration: none;
            font-weight: 600;
            font-size: 2rem;
            margin: 0;
            @media (min-width: ${medium}px) {
              font-size: 2.4rem;
            }
          `}
          to="/"
          className="h1 uppercase"
        >
          {siteTitle}
        </Link>
        <nav
          css={css`
            display: flex;
            align-items: center;
            @media (max-width: ${small}px) {
              display: none !important;
            }
          `}
        >
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
          <div
            css={css`
              margin-left: 2rem;
              display: flex;
              align-items: center;
              a:not(last-child) {
                margin-right: 1rem;
              }
              img {
                max-width: 25px;
              }
            `}
          >
            <a href="#">
              <img src={TwitterLogo} alt="Twitter" />
            </a>
            <a href="#">
              <img src={EnvelopeLogo} alt="Email" />
            </a>
          </div>
        </nav>
        <nav
          css={css`
            display: ${menu.menuOpen ? "none" : "flex"};
            position: absolute;
            width: 100%;
            left: 0;
            top: ${headerHeight};
          `}
        >
          Mobile Nav Menu
        </nav>
        <button
          type="button"
          css={css`
            @media (min-width: ${small}px) {
              display: none !important;
            }
          `}
          onClick={() => menu.toggleMenu()}
        >
          Toggle Menu
        </button>
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
