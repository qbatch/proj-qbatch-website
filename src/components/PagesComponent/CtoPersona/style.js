import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const PersonaWrapper = styled.div`
  padding: 99px 0 67px;
  ${media.sm`
     padding: 40px 0px;
  `}
  .row {
    --bs-gutter-y: 20px;
  }
  .first-box {
    ${media.sm`
            padding-bottom: 24px;
        `}
    h2 {
      line-height: 51px;
      max-width: 321px;
      margin-bottom: 24px;
      ${media.sm`
       line-height: 32px;
      `}
    }
    .description {
      max-width: 335px;
      line-height: 32px;
      letter-spacing: 0px;
      margin-right: -4px;
      ${media.sm`
           max-width:100%;
        `}

      a {
        position: relative;
        margin-right: -5px;
        color: ${({ theme }) => theme.colors.primaryColor};
        &::after {
          content: "";
          width: 100%;
          height: 1px;
          position: absolute;
          bottom: 0px;
          background-color: ${({ theme }) => theme.colors.primaryColor};
          left: 0px;
        }
      }
    }
  }
  .persona-box {
    background-color: ${({ theme }) => theme.colors.whiteColor};
    border-radius: 24px 24px 0px 24px;
    border: 1px solid ${({ theme }) => theme.colors.dividerColor};
    padding: 48px 48px 20px 48px;
    margin-top: -2px;
    margin-bottom: 26px;
    min-height: 584px;
    height: 100%;
    @media screen and (max-width: 1575px) {
      min-height: 610px;
    }
    @media screen and (max-width: 1540px) {
      min-height: 533px;
      padding: 24px;
    }
    ${media.lg`
            min-height: 595px;
        `}
    ${media.md `
      min-height: 540px;
    `}
    ${media.sm`
            min-height: 320px;
        `}
    h3 {
      line-height: 32px;
      min-height: 64px;
      @media screen and (max-width: 1540px) {
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        min-height: 32px;
        line-height: 24px;
      }
    }
    .persona-list {
      padding-left: 0px;
      padding-top: 8px;
      li {
        color: ${({ theme }) => theme.colors.textMedium};
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        padding-bottom: 24px;
        line-height: 24px;
        &:last-child{
          padding-bottom: 14px;
        }
        @media screen and (max-width: 1540px) {
          padding-bottom: 16px;
          font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
        }
        span {
          display: flex;
          .hash {
            margin-right: 8px;
          }
        }
      }
    }
  }
  .button-box {
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    padding: 48px 48px 46px 48px;
    border-radius: 24px 24px 0px 24px;
    overflow: hidden;
    min-height: 584px;
    height: 100%;
    @media screen and (max-width: 1575px) {
      min-height: 610px;
    }
    @media screen and (max-width: 1540px) {
      min-height: 533px;
      padding: 24px;
    }
    ${media.lg`
            min-height: 594px;
        `}
        
    ${media.md`
            min-height: 540px;
        `}

    ${media.sm`
            min-height: 500px;
        `}
      h2 {
      line-height: 52px;
      ${media.sm`
       line-height: 32px;
      `}
    }
    .circle-bg {
      position: relative;
      z-index: 1;
      margin-left: 195px;
      width: 163px;
      height: 163px;
      @media screen and (max-width: 1540px) {
        margin-left: 5vw;
      }

      ${media.md`
       margin: auto;
    `}
      &:after {
        content: url("/problum-background.svg");
        position: absolute;
        right: -144%;
        bottom: -121%;
        z-index: -1;
        ${media.sm`
    bottom: -133%;
    `}
      }
    }
    .circle-box {
      border: 1px solid ${({ theme }) => theme.colors.primaryColor};
      width: 163px;
      height: 163px;
      border-radius: 50%;
      margin-top: 117px;
      @media screen and (max-width: 1540px) {
        margin-top: 71px;
      }
      ${media.md`
       margin-left: 0;
    `}

      cursor: pointer;
      transition: background-color 0.5s ease-out 100ms;
      position: relative;
      .text-svg {
        fill: ${({ theme }) => theme.colors.primaryColor};
        height: auto;
        max-width: 66vmin;
        transform-origin: center;
        width: 100%;
        transition: transform 0.5s ease-out 100ms;
        pointer-events: none;
        text {
          font-size: 6.5px;
        }
      }
      .red-arrow {
        font-size: 81px;
        color: ${({ theme }) => theme.colors.dangerColor};
        height: 50px;
        width: 62px;
        position: absolute;
        top: 55px;
        left: 48px;
        transition: transform 0.5s ease-out 100ms;
      }
      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryColor};
        .text-svg {
          fill: ${({ theme }) => theme.colors.whiteColor};
          transform: rotateZ(82deg);
        }
        .red-arrow {
          transform: rotate(-45deg);
        }
      }
    }
  }
`;
export default PersonaWrapper;
