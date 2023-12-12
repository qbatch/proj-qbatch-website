import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const BlogCardsWrapper = styled.div`
  padding: ${( props ) => (props.blogInner ? "96px 0 76px" : "74px 0 96px")};
  max-width: 931px;
  margin: 0 auto;
  ${media.sm`
    padding: 60px 0;
  `}
  .blog-heading {
    margin-bottom: 48px;
    h2 {
      color: ${({ theme }) => theme.colors.primaryColor};
      line-height: 52px;
      margin-bottom: 0;
    }
  }
  .inner {
    border: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-radius: 16px 16px 0px 16px;
    margin-bottom: 24px;
    .card-img {
      height: 240px;
      padding: 32px;
      position: relative;
      img {
        position: absolute;
        left: 0;
        top: 0;
        height: 240px;
        width: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 16px 16px 0 0;
        z-index: -1;
      }
    }
    .hours {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
      color: ${({ theme }) => theme.colors.bodyLight};
    }
    .inner-content {
      padding: 32px 32px 30px;
      ${media.sm`
       padding: 20px;
      `}
      .inner-title {
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        color: ${({ theme }) => theme.colors.bodyTextVariant};
        line-height: 32px;
        margin-bottom: 24px;
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
        margin: 26px 0 36px;
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
`;

export default BlogCardsWrapper;
