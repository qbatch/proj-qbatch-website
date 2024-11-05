import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const WhatCanYouDoWrapper = styled.div`
  padding: 96px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 40px 0;
  `}
  .heading {
    margin-bottom: 58px;
    ${media.sm`
      margin-bottom: 32px;
    `}
  }
  .box-col {
    ${media.lg`
      margin-bottom: 24px;
      &:nth-last-of-type(-n+2) {
        margin-bottom: 0;
      }
    `}
    ${media.mobile`
      &:nth-last-of-type(-n+2) {
        margin-bottom: 24px;
      }
      &:last-child {
        margin-bottom: 0;
      }
    `}
  }
  .box-wrapper {
    background: linear-gradient(180deg, #002548 0%, #0054A6 100%);
    border-radius: 16px 16px 0 16px;
    min-height: 366px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    z-index: 1;
    ${media.mobile`
      margin: 0 6px 32px;
    `}
    h3 {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 16px;
      white-space: pre-line;
      ${media.mobile`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeH3};
        line-height: 40px;
      `}
    }
    p {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 0;
      ${media.mobile`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
        line-height: 32px;
        max-width: 300px;
      `}
    }
    .back-img {
      position: absolute;
      top: 24px;
      display: flex;
      justify-content: center;
      width: 84px;
      left: 24px;
      z-index: -1;
      transition: left 0.5s ease-in-out, margin 0.5s ease-in-out, width 0.5s ease-in-out;
      ${media.mobile`
        width: 100%;
        left: 0;
        transition: none;
      `}
      img {
        width: 84px;
        height: 84px;
        opacity: 1;
        transition: width 0.5s ease-in-out, height 0.5s ease-in-out, opacity 0.5s ease-in-out;
        ${media.mobile`
          opacity: 30%;
          width: 160px;
          height: 160px;
          transition: none;
        `}
      }
    }
    &:hover {
      .back-img {
        left: 0;
        margin: 0;
        width: 100%;
        img {
          width: 200px;
          height: 200px;
          opacity: 30%;
          ${media.mobile`
            width: 160px;
            height: 160px;
        `}
        }    
      }
    }
  }
  .slick-dots {
    li {
      margin: 0px;
      &.slick-active {
        margin-right: 24px;
        button {
          &::before {
            background-color: ${({ theme }) => theme.colors.primaryColor};
            width: 32px;
            height: 8px;
            border-radius: 50px;
            opacity: 1;
            color:transparent;
          }
        }
      }
      button {
        &::before {
          background-color: ${({ theme }) => theme.colors.dividerColor};
          height: 8px;
          width: 8px;
          border-radius: 50px;
          opacity: 1;
          color: transparent;
        }
      }
    }
  }
`

export default WhatCanYouDoWrapper;
