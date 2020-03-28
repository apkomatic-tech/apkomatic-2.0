import { css } from "@emotion/core"
import { siteTheme } from "./theme"

const { colors, breakpoints } = siteTheme
const { small, medium, large } = breakpoints
const globalStyles = css`
  html {
    font-size: 10px;
  }
  body {
    background-color: ${colors.white};
    font-weight: 400;
    font-family: "Baloo Da 2", sans-serif;
    color: ${colors.textColor};
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
