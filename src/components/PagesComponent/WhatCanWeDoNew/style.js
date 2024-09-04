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
    &:first-child {
      .box-wrapper {
        background: linear-gradient(180deg, #1A2026 0%, #21507E 100%);
      }
      &:hover {
        .box-wrapper {
          background: linear-gradient(180deg, #002548 0%, #0054A6 100%);
        }
      }
    }
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
    h3 {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 16px;
      white-space: pre-line;
    }
    p {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 0;
    }
    .back-img {
      position: absolute;
      top: 24px;
      display: flex;
      justify-content: center;
      width: 100%;
      left: 0;
      z-index: -1;
      height: 200px;
      transition: left 0.5s ease-in-out, margin 0.5s ease-in-out, width 0.5s ease-in-out;
      img {
        width: 200px;
        height: 200px;
        opacity: 30%;
        transition: width 0.5s ease-in-out, height 0.5s ease-in-out, opacity 0.5s ease-in-out;
      }
    }
    &:hover {
      .back-img {
        left: 24px;
        margin: 0;
        width: 100px;
        img {
          width: 100px;
          height: 100px;
          opacity: 1;
        }    
      }
    }
  }
`

export default WhatCanYouDoWrapper;
