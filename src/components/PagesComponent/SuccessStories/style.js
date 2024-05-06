import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const StoriesWrapper = styled.div`
  padding: 120px 0;
  ${media.sm`
    padding: 60px 0;
  `}
  .heading {
    margin-bottom: 16px;
  }
  .desc {
    letter-spacing: 0.2px;
    line-height: 24px;
    margin-bottom: 0;
  }
  .wrapper {
    margin-top: 96px;

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
        .close-small-img {
          display: none;
          width: 98%;
          ${media.lg`
            display: block;
          `}
          ${media.sm`
            width: 100%;
          `}
        }
        .close-image {
          opacity: 0;
          height: 0;
          transition: opacity 0.5s ease-in-out;
          ${media.lg`
            display: none;
          `}
          img {
            border-radius: 24px 24px 0 24px;
            width: 100%;
            height: 522px;
            object-fit: cover;
            object-position: center;
          }
        }
        .column-inner-right {
          width: 51%;
          position: relative;
          ${media.sm`
              width: 100%;
              min-height: 450px;
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
            .content {
              padding-left: 48px;
              ${media.lg`
                padding-left: 70px;
              `}
              ${media.md`
                padding-left: 32px;
              `}
            }
            button {
              position: absolute;
              bottom: 44px;
              left: 48px;
              ${media.lg`
                left: 70px;
              `}
                ${media.md`
                left: 32px;
              `}
            }
          }
          .logo {
            margin-bottom: 32px;
            height: 48px;
          }
          button {
            position: absolute;
            bottom: 44px;
            left: 70px;
            ${media.md`
              left: 32px;
            `}
          }
          h3 {
            margin-bottom: 16px;
            letter-spacing: 0.3px;
            font-weight: ${({ theme }) => theme.fontWeight.semiBold};
            color: ${({ theme }) => theme.colors.midGray};
          }

          .paragraph {
            color: ${({ theme }) => theme.colors.textMedium};
            font-size: ${({ theme }) => theme.fonts.baseFontSize};
            line-height: 24px;
            margin-bottom: 32px;
            letter-spacing: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 7;
            -webkit-box-orient: vertical;
          }

          .badge {
            display: flex;
            gap: 8px;
            padding: 0;
            flex-wrap: wrap;
            margin-bottom: 16px;

            span {
              color: ${({ theme }) => theme.colors.bodyLight};
              font-weight: ${({ theme }) => theme.fontWeight.light};
              border: 1px solid ${({ theme }) => theme.colors.dividerColor};
              padding: 4px 8px;
              border-radius: 2px;
              letter-spacing: 0.2px;
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
                ${media.lg`
                 display: block;
                `}
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
    width: ${(props) => (props.type ? "99%" : "49%")};
    height: ${(props) => (props.type ? "100%" : '')};
    border-radius: 24px 0 0 24px;
    background-size: cover;
    background-position: center;
    ${media.sm`
      width: 100%;
      height: 350px;
      background-position: center;
      border-radius: 24px 24px 0 0;
    `}
`

export  {StoriesWrapper, ImageOpenStyle};
