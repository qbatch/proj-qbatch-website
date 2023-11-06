import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const YouCanTrustWrapper = styled.div`
  padding: 120px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 60px 0;
  `}
  ${media.md`
    display: none;
  `}
  .trust-heading {
    max-width: 580px;
    ${media.md`
      max-width: 100%;
    `}
    h2 {
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 24px;
      line-height: 52px;
      ${media.sm`
        text-align: center;
        max-width: 100%;
        line-height: 28px;
      `}
    }
    p {
      letter-spacing: 0;
      line-height: 32px;
      &:nth-child(2) {
        margin-bottom: 32px;
      }
      ${media.sm`
        text-align: center;
        max-width: 100%;
        line-height: 24px;
      `}
    }
  }
  .slider-section {
    margin-top: 130px;
    .slide-counter {
      padding-top: 144px;
      padding-left: 32px;
      span {
        display: block;
        &:first-child {
          font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
          color: ${({ theme }) => theme.colors.primaryColor};
          font-weight: ${({ theme }) => theme.fontWeight.medium};
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
      padding-left: 58px;
      padding-bottom: 40px;
      ${media.lg`
        padding-bottom: 100px;
      `}
      img {
        padding-left: 40px;
      }
      h3 {
        margin-bottom: 44px;
        text-transform: none;
      }
    }
  }
  &.responsive-section {
    display: none;
    ${media.md`
      display: block;
    `}
    .trust-heading {
      margin-bottom: 72px;
    }
    .card-data {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 24px;
      padding: 32px;
      background-color: ${({ theme }) => theme.colors.whiteColor};
      border: 1px solid ${({ theme }) => theme.colors.dividerColor};
      border-radius: 24px 24px 0;
      &:last-child {
        margin-bottom: 0;
      }
      h3 {
        margin-bottom: 32px;
      }
    }
  }
  .trust-btn {
    display: flex;
    justify-content: center;
    margin-top: 58px;
  }
`;

export default YouCanTrustWrapper;
