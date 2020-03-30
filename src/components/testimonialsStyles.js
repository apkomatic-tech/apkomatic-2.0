import styled from "@emotion/styled"
import tw from "twin.macro"

const TSection = styled.section`
  ${tw`bg-gray text-black relative`}
  min-height: 20rem;
  padding: 8rem 0;
  position: relative;
  z-index: 1;
  clip-path: polygon(0 7%, 100% 0, 100% 100%, 0 100%);
  .tArrow {
    ${tw`hidden md:block text-black outline-none`}
  }
`

const TTitle = styled.div`
  ${tw`text-black flex items-center justify-center mb-8 px-2`};
`

const TItem = styled.article`
  ${tw`flex justify-center items-center text-dark`}
`
const TItemInner = styled.div`
  ${tw`p-10 mx-2`}
  background: rgba(255,255,255, 0.05);
  border-radius: 7px;
  margin: 0 1.2rem;
  max-width: 80rem;
  padding: 4rem;
`
const TItemBody = styled.section`
  ${tw`mb-4`}
`
const TAuthor = styled.section`
  ${tw`leading-tight text-right mb-2`}
`
const TCompany = styled.section`
  ${tw`leading-tight text-right`}
`
const TPagination = styled.div`
  bottom: 35px !important;
  .swiper-pagination-bullet {
    ${tw`bg-black opacity-75`}
    width: 20px;
    height: 20px;
  }
  .swiper-pagination-bullet-active {
    ${tw`bg-blue-900`}
    opacity: 1;
  }
`

export {
  TSection,
  TItem,
  TTitle,
  TItemInner,
  TItemBody,
  TAuthor,
  TCompany,
  TPagination,
}
