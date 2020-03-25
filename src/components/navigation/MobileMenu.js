import React, { useContext } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { motion } from "framer-motion"
import { useTheme } from "emotion-theming"
import { IoMdClose } from "react-icons/io"

import { MenuContext } from "../../shared/context"
import navLinks from "./navlinks"

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

const MobileMenu = () => {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext)
  const { colors, breakpoints } = useTheme()
  const { black, white, lightGray } = colors
  const { small } = breakpoints
  return (
    <motion.div
      variants={mobileMenuVariants}
      initial="hidden"
      animate={isMenuOpen ? "visible" : "hidden"}
      transition={{
        duration: 0.25,
      }}
      css={css`
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 100;
        top: 0;
        left: 0;
        background-color: ${lightGray};
        pointer-events: ${isMenuOpen ? "auto" : "none"};
        border: 2px solid ${black};
        font-size: 2rem;
        font-weight: 600;
        header {
          padding: 3rem;
        }
        nav {
          padding: 0 3rem 0 4rem;
        }
        @media (min-width: ${small}px) {
          display: none !important;
        }
      `}
    >
      <header
        css={css`
          height: 60px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        `}
      >
        <button
          type="button"
          onClick={toggleMenu}
          css={css`
            appearance: none;
            border: 0;
            text-transform: uppercase;
            background-color: transparent;
            cursor: pointer;
            svg {
              max-width: 40px;
            }
          `}
        >
          <IoMdClose />
        </button>
      </header>
      <nav
        css={css`
          display: flex;
          flex-direction: column;
          margin-top: 4rem;
          a:not(:last-child) {
            margin-bottom: 3rem;
          }
        `}
      >
        {navLinks.map(({ id, title, urlPath }) => {
          const linkProps = { key: id, title, to: urlPath }
          return <Link {...linkProps}>{title}</Link>
        })}
      </nav>
    </motion.div>
  )
}

export default MobileMenu
