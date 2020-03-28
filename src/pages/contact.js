import React, { useState, useEffect, useRef } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import tw from "twin.macro"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "../shared/buttonStyles"

// TODO: add submit functionality. Right now form is not functional

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

const useForm = (key, initialValues = { name: "", email: "" }) => {
  const [state, setState] = useState(() => {
    const formDataLocal = JSON.parse(window.localStorage.getItem("formData"))
    return formDataLocal ? { ...formDataLocal } : { ...initialValues }
  })

  const setInputs = input => {
    const { value, name } = input
    setState({
      ...state,
      [name]: value,
    })
  }

  const resetInputs = () => {
    setState({
      name: "",
      email: "",
    })
  }

  useEffect(() => {
    window.localStorage.setItem("formData", JSON.stringify(state))
  }, [state])

  return [state, setInputs, resetInputs]
}

const ContactUsPage = () => {
  const [fieldInputs, setFieldInputs, resetFieldInputs] = useForm()

  function handleFormSubmit(event) {
    event.preventDefault()
    resetFieldInputs()
  }
  return (
    <Layout>
      <SEO title="Contact Us" />
      <div
        className="container"
        css={css`
          ${tw`max-w-sm mb-20 mt-10 flex flex-col justify-center`}
          height: 50vh;
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
              value={fieldInputs.name}
              onChange={e => setFieldInputs(e.target)}
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
              value={fieldInputs.email}
              onChange={e => setFieldInputs(e.target)}
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
                scale: 0.95,
              }}
              initial={{ y: 10 }}
              animate={{
                y: 0,
              }}
              transition={{
                duration: 0.1,
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
