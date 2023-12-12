import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const BlogAllWrapprt = styled.div`
  padding: 72px 0 120px;
  max-width: 931px;
  margin: 0 auto;

  .inner-banner {
    background-image: url("/blog-bg.svg");
    background-size: cover;
    height: 624px;
    border-radius: 24px 24px 0;
    background-position: right;
    display: flex;
    flex-direction: column;
    padding: 48px;
    ${media.sm`
      height: auto;
    `}
    ${media.xs`
      padding: 32px;
    `}
    .full-flex {
      flex: 1;
      ${media.sm`
      margin-bottom: 32px;
    `}
    }
    .blog-title {
      h2 {
        color: ${({ theme }) => theme.colors.whiteColor};
        line-height: 52px;
        ${media.sm`
          line-height: 32px;
        `}
      }
      .banner-desc {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 32px;
        h1,h2,h3,h4,h5,h6 {
          display: none;
        }
        p {
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
          color: ${({ theme }) => theme.colors.dividerColor};
          line-height: 24px;
        }
        span {
          color: ${({ theme }) => theme.colors.dividerColor};
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
          font-family: 'Inter Tight', sans-serif;
        }
      }
      
    }
    .timer {
      margin-bottom: 34px;
      display: flex;
      align-items: center;
      span {
        margin-left: 12px;
        color: ${({ theme }) => theme.colors.dividerColor};
      }
    }
    .author-name {
      color: ${({ theme }) => theme.colors.dividerColor};
      display: flex;
      gap: 50px;
      flex-wrap: wrap;
      ${media.xs`
        gap: 16px;
      `}
    }
  }
`;

export default BlogAllWrapprt;
