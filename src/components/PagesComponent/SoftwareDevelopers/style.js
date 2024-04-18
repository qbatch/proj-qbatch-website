import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const SoftwareDevelopersWrapper = styled.div`
  padding: 96px 0px;
  h2 {
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 16px;
    text-align: center;
  }
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textMedium};
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    font-style: normal;
    text-align: center;
    font-weight: 300;
    line-height: 32px;
  }
  .scroll-icon-wrapper {
    display: none;
    ${media.xl`
        display: block;
        position: absolute;
        top: 24px;
        right: 20px;
        font-size: 28px;
        animation:SlideAnimation infinite alternate 1.5s ease;
        color: ${({ theme }) => theme.colors.primaryColor};
        `}
  }
  .table-base-overlay-wrapper {
    max-width: 1400px;
    overflow: auto;
    .table-base-overlay {
      display: grid;
      grid-template-columns: 390px 300px 239px 239px;
      padding: 72px 0px 96px;
      position: relative;
      justify-content: center;
      ${media.xl`
      justify-content: flex-start;
      `}
      .column-ui-wrapper {
        p {
          padding: 20px 32px;
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
          font-weight: 400;
          line-height: 24px;
          text-align: left;
          border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
          color: ${({ theme }) => theme.colors.bodyTextVariant};
          &:nth-child(1) {
            background: #fff;
            font-weight: 400;
            padding: 8px 32px;
            color: ${({ theme }) => theme.colors.primaryColor};
          }
          &:nth-child(2) {
            background-color: #ffdd3326;
            font-weight: 600;
            color: ${({ theme }) => theme.colors.primaryColor};
          }
          &:nth-child(3) {
            background-color: #ffdd3326;
            font-weight: 600;
            color: ${({ theme }) => theme.colors.primaryColor};
          }
          &:nth-child(4) {
            background-color: #ffdd3326;
            font-weight: 600;
            color: ${({ theme }) => theme.colors.primaryColor};
          }
          &:nth-child(5) {
            background-color: #ffdd3326;
            font-weight: 600;
            color: ${({ theme }) => theme.colors.primaryColor};
          }
          }
        }
      }
      & .second-column {
        border-radius: 12px 12px 0px 12px;
        border: 2px solid ${({ theme }) => theme.colors.primaryColor};
        margin-top: -36px;
        box-shadow: -2px 19px 15px 0px rgba(0,0,0,0.1);
        img {
          padding: 22px 48px;
        }
        p {
          font-weight: 700;
          &:nth-child(2) {
            border-top: 1px solid ${({ theme }) => theme.colors.primaryColor};
          }
          &:nth-child(16) {
            padding-bottom: 49px;
          }
          &:nth-child(16) {
            border-bottom:1px solid transparent;
          }
        }
      }
    }
    .fourth-column {
      p {
        &:nth-child(1) {
          color: ${({ theme }) => theme.colors.bodyTextVariant} !important;
        }
        &:nth-child(2) {
          background-color: #ffdd3326;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.bodyTextVariant} !important;
        }
        &:nth-child(3) {
          background-color: #ffdd3326;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.bodyTextVariant} !important;
        }
        &:nth-child(4) {
          background-color: #ffdd3326;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.bodyTextVariant} !important;
        }
        &:nth-child(5) {
          background-color: #ffdd3326;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.bodyTextVariant} !important;
        }
      }
    }
    .third-column {
      p {
        &:nth-child(1) {
          color: ${({ theme }) => theme.colors.bodyTextVariant} !important;
        }
        &:nth-child(2) {
          background-color: #ffdd3326;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.bodyTextVariant} !important;
        }
        &:nth-child(3) {
          background-color: #ffdd3326;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.bodyTextVariant} !important;
        }
        &:nth-child(4) {
          background-color: #ffdd3326;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.bodyTextVariant} !important;
        }
        &:nth-child(5) {
          background-color: #ffdd3326;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.bodyTextVariant} !important;
        }
      }
    }
  @keyframes SlideAnimation {
    0% {
      transform: translateX(-30px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;
export { SoftwareDevelopersWrapper };

