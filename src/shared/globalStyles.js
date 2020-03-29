import { css } from "@emotion/core"
import tw from "twin.macro"

const globalStyles = css`
  body {
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 400;
    ${tw`text-black text-lg`};
  }
  h1,
  .h1,
  h2,
  .h2 {
    font-family: "Poppins", sans-serif;
    ${tw`font-semibold`}
  }
  h1,
  .h1 {
    ${tw`mb-4 text-4xl`}
  }
  h2,
  .h2 {
    ${tw`mb-2 text-2xl`}
  }
  p {
    ${tw`text-dark mb-2 leading-snug`}
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
