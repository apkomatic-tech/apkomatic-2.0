import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import tw from "twin.macro"
import { motion } from "framer-motion"

const baseButton = tw`bg-blue-900 border border-blue-900 hover:opacity-75 text-white font-bold py-2 px-6 rounded leading-tight lg:text-xl`
const baseButtonOutline = tw`bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-1 px-4 border border-blue-900 hover:border-transparent rounded leading-tight lg:text-xl`

const Button = styled(motion.button)`
  ${baseButton};
  ${props => (props.fullWidth ? tw`w-full` : ``)};
  ${props => (props.disabled ? tw`pointer-events-none opacity-50` : ``)};
  transition: 150ms linear;
`
const GhostButton = styled(motion.button)`
  ${baseButtonOutline};
  transition: 150ms linear;
`
const ButtonLink = styled(Link)`
  ${baseButton};
  ${tw`no-underline`};
`
const GhostButtonLink = styled(Link)`
  ${baseButtonOutline};
  ${tw`no-underline`};
  &.active {
    ${tw`bg-blue-900 text-white`}
  }
`

export { Button, ButtonLink, GhostButton, GhostButtonLink }
