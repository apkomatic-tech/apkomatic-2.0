import { css } from "@emotion/core"
import { siteTheme } from "./theme"
import tw from "twin.macro"

const { colors, breakpoints } = siteTheme
const { small, medium, large } = breakpoints
const globalStyles = css`
  body {
    font-family: "Baloo Da 2", sans-serif;
    color: ${tw`text-black`};
  }
  .container {
    max-width: 1120px;
    margin: auto;
    padding: 0 2.5rem;
  }
  .container-fluid {
    margin: auto;
    width: 95%;
    padding: 0 0.5rem;
  }

  a {
    text-decoration: underline;
    color: ${colors.blue};
  }

  .unstyled-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    width: 100%;
    display: block;
    height: auto;
  }
`

export { globalStyles }
