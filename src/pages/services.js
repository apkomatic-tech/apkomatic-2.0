import React from "react"
import { css } from "@emotion/core"
import tw from "twin.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <div
      className="container-fluid"
      css={css`
         {
          ${tw`my-16 max-w-lg`}
        }
      `}
    >
      <h1>Services</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet deleniti
        dolorum quod, facilis, excepturi quas debitis exercitationem minima
        magni aspernatur fugiat quisquam in? Velit quaerat pariatur,
        voluptatibus eum nobis animi omnis vero quidem numquam, eius voluptates
        laudantium. Optio ducimus vitae facere harum, deleniti earum doloribus
        doloremque in, voluptatibus temporibus velit?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        aspernatur dolore nostrum est ex quas delectus, veritatis iure
        cupiditate repellendus ipsa atque sint ullam, nobis enim consequuntur
        architecto eum odit officia nemo deserunt! A quia nobis corporis
        suscipit provident quam.
      </p>
    </div>
  </Layout>
)

export default ServicesPage
