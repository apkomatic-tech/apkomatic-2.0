import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import tw from "twin.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "../shared/buttonStyles"

const StyledLabel = styled.label`
  ${tw`font-semibold inline-block text-dark mb-1 leading-tight cursor-pointer`}
`
const StyledInput = styled.input`
  ${tw`leading-tight text-base py-2 px-2 border border-dark rounded outline-none focus:border-blue-900`}
  ${props => (props.fullWidth ? tw`w-full` : ``)}
`
const StyledFieldSet = styled.fieldset`
  ${tw`mb-5`}
`
const ContactUsPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <div
      className="container"
      css={css`
        ${tw`max-w-sm mb-20 mt-10`}
      `}
    >
      <h1 className="h1">Contact Us</h1>
      <p>
        Contact us for a free quote. We respond within 24 hours of your request.
      </p>
      <form>
        <StyledFieldSet>
          <StyledLabel htmlFor="name">Your name:</StyledLabel>
          <StyledInput fullWidth id="name" type="text" />
        </StyledFieldSet>
        <StyledFieldSet
          css={css`
            ${tw`mt-3`}
          `}
        >
          <StyledLabel htmlFor="email">Your Email:</StyledLabel>
          <StyledInput fullWidth id="email" type="email" />
        </StyledFieldSet>
        <StyledFieldSet
          css={css`
            ${tw`mt-8`}
          `}
        >
          <Button fullWidth type="submit">
            Request Quote
          </Button>
        </StyledFieldSet>
      </form>
    </div>
  </Layout>
)

export default ContactUsPage
