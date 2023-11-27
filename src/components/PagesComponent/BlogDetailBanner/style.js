import styled from "styled-components";

const BlogDetailsWrapper = styled.div`
  background-image: url('/shopping-cart.png');
  width: 100%;
  height: 497px;
  padding: 96px 67px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  .breadcrumb {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
    color: ${({ theme }) => theme.colors.bodyLight};
    margin-left: 52px;
    margin-top: 4px;
    margin-bottom: 11px;
  }
  .title {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeH2};
    color: ${({ theme }) => theme.colors.whiteColor};
    margin-bottom: 26px;
  }
  .read-time {
    margin-left: 52px;
    display: flex;
    gap: 8px;
    color: ${({ theme }) => theme.colors.whiteColor};
    font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
  }
  .published-time {
    display: flex;
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
    margin-left: 52px;
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
    margin-left: 52px;
  }
`
export default BlogDetailsWrapper;
