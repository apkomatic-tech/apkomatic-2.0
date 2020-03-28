import React from "react"
import { css } from "@emotion/core"
import tw from "twin.macro"
import { motion } from "framer-motion"
import { ButtonLink } from "../../shared/buttonStyles"
import MouseScrollImage from "../../images/mouse-scroll.svg"

const Hero = ({ heading, subheading }) => {
  return (
    <div
      css={css`
        ${tw`
        relative z-10 flex justify-center items-center
    `}
        min-height: 420px;
        height: calc(100vh - 80px);
        background: linear-gradient(
          rgba(243, 245, 250, 0.07),
          rgba(243, 245, 250, 0.71),
          rgba(243, 245, 250, 1)
        );
        @media (max-width: 768px) {
          height: calc(60vh - 80px);
        }
      `}
    >
      <div
        className="container-fluid"
        css={css`
          ${tw`flex flex-col justify-center`}
        `}
      >
        <motion.h1
          initial={{
            y: -45,
          }}
          animate={{
            y: 0,
          }}
          css={css`
            ${tw`text-center text-4xl md:text-6xl font-semibold leading-tight mb-2`}
          `}
        >
          {heading}
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0.01,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.25,
          }}
          css={css`
            ${tw`text-center text-base md:text-xl text-dark mb-5 leading-tight`}
          `}
        >
          {subheading}
        </motion.p>
        <motion.div
          css={css`
            ${tw`mx-auto mt-6`}
          `}
          initial={{
            y: 45,
            opacity: 0.01,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.38,
          }}
        >
          <ButtonLink
            css={css`
              ${tw`self-center`}
            `}
            to="/contact"
          >
            Contact Us
          </ButtonLink>
        </motion.div>
      </div>
      <motion.img
        initial={{
          y: 10,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          delay: 0.75,
          duration: 1,
          yoyo: Infinity,
        }}
        css={css`
          ${tw`
            w-6
            absolute
            z-10
            hidden
            left-auto
            right-auto
            lg:block
        `}
          bottom: 1.5rem;
        `}
        src={MouseScrollImage}
        alt="Mouse Scroll Indicator"
      />
    </div>
  )
}
export default Hero
