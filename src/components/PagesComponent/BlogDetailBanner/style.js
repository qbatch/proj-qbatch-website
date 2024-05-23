import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const BlogDetailsWrapper = styled.div`
  background-image: url('/blog-details-banner.svg');
  width: 100%;
  height: 497px;
  padding: 142px 67px 96px;
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  position: relative;
  ${media.sm`
    padding: 56px 0;
    height:auto;
  `}
  .details-flex {
    ${media.sm`
    flex-wrap: wrap;
  `}
  }
  .title {
    color: ${({ theme }) => theme.colors.whiteColor};
    margin-bottom: 26px;
    max-width: 650px;
  }
  .read-time {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    color: ${({ theme }) => theme.colors.whiteColor};
    font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
  }
  .published-time {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;

    span {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
      color: ${({ theme }) => theme.colors.whiteColor};
    }
    color: ${({ theme }) => theme.colors.whiteColor};
    font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
  }
  .gap-72 {
    gap: 72px;
    margin-bottom: 32px;
  }
  .chips {
    display: flex;
    gap: 8px;
    margin-bottom: 33px;
    span {
      background-color: ${({ theme }) => theme.colors.whiteColor};
      font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
      color: ${({ theme }) => theme.colors.primaryColor};
      border-radius: 50px;
      padding: 7px 13px;
    }
  }
  .author-name {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
    color: ${({ theme }) => theme.colors.dividerColor};
  }
`
export default BlogDetailsWrapper;
