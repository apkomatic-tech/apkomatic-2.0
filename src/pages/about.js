import React from "react"
import { css } from "@emotion/core"
import tw from "twin.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <div
      className="container-fluid"
      css={css`
         {
          ${tw`my-24 max-w-lg`}
        }
      `}
    >
      <h1>About Us</h1>
      <h2>Who we are</h2>
      <p>
        We are a web development company based in Los Angeles, California. Our
        company consists of professionals who are passionate about web
        technology and aim at delivering high quality work. We work with all
        type of clients - individuals, profit and non-profit
        businesses/organizations.
      </p>
      <h2>Our mission</h2>
      <p>
        Build hight quality websites for all individuals, businesses, or
        organizations.
      </p>
    </div>
  </Layout>
)

export default AboutPage
