import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const AutomationWrapper = styled.div`
 padding: 120px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 40px;
  `}
  .automation-heading {
    h2 {
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 28px;
      max-width: 630px;
      ${media.sm`
         text-align: center;
         max-width: 100%;
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
      `}
    }
  }
  .slider-section {
    margin-top: 82px;
   
    .slide-counter {
      padding-left: 34px;
      padding-top: 156px;
      ${media.lg`
        padding-left: 0;
      `}
      ${media.sm`
        padding: 0;
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
      `}
      }
    }
  }
`

export default AutomationWrapper;
