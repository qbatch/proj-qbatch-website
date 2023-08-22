import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const DemoServiceWrapper = styled.div`
overflow: hidden;
  .wrapper {
    display: flex;
    transition: transform 0.6s;
    .column {
      min-width: 33.33%;
      padding: 10px;
      position: relative;
      transition: min-width 0.6s;
      z-index: 1;
      cursor: pointer;
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
      .column-inner {
        display: flex;
        align-items: center;
        gap: 16px;
        border: 1px solid ${({ theme }) => theme.colors.dividerColor};
        background-color: ${({ theme }) => theme.colors.whiteColor};
        border-top-left-radius: 24px;
        border-top-right-radius: 24px;
        border-bottom-left-radius: 24px;
        padding: 47px;
        height: 524px;
        .column-inner-left {
          img {
            opacity: 0;
            transition: opacity 0.6s;
            width: 0;
          }
        }
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

          span {
            color: #7f8f97;
            font-weight: 400;
            border: 1px solid #7f8f97;
            padding: 4px 7px;
            border-radius: 2px;
          }
        }
        button {
          position: absolute;
          bottom: 46px;
        }
      }
      &:hover {
        min-width: 66.33%;
        .column-inner {
          .column-inner-left {
            img {
              opacity: 1;
              height: 400px;
              width: 400px;
            }
          }
        }
      }
    }
  }
`;

export default DemoServiceWrapper
