import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import tw from "twin.macro"

import { siteTheme } from "./theme"

const baseButton = tw`bg-blue-900 hover:bg-blue-900 text-white font-bold py-1 px-4 rounded`
const baseButtonOutline = tw`bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-1 px-4 border border-blue-900 hover:border-transparent rounded`

const Button = styled.button`
  ${baseButton};
  transition: 150ms linear;
`
const GhostButton = styled.button`
  ${baseButtonOutline};
  transition: 150ms linear;
`
const GhostButtonLink = styled(Link)`
  ${baseButtonOutline};
  ${tw`no-underline`};
  &.active {
    ${tw`bg-blue-900 text-white`}
  }
`

export { Button, GhostButton, GhostButtonLink }

const { colors } = siteTheme
// const { blue, black, white, red } = colors
// const buttonBase = css`
//   appearance: none;
//   color: ${white};
//   background-color: ${black};
//   border: 2px solid ${black};
//   padding: 0.5rem 1rem;
//   border-radius: 3px;
//   font-weight: 600;
// `
// const ghostButtonBase = css`
//   ${buttonBase};
//   background: transparent;
// `
// const ghostButtonBlue = css`
//   ${ghostButtonBase};
//   color: ${blue};
//   border-color: ${blue};
// `
// const ghostButtonRed = css`
//   ${ghostButtonBase};
//   color: ${red};
//   border-color: ${red};
// `
// const Button = styled.button`
//   ${buttonBase};
//   background-color: ${props => (props.alt ? red : blue)};
// `
// const ButtonLink = styled(Link)`
//   ${buttonBase};
//   background-color: ${props => (props.alt ? red : blue)};
//   text-decoration: none;
// `
// const ButtonGhost = styled`
//     ${ghostButtonBase};
//     ${props => (props.alt ? ghostButtonRed : ghostButtonBlue)}
//   `
// const ButtonGhostLink = styled(Link)`
//   ${ghostButtonBase};
//   ${props => (props.alt ? ghostButtonRed : ghostButtonBlue)};
//   text-decoration: none;
// `

// export { Button, ButtonLink, ButtonGhost, ButtonGhostLink }
