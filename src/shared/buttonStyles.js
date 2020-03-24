import { css } from "@emotion/core"
import styled from "@emotion/styled"

import { siteTheme } from "./theme"

const { colors } = siteTheme
const buttonBase = css`
  unset: all;
  color: ${colors.white};
  background-color: ${colors.black};
  border: 2px solid ${colors.black};
  padding: 0.5rem 1rem;
  border-radius: 3px;
  font-weight: 600;
`
const ghostButtonBase = css`
  ${buttonBase};
  background: transparent;
`
const ghostButtonBlue = css`
  ${ghostButtonBase};
  color: ${blue};
  border-color: ${blue};
`
const ghostButtonRed = css`
  ${ghostButtonBase};
  color: ${red};
  border-color: ${red};
`
const Button = styled.button`
  ${buttonBase};
  background-color: ${props => (props.alt ? red : blue)};
`
const ButtonLink = styled(Link)`
  ${buttonBase};
  background-color: ${props => (props.alt ? red : blue)};
  text-decoration: none;
`
const ButtonGhost = styled`
    ${ghostButtonBase};
    ${props => (props.alt ? ghostButtonRed : ghostButtonBlue)}
  `
const ButtonGhostLink = styled(Link)`
  ${ghostButtonBase};
  ${props => (props.alt ? ghostButtonRed : ghostButtonBlue)};
  text-decoration: none;
`

export { Button, ButtonLink, ButtonGhost, ButtonGhostLink }
