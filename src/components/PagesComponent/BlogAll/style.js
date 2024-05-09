import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const BlogAllWrapprt = styled.div`
  padding: 72px 0 120px;
  max-width: 931px;
  margin: 0 auto;

`
const InnerBannerWrapper = styled.div`
  border-radius: 24px 24px 0;
  border: 1px solid  ${({ theme }) => theme.colors.dividerColor};
  position: relative;
  overflow: hidden;
  .blog-image{
    aspect-ratio: 4/2;
  }
  .blog-badge-main{
    position: absolute;
    top: 48px;
    left: 48px;
    ${media.mobile`
      top: 32px;
      left: 32px;
    `}
  }
  .blog-wrapper{
    padding: 48px;
    ${media.mobile`
      padding: 32px;
    `}
  }
  ${media.sm`
      height: auto;
    `}
    .full-flex {
    flex: 1;
    ${media.sm`
      margin-bottom: 32px;
    `}
  }
  .blog-title {
    h2 {
      color: ${({ theme }) => theme.colors.bodyTextVariant};
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
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        display: none;
      }
      p {
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        color: ${({ theme }) => theme.colors.textMedium};
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
    div{
      margin-left: 12px;
    }
    span {
      color: ${({ theme }) => theme.colors.bodyTextVariant};
    }
    img{
      filter: brightness(0) saturate(100%) invert(23%) sepia(65%) saturate(1901%) hue-rotate(190deg) brightness(97%) contrast(106%);
    }
  }
  .author-name {
    color: ${({ theme }) => theme.colors.bodyTextVariant};
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    ${media.xs`
      gap: 16px;
    `}
  }
`

export { BlogAllWrapprt, InnerBannerWrapper }
