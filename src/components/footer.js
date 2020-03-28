import React from "react"
import { css } from "@emotion/core"
import tw from "twin.macro"

const Footer = ({ siteTitle }) => {
  const year = new Date().getFullYear()
  return (
    <footer
      css={css`
        ${tw`bg-gray text-dark text-center text-xs px-1 py-3`}
      `}
    >
      &copy;{siteTitle}, All Rights Reserved {year}
    </footer>
  )
}

export default Footer
