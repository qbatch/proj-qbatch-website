import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const BlogBannerWrapper = styled.div`
  background-image: url('/blog-details-banner.svg');
  width: 100%;
  padding: 142px 0 96px;
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  position: relative;
  margin-bottom: 48px;
  ${media.md`
    background: none;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
  `}
  ${media.sm`
    padding: 96px 0 56px;
    `}
  .blog-banner {
    h1 {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 16px;
    }
    p {
      color: ${({ theme }) => theme.colors.dividerColor};
      font-weight: ${({ theme }) => theme.fontWeight.normal};
      ${media.sm`
        line-height: 24px;
      `}
    }
  }
`;

export default BlogBannerWrapper;
