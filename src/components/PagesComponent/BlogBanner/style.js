import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const BlogBannerWrapper = styled.div`
  padding: 156px 0 112px;
  text-align: center;
  position: relative;
   .breadcrumb-wrapper{
    margin: auto;
    position: absolute;
    z-index: 99;
    width: 100%;
      top: 0;
      left: 0;
      background: #001A33;
      padding: 0;
  }
  .breadcrumb {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
    color: ${({ theme }) => theme.colors.whiteColor};
    margin: 0 0 12px 0;
    padding: 16px 96px;
    max-width: 1600px;
    margin: auto;
    overflow: scroll;
    a {
      color: ${({ theme }) => theme.colors.whiteColor};
      white-space: nowrap;
    }
    ${media.lg`
      padding: 16px 80px;
    `}
    ${media.md`
      padding: 16px 60px;
    `}
    ${media.sm`
      padding: 16px 40px;
    `}
    ${media.xs`
      padding: 16px 24px;
    `}
  }
${media.sm`
padding:86px 0px;
text-align: left;
`}
  .blog-banner {
    max-width: 690px;
    margin: 0 auto;
    h1 {
      color: ${({ theme }) => theme.colors.primaryColor};
      line-height: 82.28px;
      margin-bottom: 24px;
      ${media.lg`
      line-height: 52px;
    `}
    ${media.sm`
    margin-bottom: 12px;
    `}
    ${media.xs`
      line-height: 32px;
    `}
    }
    h2 {
      color: ${({ theme }) => theme.colors.textMedium};
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      line-height: 40px;
      letter-spacing: 0.7px;
      ${media.sm`
      line-height:32px;
      `}
    }
  }
`;

export default BlogBannerWrapper;
