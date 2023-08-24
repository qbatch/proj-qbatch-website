import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const DemoServiceWrapper = styled.div`
  overflow: hidden;
  padding: 98px 0;
  .heading {
    margin-bottom: 27px;
  }
  .stroies-wrapper {
    margin-top: 76px;
  }
  .wrapper {
    display: flex;
    transition: transform 0.6s;
    gap: 14px;
    ${media.lg`
    gap: 41px;
    `}
    .column {
      min-width: 33%;
      margin-bottom: 24px;
      position: relative;
      transition: min-width 0.6s;
      z-index: 1;
      cursor: pointer;
      &.min-w-50 {
        min-width: 50%;
        ${media.lg`
        min-width: 100%;
      `}
      }

      .column-inner {
        transition: 0.6s;
        display: flex;
        gap: 16px;
        border: 1px solid ${({ theme }) => theme.colors.dividerColor};
        background-color: ${({ theme }) => theme.colors.whiteColor};
        border-top-left-radius: 24px;
        border-top-right-radius: 24px;
        border-bottom-left-radius: 24px;
        padding: 47px;
        height: 524px;
        .column-inner-left {
          display: none;
          img {
            width: 0;
            transition: width 1s ease-in-out;
            -moz-transition: width 1s ease-in-out;
            -webkit-transition: width 1s ease-in-out;
          }
        }
        .column-inner-right {
          max-width: 350px;
          min-width: 350px;
          ${media.sm`
        min-width: 100%;
        `}
          .logo {
            margin-bottom: 26px;
          }
          h3 {
            margin-bottom: 18px;
          }
          .paragraph {
            color: ${({ theme }) => theme.colors.textMedium};
            font-size: ${({ theme }) => theme.fonts.baseFontSize};
            max-width: 356px;
            line-height: 24px;
            margin-bottom: 29px;
          }
          .badge {
            display: flex;
            gap: 8px;
            padding: 0;
            flex-wrap: wrap;
            margin-bottom: 16px;
            span {
              color: #7f8f97;
              font-weight: 400;
              border: 1px solid #7f8f97;
              padding: 4px 7px;
              border-radius: 2px;
            }
          }
        }
      }
      &.primary {
        .column-inner {
          background-color: ${({ theme }) => theme.colors.secondaryColor};
          h3,
          .paragraph {
            color: ${({ theme }) => theme.colors.whiteColor};
          }
          .badge {
            span {
              color: ${({ theme }) => theme.colors.whiteColor};
            }
          }
          button {
            span {
              color: ${({ theme }) => theme.colors.whiteColor};
            }
          }
        }
      }
      &:hover {
        min-width: 66%;
        ${media.lg`
           min-width: 100%;
         `}
        &.min-w-50 {
          min-width: 100%;
        }
        .column-inner-left {
          ${media.sm`
       display: none;
       img{
         width:0;
       }
    `}
          display: block;
          img {
            width: 100%;
            transition: width 0.55s ease-in-out;
            -moz-transition: width 0.55s ease-in-out;
            -webkit-transition: width 0.55s ease-in-out;
          }
        }
      }
    }
  }
`;

export default DemoServiceWrapper;
