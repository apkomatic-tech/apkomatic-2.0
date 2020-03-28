import { css } from "@emotion/core"
import tw from "twin.macro"

const globalStyles = css`
  body {
    font-family: "Baloo Da 2", sans-serif;
    ${tw`text-black`};
  }
  .h1 {
    ${tw`text-3xl mb-2 font-semibold`}
  }
  p {
    ${tw`text-base text-dark mb-2 leading-snug`}
  }
  // TODO: create typography module
  .container,
  .container-fluid {
    ${tw`m-auto px-3`}
  }
  .container {
    ${tw`max-w-screen-lg`}
  }
  .container-fluid {
    ${tw`w-11/12 px-1`}
  }
  a {
    text-decoration: underline;
    ${tw`text-blue-900`}
  }
  img {
    ${tw`w-full block h-auto`}
  }
`

export { globalStyles }
