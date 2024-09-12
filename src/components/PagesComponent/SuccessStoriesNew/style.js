import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const SuccessStoriesNewWrapper = styled.div`
  padding: 96px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 40px 0;
  `}
  .section-heading {
    margin-bottom: 56px;
    ${media.md`
      flex-direction: column;
    `}
    ${media.sm`
      margin-bottom: 32px;
    `}
    p {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      line-height: 32px;
      ${media.sm`
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        line-height: 24px;
      `}
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
    .card-img {
      overflow: hidden;
      border-radius: 20px 20px 0 20px;
    }
    .card-img-top {
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
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      line-height: 32px;
    } 
    .card-logo {
      div {
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
      .card-img-top {
        transform: scale(1.1);
      }
    }
  }
`

export default SuccessStoriesNewWrapper;
