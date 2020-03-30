import React, { useEffect } from "react"
import Swiper from "swiper"
import testimonialsJson from "../data/testimonials.json"
import {
  TSection,
  TTitle,
  TItem,
  TItemInner,
  TItemBody,
  TAuthor,
  TCompany,
  TPagination,
} from "./testimonialsStyles"
import "../../node_modules/swiper/css/swiper.min.css"

const Testimonials = () => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },
    })
  }, [])
  return (
    <TSection className="swiper-container">
      <TTitle className="h2">Customers Love Us</TTitle>
      <div className="swiper-wrapper">
        {testimonialsJson.map(t => (
          <TItem key={t.id} className="swiper-slide testimonials__item">
            <TItemInner>
              <TItemBody>{t.content}</TItemBody>
              <section>
                <TAuthor>{t.author.name}</TAuthor>
                <TCompany>{t.author.company}</TCompany>
              </section>
            </TItemInner>
          </TItem>
        ))}
      </div>
      <div className="tArrow swiper-button-next swiper-button-white"></div>
      <div className="tArrow swiper-button-prev swiper-button-white"></div>
      <TPagination className="swiper-pagination" />
    </TSection>
  )
}

export default Testimonials
