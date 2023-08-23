import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const DemoServiceWrapper = styled.div`
overflow: hidden;
padding: 97px 0;
.heading{
  margin-bottom: 28px;
}
.services-wrapper{
  padding-top: 34px;
}
  .wrapper {
    display: flex;
    transition: transform 0.6s;
    gap: 24px;
    .column {
      min-width: 32.3%;
      padding-top: 24px;
      position: relative;
      transition: min-width 0.6s;
      z-index: 1;
      cursor: pointer;
      &:last-child{
        padding-right: 0;
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
            opacity: 0;
            transition: opacity 0.6s;
            width: 0;
          }
        }
        .logo {
          margin-bottom: 26px;
        }
        h3 {
          margin-bottom: 16px;
        }
        .paragraph {
          color: ${({ theme }) => theme.colors.textMedium};
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
          max-width: 356px;
          line-height: 24px;
          margin-bottom: 32px;
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
          bottom: 48px;
        }
      }
      &:hover {
        min-width: 64.6%;
        .column-inner {
          .column-inner-left {
            display: block;
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
