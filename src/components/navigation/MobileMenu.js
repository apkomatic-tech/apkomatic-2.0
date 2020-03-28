import React, { useContext } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { motion } from "framer-motion"
import { useTheme } from "emotion-theming"
import { FaTimes } from "react-icons/fa"
import tw from "twin.macro"

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
        ${tw`fixed w-full h-full z-50 top-0 left-0 text-xl font-semibold md:hidden`}
        background-color: ${lightGray};
        pointer-events: ${isMenuOpen ? "auto" : "none"};
        header {
          ${tw`p-6`};
        }
        nav {
          ${tw`pr-6 pl-4`}
        }
      `}
    >
      <header
        css={css`
          ${tw`flex justify-end items-center`}
          height: 60px;
        `}
      >
        <button
          type="button"
          onClick={toggleMenu}
          css={css`
            ${tw`border-0 uppercase bg-transparent cursor-pointer text-2xl`}
          `}
        >
          <FaTimes />
        </button>
      </header>
      <nav
        css={css`
          ${tw`flex flex-col mt-8`}
          a:not(:last-child) {
            ${tw`mb-5`}
          }
        `}
      >
        {navLinks.map(({ id, title, urlPath }, ix) => {
          const linkProps = { key: id, title, to: urlPath }
          return (
            <Link
              {...linkProps}
              css={css`
                ${tw`text-black no-underline`}
              `}
            >
              {title}
            </Link>
          )
        })}
      </nav>
    </motion.div>
  )
}

export default MobileMenu
