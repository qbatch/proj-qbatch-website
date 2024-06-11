import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const BlogAllWrapprt = styled.div`
  padding: 56px 0 0;
  .latest-heading {
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 32px;
  }
`
const InnerBannerWrapper = styled.div`
  position: relative;
  overflow: hidden;
  ${media.md`
       border: 1px solid #D2D9DC;
       border-radius: 16px 16px 0px 16px;
    `}
  .blog-image{
    max-width: 761px;
    width: 100%;
    height: 100%;
    border-radius: 24px 24px 0 24px;
    object-fit: cover;
    object-position: left;
    ${media.md`
      max-width: 100%;
      border-radius: 24px 24px 0 0;
      height: 200px;
    `}
  }
  .blog-badge {
    margin-bottom: 36px;
    ${media.md`
      margin-bottom: 24px;
    `}
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
    padding: 48px 0px 48px 22px;
    ${media.md`
      padding: 24px;
    `}
    ${media.mobile`
       padding: 24px;
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
      margin-bottom: 24px;
      cursor: pointer;
    }
    .banner-desc {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 72px;
      ${media.sm`
        margin-bottom: 32px;
      `}
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
        color: ${({ theme }) => theme.colors.bodyLight};
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
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.colors.bodyLight};
    font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
    line-height: 16px;
    img{
      filter: brightness(0) saturate(100%) invert(23%) sepia(65%) saturate(1901%) hue-rotate(190deg) brightness(97%) contrast(106%);
    }
  }
  .author-name {
    color: ${({ theme }) => theme.colors.bodyLight};
    span {
      display: flex;
      align-items: center;
      gap: 16px;
    }
  }
`

export { BlogAllWrapprt, InnerBannerWrapper }
