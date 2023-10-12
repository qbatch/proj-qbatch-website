import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const TechnicalGuidanceWrapper = styled.div`
  padding: 96px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
     padding: 40px 0px;
  `}
  .horizontal-section {
    ${media.sm`
      height: auto !important;
    `}
  }
  .sticky-wrapper {
    position: sticky;
    top: 150px;
    width: 100%;
    overflow: hidden;
    ${media.sm`
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
      padding-left: 60px;
   `}
    ${media.sm`
      padding: 60px 40px 0 40px;
      flex-direction: column;
      transform: translateX(0) !important;
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
  }
  .guidance-card {
    min-width: 453px;
    padding: 31px;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    border: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-radius: 24px 24px 0;
    box-sizing: border-box;
    ${media.sm`
      min-width: 100%;
    `}
    &:last-child{
      min-width: 96px;
      border: none;
      background-color: transparent;
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
  @media (min-width: 1920px) {
    .element-wrapper {
      max-width: 1920px;
      margin:0 auto;
    }
    .horizontal-section {
      height: 1700px !important;
    }
  }
`;

export default TechnicalGuidanceWrapper;
