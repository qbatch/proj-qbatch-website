import styled from "styled-components";
import { media } from "../../../theme/media-mixins"

const FullCycleWrapper = styled.div`
  padding: 96px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor} ;
  ${media.sm`
  padding: 56px 0;
  `}
  &.web-app-development-page{
    border-top:1px solid ${({ theme }) => theme.colors.dividerColor};
  }
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
    text-align:center;
    margin:auto;
    margin-bottom: 72px;
    ${media.sm`
      margin-bottom: 48px;
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
  &.saas-app-development{
    .paragraph{
      max-width: 1081px;
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      line-height: 32px;
      margin-bottom: 72px;
    }
    .title{
      font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
      ${media.md`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
        line-height: 24px;
      `}
    }
  }
`
export default FullCycleWrapper;