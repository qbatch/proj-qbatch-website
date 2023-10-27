import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const StoriesWrapper = styled.div`
  overflow: hidden;
  padding: 98px 0;

  .heading {
    margin-bottom: 27px;
  }

  .stroies-wrapper {
    margin-top: 76px;
    ${media.md`
      display: flex;
      flex-wrap: wrap;
    `}
    ${media.sm`
      display: block;
    `}
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    transition: transform 0.6s;
    gap: 24px;

    ${media.md`
      gap: 41px;
      width: 50%;

      &:nth-child(odd){
        .column{
          margin-right: 12px;
        }
      }

      &:nth-child(even){
        .column{
          margin-left: 12px;
        }
      }

      .column{
        .column-inner{
          padding: 47px 33px !important;
          height: 100% !important;

          .column-inner-right{
            min-width: 0 !important;
          }
        }
      }
    `}

    ${media.sm`
      width: 100%;

      &:nth-child(odd){
        .column{
          margin-right: 0;
        }
      }

      &:nth-child(even){
        .column{
          margin-left: 0;
        }
      }
    `}

    .column {
      min-width: calc(100% / 3.11);
      margin-bottom: 24px;
      position: relative;
      transition: min-width 0.6s;
      z-index: 1;
      cursor: pointer;

      .column-inner {
        transition: 0.6s;
        display: flex;
        gap: 54px;
        border: 1px solid ${({ theme }) => theme.colors.dividerColor};
        background-color: ${({ theme }) => theme.colors.whiteColor};
        border-radius: 24px;
        height: 524px;

        .column-inner-left {
          img {
            border-radius: 24px 0 0 24px;
            transition: width 1s ease-in-out;
            -moz-transition: width 1s ease-in-out;
            -webkit-transition: width 1s ease-in-out;
          }
        }

        .column-inner-right {
          max-width: 350px;
          padding: 48px 48px 48px 0;
          display:flex;
          flex-direction: column;
          ${media.lg`
            width: 100%;
            max-width: 100%;
            .paragraph{
              max-width: 100% !important;
            }
          `}
            .content {
              flex: 1;
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

      ${media.sm`
        width: 100%;
      `}

      &:hover {
        .column-inner-left {
          ${media.md`
            display: none;

            img {
              width: 0;
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

export default StoriesWrapper;
