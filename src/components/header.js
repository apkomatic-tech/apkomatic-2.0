import PropTypes from "prop-types"
import React, { useContext, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useTheme } from "emotion-theming"

import navLinks from "./navigation/navlinks"
import MobileMenu from "./navigation/MobileMenu"

import { MenuContext } from "../shared/context"
import { ButtonGhostLink } from "../shared/buttonStyles"
import TwitterLogo from "../images/icons8-twitter.svg"
import EnvelopeLogo from "../images/enevelope-solid.svg"

const useHeaderHeight = () => {
  const headerRef = useRef(null)
  const headerHeight = useRef(0)

  useEffect(() => {
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
  const { isMenuOpen, toggleMenu } = useContext(MenuContext)
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
          {navLinks.map(({ id, title, urlPath }) => {
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

        <button
          type="button"
          css={css`
            appearance: none;
            background: ${white};
            display: block;
            width: 3rem;
            height: 1.25rem;
            border: 0;
            position: relative;
            z-index: 1;
            span {
              position: absolute;
              z-index: 2;

              height: 3px;
              background: ${black};
              &:first-child {
                left: 0;
                width: 100%;
                top: 0;
              }
              &:last-child {
                width: 38%;
                bottom: 0;
                right: 0;
              }
            }
            @media (min-width: ${small}px) {
              display: none !important;
            }
          `}
          onClick={() => toggleMenu()}
        >
          <span></span>
          <span></span>
        </button>
        <MobileMenu isMenuOpen={isMenuOpen} />
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
