import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const PortfolioSuccessWrapper = styled.div`
  padding: 96px 0 28px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 56px 0;
  `}
  .heading {
    margin-bottom: 16px;
    ${media.sm`
      margin-bottom: 12px;
      line-height: 32px;
  `}
  }
  .desc {
    letter-spacing: 0.2px;
    line-height: 24px;
    margin-bottom: 96px;
    ${media.md`
      margin-bottom: 56px;
    `}
    ${media.mobile`
      margin-bottom: 32px;
    `}
  }
  .stories-col {
    margin-bottom: 68px;
    ${media.sm`
      margin-bottom: 48px;
    `}
    ${media.mobile`
      margin-bottom: 24px;
    `}
  }
  .card {
    border: none;
    background-color: transparent;
    .card-img {
      overflow: hidden;
      border-radius: 20px 20px 0 20px;
    }
    .project-img {
      border-radius: 20px 20px 0 20px;
      transform: scale(1);
      transition: transform 0.5s ease-in-out;
      transform-origin: top left;
    }
    .card-body {
      padding: 16px 0 0;
    }
    .card-desc {
      color: ${({ theme }) => theme.colors.textMedium};
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      font-weight: ${({ theme }) => theme.fontWeight.medium};
      line-height: 32px;
      ${media.sm`
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        line-height: 24px;
      `}
      ${media.mobile`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
        line-height: 20px;
      `}
    } 
    .card-logo {
      .project-category {
        padding: 4px 8px;
        border-radius: 2px;
        color: ${({ theme }) => theme.colors.primaryColor};
        font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
        font-weight: ${({ theme }) => theme.fontWeight.light};
        background-color: transparent;
        transition: color 0.5s ease-in-out;
        position: relative;
        z-index: 1;
        &::before {
          position: absolute;
          content: "";
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: linear-gradient(180deg, #002548 0%, #0054A6 100%);
          transition: opacity 0.5s ease-in-out;
          z-index: -1;
          opacity: 0;
          border-radius: 2px;
        }
      }
      .gatsby-image-wrapper {
        div {
          height: 30px;
        }
      }
    }
    .arrow-div {
      position: absolute;
      right: 24px;
      bottom: 20px;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.whiteColor};
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      cursor: pointer;
    }
    &:hover {
      .arrow-div {
        opacity: 1;
      }
      .card-logo {
        div {
          color: ${({ theme }) => theme.colors.whiteColor};
          &::before {
            opacity: 1;
          }
        }
      }
      .project-img {
        transform: scale(1.1);
      }
    }
  }
`

export default PortfolioSuccessWrapper;
