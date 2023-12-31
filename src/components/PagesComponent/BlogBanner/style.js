import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const BlogBannerWrapper = styled.div`
  padding: 120px 0 112px;
  text-align: center;

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
    ${media.xs`
      line-height: 32px;
    `}
    }
    h2 {
      color: ${({ theme }) => theme.colors.textMedium};
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      line-height: 40px;
      letter-spacing: 0.7px;
    }
  }
`;

export default BlogBannerWrapper;
