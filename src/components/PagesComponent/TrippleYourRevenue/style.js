import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const RevenueWrapper = styled.div`
  padding: 120px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 60px 0;
  `}
  h2,
  h3 {
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 28px;
  }
  .revenue-heading {
    ${media.sm`
        text-align: center;
      `}
    p {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      letter-spacing: 0.7px;
      ${media.sm`
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
      `}
    }
  }
  .slider-section {
    margin-top: 76px;
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
      padding-left: 14px;
      ${media.sm`
       align-items: center;
       padding-left: 0;
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
      padding-left: 18px;
      ${media.sm`
        text-align: center;
        padding-left: 0;
      `}
      .slider-img {
        ${media.sm`
          display: flex;
          justify-content: center;
        `}
      }
      .slider-desc {
        padding-left: 40px;
        ${media.sm`
         padding-left: 0;
        `}
      }
      h4 {
        color: ${({ theme }) => theme.colors.textMedium};
        font-weight: ${({ theme }) => theme.fontWeight.light};
        max-width: 440px;
        letter-spacing: 0.5px;
        ${media.sm`
         max-width: 100%;
        `}
      }
    }
  }
`;

export default RevenueWrapper;
