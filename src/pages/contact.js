import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import tw from "twin.macro"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "../shared/buttonStyles"

const StyledLabel = styled.label`
  ${tw`font-semibold inline-block text-dark mb-1 leading-tight cursor-pointer`}
`
const StyledInput = styled(motion.input)`
  ${tw`leading-tight text-base py-2 px-2 border border-dark rounded outline-none focus:border-blue-900`}
  ${props => (props.fullWidth ? tw`w-full` : ``)}
`
const StyledFieldSet = styled.fieldset`
  ${tw`mb-5`}
`

const useForm = () => {
  const [inputs, setInputs] = useState(() => {
    return {
      name: "",
      email: "",
    }
  })

  const handleInputChange = (input, value) => {
    setInputs({
      ...inputs,
      [input]: value,
    })
  }
  useEffect(() => {
    console.log("input updated")
  }, [inputs])

  return [inputs, handleInputChange]
}

const ContactUsPage = () => {
  const [fieldInputs, handleInputChange] = useForm()

  function handleFormSubmit(event) {
    event.preventDefault()
    const name = event.target.elements["name"].value
    const email = event.target.elements["email"].value
  }
  return (
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
          Contact us for a free quote. We respond within 24 hours of your
          request.
        </p>
        <form onSubmit={handleFormSubmit}>
          <StyledFieldSet>
            <StyledLabel htmlFor="name">Your name:</StyledLabel>
            <StyledInput
              fullWidth
              id="name"
              name="name"
              type="text"
              onChange={e => handleInputChange(e.target.name, e.target.value)}
              required
            />
          </StyledFieldSet>
          <StyledFieldSet
            css={css`
              ${tw`mt-3`}
            `}
          >
            <StyledLabel htmlFor="email">Your Email:</StyledLabel>
            <StyledInput
              fullWidth
              id="email"
              name="email"
              type="email"
              onChange={e => handleInputChange(e.target.name, e.target.value)}
              required
            />
          </StyledFieldSet>
          <StyledFieldSet
            css={css`
              ${tw`mt-8`}
            `}
          >
            <Button
              whileTap={{
                scale: 0.85,
              }}
              initial={{ y: 20 }}
              animate={{
                y: 0,
              }}
              fullWidth
              type="submit"
            >
              Request Quote
            </Button>
          </StyledFieldSet>
        </form>
      </div>
    </Layout>
  )
}

export default ContactUsPage
