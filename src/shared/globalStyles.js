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
    font-size: 1.4rem;
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
  .h1,
  h1 {
    font-size: 1.6rem;
    font-weight: 600;
    color: ${colors.black};
    margin: 0 0 1.6rem;
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

  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-left {
    text-align: left;
  }
  .uppercase {
    text-decoration: uppercase;
  }
  .lowercase {
    text-decoration: lowercase;
  }
  .underline {
    text-decoration: underline;
  }
  .bold {
    font-weight: 600;
  }

  @media (min-width: ${medium}px) and (max-width: ${large}px) {
    .h1,
    h1 {
      font-size: 1.8rem;
    }
  }
  @media (min-width: ${large}px) {
    body {
      font-size: 1.6rem;
    }
    .h1,
    h1 {
      font-size: 2.4rem;
    }
  }
`

export { globalStyles }
