import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const BlogDetailsWrapper = styled.div`
  background-image: url('/shopping-cart.png');
  width: 100%;
  height: 497px;
  padding: 96px 67px;
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  ${media.sm`
    padding: 96px 0;
  `}
  .breadcrumb {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
    color: ${({ theme }) => theme.colors.bodyLight};
    margin: 4px 0 11px 52px;
    ${media.xs`
      margin: 0 0 12px;
  `}
  }
  .details-flex {
    ${media.sm`
    flex-wrap: wrap;
  `}
  }
  .title {
    color: ${({ theme }) => theme.colors.whiteColor};
    margin-bottom: 26px;
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
      color: ${({ theme }) => theme.colors.bodyLight};
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
