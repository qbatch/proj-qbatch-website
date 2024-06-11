import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const BlogCardsWrapper = styled.div`
  padding: ${( props ) => (props.padding ? props.padding : "56px 0")};
  ${media.sm`
    padding: ${( props ) => (props.padding ? "0" : "56px 0")};
  `}
  .no-data-text{
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: #c3c2c2;
    display: block;
    width: 100%;
    text-align: center;
  }
  .blog-heading {
    margin-bottom: 48px;
    ${media.xs`
      margin-bottom: 32px;
    `}
    h2 {
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 0;
    }
  }
  .blog-title{
    margin-bottom: 32px;
    cursor: pointer;
  }
  .card-main {
    &:last-child {
      ${media.xs`
        .inner {
          margin-bottom: 0;
        }
      `}
    }
  }
  .inner {
    border: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-radius: 16px 16px 0px 16px;
    margin-bottom: 24px;
    .card-img {
      aspect-ratio: 3/1.6;
      padding: 32px;
      position: relative;
      ${media.mobile`
        padding: 16px;
        height: 210px;
      `}
      ${media.xs`
         height: 200px;
      `}
      img {
        position: absolute;
        left: 0;
        top: 0;
        aspect-ratio: 3/1.6;
        width: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 16px 16px 0 0;
        z-index: -1;
        ${media.mobile`
          object-fit: fill;
          height: 210px;
        `}
        ${media.xs`
          height: 200px;
        `}
      }
    }
    .hours {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
      color: ${({ theme }) => theme.colors.bodyLight};
    }
    .inner-content {
      padding: 32px 16px;
      ${media.sm`
       padding: 20px;
      `}
      .inner-title {
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        color: ${({ theme }) => theme.colors.bodyTextVariant};
        font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
        line-height: 32px;
        margin: 24px 0;
        letter-spacing: 0;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        ${media.xs`
          line-height: 24px;
        `}
      }
      .timer {
        display: flex;
        align-items: center;
        gap: 8px;
        span {
          color: ${({ theme }) => theme.colors.bodyLight};
          font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
        }
      }
      .read-time {
        color: ${({ theme }) => theme.colors.textMedium};
      }
      .btn {
        margin-left: auto;
      }
    }
    &.first-card {
      .card-img {
        height: 100%;
        padding: 0;
        img {
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: 16px 0 0 16px;
          ${media.sm`
            height: 240px;
            position: static;
            border-radius: 16px 16px 0 0;
          `}
        }
      }
      .inner-content {
        padding: 44px 48px 48px 24px;
        ${media.sm`
         padding: 20px;
        `}
        h3 {
          color: ${({ theme }) => theme.colors.bodyTextVariant};
          font-weight: ${({ theme }) => theme.fontWeight.semiBold};
          line-height: 40px;
          letter-spacing: 0.7px;
          margin: 16px 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          ${media.xs`
            line-height: 32px;
          `}
        }
        .descripiton {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 24px;
          h1,h2,h3,h4,h5,h6 {
            display: none;
          }
          p {
            font-size: ${({ theme }) => theme.fonts.baseFontSize};
            line-height: 24px;
          }
          span {
            color: ${({ theme }) => theme.colors.textMedium};
            font-size: ${({ theme }) => theme.fonts.baseFontSize};
            font-family: 'Inter Tight', sans-serif;
          }
        }
      }
    }
  }
  &.might-wrapper {
    padding-top: 32px;
  }
  .load-more-btn {
    margin: 34px 0 64px;
    ${media.xs`
      margin: 34px 0 56px;
    `}
  }
`;

export default BlogCardsWrapper;
