import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const TechnicalGuidanceWrapper = styled.div`
  padding: 120px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
     padding: 60px 0px;
  `}
  .horizontal-section {
    ${media.md`
      height: auto !important;
    `}
  }
  .sticky-wrapper {
    position: sticky;
    top: 150px;
    width: 100%;
    overflow: hidden;
    ${media.md`
      position: static;
    `}
  }
  .element-wrapper {
    position: relative;
    display: flex;
    padding: 88px 0 0 96px;
    gap: 24px;
    ${media.lg`
      padding-left: 80px;
    `}
    ${media.md`
      padding: 60px 60px 0;
      flex-direction: column;
      transform: translateX(0) !important;
   `}
    ${media.sm`
      padding: 60px 40px 0 40px;
    `}
    ${media.xs`
      padding: 60px 20px 0 20px;
    `}
  }
  .guidance-heading {
    h2 {
      max-width: 800px;
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-right: 50px;
      line-height: 52px;
      ${media.sm`
        line-height: 32px;
        margin-right: 0;
      `}
      span {
        color: ${({ theme }) => theme.colors.dangerColor};
      }
    }
    p {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      letter-spacing: 0.7px;
      max-width: 500px;
      line-height: 32px;
      ${media.sm`
        max-width: 100%;
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        line-height: 24px;
      `}
    }
  }
  .guidance-card {
    min-width: 453px;
    padding: 31px;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    border: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-radius: 24px 24px 0;
    box-sizing: border-box;
    ${media.md`
      min-width: 100%;
    `}
    &:last-child{
      min-width: 96px;
      border: none;
      background-color: transparent;
      ${media.md`
        display: none;
      `}
    }
    h4 {
      margin: 24px 0;
      white-space: pre-line;
      line-height: 32px;
      ${media.sm`
        margin: 24px 0 14px;
        white-space: wrap;
        line-height: 24px;
      `}
    }
    span {
      color: ${({ theme }) => theme.colors.textMedium};
      line-height: 24px;
      ${media.sm`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
      `}
    }
  }
  &.automation-section {
    .guidance-heading {
      flex-direction: column;
    h2 {
      max-width: 630px;
      margin-bottom: 24px;
      ${media.sm`
        max-width: 540px;
      `}
      span {
        color: ${({ theme }) => theme.colors.bodyTextVariant};
        font-weight: ${({ theme }) => theme.fontWeight.normal};
        font-style: italic;
        text-transform: lowercase;
      }
    }
    button {
      display: none;
    }
  }
  .guidance-card {
    span {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
      display: block;
      line-height: 32px;
      margin-top: 32px;
    }
    
  }
  .element-wrapper {
    padding-top: 48px;
  }
}
  @media (min-width: 1600px) {
    .element-wrapper {
      max-width: 1600px;
      margin:0 auto;
    }
   
  }
  @media (min-width: 1920px) {
    .horizontal-section {
      height: 2600px !important;
    }
  }
`;

export default TechnicalGuidanceWrapper;
