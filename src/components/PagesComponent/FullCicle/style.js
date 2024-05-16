import styled from "styled-components";
import { media } from "../../../theme/media-mixins" 

const FullCycleWrapper = styled.div`
  padding: 96px 0;
  ${media.sm`
  padding: 56px 0;
  `}
  .heading-container{
    max-width: 505px;
    margin: auto;
    text-align: center;
  }
  .main-heading {
    color: ${({ theme }) => theme.colors.primaryColor};
    max-width: 811px;
    padding-bottom: 16px;
    line-height: 52px;
    text-align:center;
    margin:auto;
    ${media.sm`
    padding-bottom: 4px;
    line-height:32px;
  `}
  }
  .paragraph {
    max-width: 751px;
    line-height: 24px;
    letter-spacing: 0;
<<<<<<< HEAD
    ${media.sm`
      margin-bottom: 48px;
      line-height:24px;
=======
    text-align:center;
    margin:auto;
    margin-bottom: 72px;
    ${media.sm`
      margin-bottom: 48px;
>>>>>>> f8c5f1dc771b9595b0c5322ad40cc5c1a92a8f81
  `}
  }
  ${media.sm`
    padding: 56px 0;
  `}
  .hover-box {
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    color: ${({ theme }) => theme.colors.whiteColor};
    padding: 32px 32px 3px 32px;
    ${media.sm`
      padding: 30px 0 10px;
      line-height:24px;
    `}

    cursor: pointer;
    .title {
      color: ${({ theme }) => theme.colors.textMedium};
      margin-bottom: 0;
      font-weight: ${({ theme }) => theme.fontWeight.normal};
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
    }
    .description {
      color: ${({ theme }) => theme.colors.textMedium};
      height: 0;
      opacity: 0;
      max-width: 630px;
      transition: height 0.5s, opacity 0.5s;
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      line-height: 32px;
      ${media.sm`
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
      `}
    }
    &:hover {
      .description {
        height: 180px;
        opacity: 1;
        ${media.sm`
        height: auto;
      `}
      }
    }
  }
  .add-space {
    margin-left: 27px;
    margin-top: 73px;
  }
`
export default FullCycleWrapper;