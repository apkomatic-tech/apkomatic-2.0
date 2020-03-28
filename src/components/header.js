import PropTypes from "prop-types"
import React, { useContext, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useTheme } from "emotion-theming"
import tw from "twin.macro"

import navLinks from "./navigation/navlinks"
import MobileMenu from "./navigation/MobileMenu"

import { MenuContext } from "../shared/context"
import { GhostButton, GhostButtonLink } from "../shared/buttonStyles"
import { FaTwitter, FaEnvelopeOpen } from "react-icons/fa"
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

const StyledHeader = styled.header`
  ${tw`bg-white`};
  .container,
  .container-fluid {
    ${tw`flex items-center justify-between`}
    height: 80px;
  }

  nav {
    > a:not(.btn) {
      transition: color 220ms linear;
    }
  }
`

const StyledNavLink = styled(Link)`
  ${tw`no-underline text-black hover:text-blue-900 mr-8`};
  &.active {
    ${tw`text-blue-900`};
  }
`

const Header = ({ siteTitle }) => {
  const { colors, breakpoints } = useTheme()
  const { red, blue, black, lightGray, white, textColor } = colors
  const { small, medium, large } = breakpoints
  const { isMenuOpen, toggleMenu } = useContext(MenuContext)
  const { headerRef, headerHeight } = useHeaderHeight()

  return (
    <StyledHeader ref={headerRef}>
      <div className="container-fluid">
        <Link
          css={css`
            ${tw`text-xl md:text-2xl m-0 text-black font-semibold no-underline`}
          `}
          to="/"
        >
          {siteTitle}
        </Link>
        <nav
          css={css`
            ${tw`md:flex md:items-center hidden`}
            a:last-child {
              ${tw`mr-0`}
            }
          `}
        >
          {navLinks.map(({ id, title, urlPath }) => {
            const linkProps = { key: id, title, to: urlPath }
            return (
              <StyledNavLink activeClassName="active" {...linkProps}>
                {title}
              </StyledNavLink>
            )
          })}
        </nav>

        <button
          type="button"
          css={css`
            ${tw`w-8 h-3 bg-white border-0 outline-none relative z-10 block md:hidden`};
            appearance: none;
            span {
              ${tw`absolute z-20 bg-black`}
              height: 2px;
              &:first-child {
                left: 0;
                width: 100%;
                top: 0;
              }
              &:last-child {
                width: 50%;
                bottom: 0;
                right: 0;
                transition: width 200ms ease;
              }
            }
            &:hover span:last-child {
              width: 100%;
            }
          `}
          onClick={() => toggleMenu()}
        >
          <span></span>
          <span></span>
        </button>
        <MobileMenu isMenuOpen={isMenuOpen} />
      </div>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
