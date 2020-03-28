import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/home/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      heading="Let's Build You a Website."
      subheading="We are Apkomatic - a company specializing in building high quality web solutions."
    />
  </Layout>
)

export default IndexPage
