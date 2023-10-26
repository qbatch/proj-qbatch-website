import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const AutomationWrapper = styled.div`
 padding: 120px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 60px 0;
  `}
  .automation-heading {
    h2 {
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 26px;
      max-width: 630px;
      line-height: 52px;
      ${media.sm`
         text-align: center;
         max-width: 100%;
        line-height: 28px;
      `}
      span {
        color: ${({ theme }) => theme.colors.bodyTextVariant};
        font-weight: ${({ theme }) => theme.fontWeight.normal};
        font-style: italic;
        text-transform: lowercase;
      }
    }
    p {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      letter-spacing: 0.7px;
      max-width: 500px;
      line-height: 32px;
      ${media.sm`
         text-align: center;
         max-width: 100%;
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        line-height: 24px;
      `}
    }
  }
  .slider-section {
    margin-top: 82px;
    ${media.sm`
      margin-top: 28px;
    `}
    .center-align {
      display: flex;
      justify-content: center;
      ${media.sm`
        display: block;
      `}
    }
    .slide-counter {
      padding-left: 36px;
      padding-top: 156px;
      ${media.lg`
        padding-left: 0;
      `}
      ${media.sm`
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 28px;
      `}
      span {
        display: block;
        &:first-child {
          font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
          color: ${({ theme }) => theme.colors.primaryColor};
          font-weight:  ${({ theme }) => theme.fontWeight.medium};
        }
        &:nth-child(2) {
          width: 32px;
          height: 1px;
          background-color: ${({ theme }) => theme.colors.dividerColor};
          transform: rotate(-45deg);
        }
        &:nth-child(3) {
          color: ${({ theme }) => theme.colors.textMedium};
          margin-left: 20px;
        }
      }
    }
    .slider-data {
      img {
        padding-left: 65px;
        ${media.sm`
          padding-left: 0;
        `}
      }
      h3 {
        color: ${({ theme }) => theme.colors.bodyTextVariant};
        font-weight: ${({ theme }) => theme.fontWeight.light};
        letter-spacing: 0.9px;
        max-width: 400px;
        padding-left: 20px;
        line-height: 40px;
        text-transform: none;
        ${media.sm`
          text-align: center;
          max-width: 100%;
          padding-left: 0;
          line-height: 32px;
      `}
      }
    }
  }
`

export default AutomationWrapper;
