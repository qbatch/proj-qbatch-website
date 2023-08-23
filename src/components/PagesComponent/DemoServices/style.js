import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const DemoServiceWrapper = styled.div`
  overflow: hidden;
  .wrapper {
    display: flex;
    transition: transform 0.6s;
    gap: 14px;
    .column {
      min-width: 33%;
      margin-bottom: 16px;
      position: relative;
      transition: min-width 0.6s;
      z-index: 1;
      cursor: pointer;
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
            visibility: hidden;
            transition: visibility 0.6s;
            width: 0;
          }
        }
        .column-inner-right {
          max-width:350px;
          min-width:350px;
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
        &.w-50 {
          min-width: 100%;
        }
        .column-inner-left{
          img{
            visibility:visible ;
            width:300px;
          }
        }
      }
    }
  }
`;

export default DemoServiceWrapper
