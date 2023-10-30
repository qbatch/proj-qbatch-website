import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const StoriesWrapper = styled.div`
  padding: 120px 0;

  .heading {
    margin-bottom: 28px;
  }
  .desc {
    letter-spacing: 0.2px;
  }
  .wrapper {
    margin-top: 76px;

    .column {
      margin-bottom: 24px;
      
      .column-inner {
        display: flex;
        border: 1px solid ${({ theme }) => theme.colors.dividerColor};
        background-color: ${({ theme }) => theme.colors.whiteColor};
        border-radius: 24px 24px 0 24px;
        height: 524px;
        transition: border 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
        &:hover {
          box-shadow: 4px 4px 24px 0px rgba(0, 0, 0, 0.16);
          &.primary-boder {
            border: 1px solid ${({ theme }) => theme.colors.primaryColor};
          }
        }
        .column-inner-left {
          img {
            border-radius: 24px 0 0 24px;
            max-width: none;
          }
        }
        .close-image {
          opacity: 0;
          height: 0;
          transition: opacity 0.5s ease-in-out;
          img {
            border-radius: 24px 24px 0 24px;
          }
        }
        .column-inner-right {
          position: relative;
          ${media.lg`
            width: 100%;
            max-width: 100%;
            .paragraph{
              max-width: 100% !important;
            }
          `}
          .content {
            opacity: 1;
            padding: 48px 47px 48px 73px;
          }
          &.close-column-inner {
            .content {
              padding-left: 48px;
            }
            button {
              position: absolute;
              bottom: 44px;
              left: 48px;
            }
          }
          .logo {
            margin-bottom: 32px;
          }
          button {
            position: absolute;
            bottom: 44px;
            left: 73px;
          }
          h3 {
            margin-bottom: 18px;
            letter-spacing: 0.3px;
            font-weight: ${({ theme }) => theme.fontWeight.light};
          }

          .paragraph {
            color: ${({ theme }) => theme.colors.textMedium};
            font-size: ${({ theme }) => theme.fonts.baseFontSize};
            line-height: 24px;
            margin-bottom: 30px;
            letter-spacing: 0;
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
              letter-spacing: 0.2px
            }
          }
          &:hover {
            &.close-column-inner {
              .close-image {
                opacity: 1;
                height: auto;
              }
              .content {
                display: none;
              }
            }
          }
        }
      }
    }
  }
`;

export default StoriesWrapper;
