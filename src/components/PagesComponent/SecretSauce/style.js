import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const SecretSauceWrapper = styled.div`
  padding: 120px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 60px 0;
  `}
  h2,
  h4 {
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 24px;
  }
  &.secret-slider-revenue {
    ${media.md`
      display: none;
    `}
  }
  .secret-heading {
    h2 {
      line-height: 52px;
      ${media.sm`
        margin-bottom: 0;
        line-height: 42px;
      `}
    }
    h3 {
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      margin-bottom: 32px;
      line-height: 32px;
      letter-spacing: 0;
      ${media.sm`
        margin-bottom: 24px;
      `}
    }
    ${media.sm`
        text-align: center;
        margin-bottom: 24px;
      `}
    p {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      letter-spacing: 0.7px;
      line-height: 32px;
      max-width: 900px;
      ${media.sm`
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
      `}
    }
  }
  .slider-section {
    margin-top: 162px;
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
      padding-left: 68px;
      padding-top: 56px;
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
      padding-left: 18px;
      height: 200px;
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
        padding-left: 8px;
        ${media.sm`
         padding-left: 0;
        `}
      }
      h4 {
        line-height: 40px;
      }
      p {
        max-width: 500px;
        letter-spacing: 0;
        line-height: 32px;
        ${media.sm`
         max-width: 100%;
        `}
      }
    }
  }
  &.secret-small-section {
    display: none;
    ${media.md`
      display: block;
    `}
    .secret-heading {
      margin-bottom: 72px;
    }
    .slider-data {
      padding: 32px;
      background-color: #fff;
      border: 1px solid ${({ theme }) => theme.colors.dividerColor};
      border-radius: 24px 24px 0;
      box-sizing: border-box;
      margin-bottom: 32px;
      &:last-child {
        margin-bottom: 0;
      }
      ${media.sm`
        .slider-img {
          display: flex;
          justify-content: center;
        }
        .slider-desc {
          text-align: center;
          margin-top: 24px;
        }
      `}
    }
    &.enterprise-section {
      .secret-heading {
        p {
          font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
          color: ${({ theme }) => theme.colors.bodyText};
          ${media.sm`
            font-size: ${({ theme }) => theme.fonts.baseFontSize};
          `}
        }
        }
    }
  }
  &.enterprise-section {
    .slider-data {
      height: 330px;
      ${media.lg`
        height: 360px;
      `}
      ${media.md`
        height: auto;
      `}
    }
    .secret-heading {
      p {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      color: ${({ theme }) => theme.colors.bodyText};
      max-width: 950px;
      letter-spacing: 0;
      ${media.sm`
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
      `}
    }
    }
    .slider-section {
      margin-top: 126px;
    }
    .slide-counter {
      padding-left: 34px;
      padding-top: 108px;
    }
  }
`;

export default SecretSauceWrapper;
