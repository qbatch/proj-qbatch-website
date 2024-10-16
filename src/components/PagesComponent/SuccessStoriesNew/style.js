import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const SuccessStoriesNewWrapper = styled.div`
  padding: 96px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 40px 0;
  `}
  &.travel-app-development-wrapper .slick-current div {
   ${media.mobile`
    padding-left: 0px !important;
    `}
}
  .section-heading {
    margin-bottom: 56px;
    ${media.sm`
      margin-bottom: 32px;
      flex-direction: column;
    `}
    p {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      line-height: 32px;
      ${media.sm`
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        line-height: 24px;
      `}
      ${media.mobile`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
        line-height: 18px;
      `}
    }
  }
  .carousel-button-group {
    gap: 12px;
    svg {
      cursor: pointer;
    }
    .arrow-icon {
      width: 10px;
      height: 14px;
      line-height: 0.8;
    }
    span {
      color: ${({ theme }) => theme.colors.textMedium};
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      display: flex;
      align-items: center;
      gap: 4px;
      &:first-child {
        color: ${({ theme }) => theme.colors.primaryColor};
      }
      &:nth-child(2) {
        font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
      }
    }
  }
  .for-web-view{
    display: block;
    ${media.sm`
    display: none;
      `}
  }
  .for-mobile-view{
    display: none;
    ${media.sm`
    display: block;
    display:flex;
    justify-content:center;
      `}
  }
  .card {
    border: none;
    background-color: transparent;
    .card-img {
      overflow: hidden;
      border-radius: 20px 20px 0 20px;
      max-height: 285px;
      ${media.mobile`
        border-radius: 10px 10px 0 10px;
      `}
    }
    .project-img {
      border-radius: 20px 20px 0 20px;
      transform: scale(1);
      transition: transform 0.5s ease-in-out;
      transform-origin: top left;
      ${media.mobile`
        border-radius: 10px 10px 0 10px;
      `}
    }
    .card-body {
      padding: 16px 0 0;
      ${media.mobile`
        padding: 8px 0 0;
      `}
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
      margin-bottom: 16px;
      ${media.mobile`
        margin-bottom: 8px;
      `}
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
          ${media.mobile`
            height: 15px;
          `}
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
  .slick-slide {
      padding: 0 12px;
  }

  .slick-list {
      margin: 0 -12px;
  }
`

export default SuccessStoriesNewWrapper;
