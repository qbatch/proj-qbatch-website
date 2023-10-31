import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const StoriesWrapper = styled.div`
  padding: 120px 0;
  ${media.sm`
    padding: 60px 0;
  `}
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
        height: auto;
        min-height: 524px;
        transition: border 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
        ${media.sm`
          flex-direction: column;
        `}
        &:hover {
          box-shadow: 4px 4px 24px 0px rgba(0, 0, 0, 0.16);
          &.primary-boder {
            border: 1px solid ${({ theme }) => theme.colors.primaryColor};
          }
        }
        .close-image {
          opacity: 0;
          height: 0;
          transition: opacity 0.5s ease-in-out;
          img {
            border-radius: 24px 24px 0 24px;
            width: 100%;
            height: 522px;
          }
        }
        .column-inner-right {
          width: 51%;
          position: relative;
          ${media.sm`
              width: 100%;
          `}
          .content {
            opacity: 1;
            padding: 48px 47px 48px 70px;
            margin-bottom: 24px;
            ${media.md`
              padding: 48px 32px 48px 32px;
            `}
          }
          &.close-column-inner {
            width: 100%;
            ${media.sm`
                min-height: 524px;
              `}
            .content {
              padding-left: 48px;
              ${media.sm`
                padding: 48px 32px 48px 32px;
              `}
            }
            button {
              position: absolute;
              bottom: 44px;
              left: 48px;
              ${media.sm`
              left: 32px;
            `}
            }
          }
          .logo {
            margin-bottom: 32px;
          }
          button {
            position: absolute;
            bottom: 44px;
            left: 73px;
            ${media.md`
              left: 32px;
            `}
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
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 6;
            -webkit-box-orient: vertical;
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

const ImageOpenStyle = styled.div`
    background-image: url(${(props) => (props.src ? `${props.src}` : '')});
    width: 49%;
    border-radius: 24px 0 0 24px;
    background-size: cover;
    ${media.sm`
      width: 100%;
      height: 350px;
      background-position: center;
      border-radius: 24px 24px 0 0;
    `}
`

export  {StoriesWrapper, ImageOpenStyle};
