import React from "react"
import { motion } from "framer-motion"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import tw from "twin.macro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/home/hero"

import FeaturedImageDesign from "../images/featured-design.svg"
import FeaturedImageCode from "../images/featured-code.svg"
import FeaturedImageCustomer from "../images/featured-convo.svg"
import Testimonials from "../components/testimonials"

const StyledFeature = styled(motion.section)`
  ${tw`mb-10 md:mb-24`}
  &:last-of-type {
    ${tw`mb-0`}
  }
  .row {
    ${tw`md:flex md:justify-between md:items-center`};
    .column {
      ${tw`md:flex-1`};
    }
    .column.column-with-image {
      ${tw`md:flex md:justify-center md:items-center`};
    }
    .column.column-with-text {
      ${tw`md:flex md:flex-col md:justify-center`}
    }
  }
  .row:not(.reverse) {
    .column:first-of-type {
      ${tw`md:mr-16`}
    }
  }
  .row.reverse {
    .column:last-of-type {
      ${tw`md:ml-16`}
    }
  }
`

const StyledFeatureImage = styled(motion.img)`
  ${tw`max-w-sm hidden md:block`}
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      heading="Let's Build You a Website."
      subheading="We are Apkomatic - a company specializing in building high quality web solutions."
    />
    <div
      css={css`
        ${tw`my-16 md:my-40`}
      `}
    >
      <div className="container">
        <StyledFeature>
          <div className="row">
            <div className="column">
              <h2>Design</h2>
              <p>
                We recognize that good design is very important as it visually
                communicates with your users and customers. We take it
                seriously. Whether you are a small business looking for a simple
                website to promote your services or mid-size organization
                looking to refresh your website look or add new features - we
                got you covered.
              </p>
            </div>
            <div className="column column-with-image">
              <StyledFeatureImage src={FeaturedImageDesign} alt="Design" />
            </div>
          </div>
        </StyledFeature>
        <StyledFeature>
          <div className="row reverse">
            <div className="column column-with-image">
              <StyledFeatureImage src={FeaturedImageCode} alt="Code" />
            </div>
            <div className="column column-with-text">
              <h2>Development</h2>
              <p>
                Good design is important, but so is technical implementation.
                Our expertise in front end and backend technologies and
                languages is the key to build responsive and optimized websites
                and apps.
              </p>
            </div>
          </div>
        </StyledFeature>
        <StyledFeature>
          <div className="row">
            <div className="column column-with-text">
              <h2>Customer First</h2>
              <p>
                We truly care about our customers and that’s why our work is not
                done after we build your product. We will keep in touch with you
                if you need help maintaining your website or web application. We
                value your time and business.
              </p>
            </div>
            <div className="column column-with-image">
              <StyledFeatureImage
                src={FeaturedImageCustomer}
                alt="Customers First"
              />
            </div>
          </div>
        </StyledFeature>
      </div>
    </div>
    <Testimonials />
  </Layout>
)

export default IndexPage
