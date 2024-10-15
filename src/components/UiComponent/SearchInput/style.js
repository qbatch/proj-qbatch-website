import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const SearchWrapper = styled.div`
  .search-container {
    position: relative;
    height: 50px;
    width: 64px;
    ${media.md`
      width: 100%;
      display: flex;
    `}
  }

  .mglass {
    display: inline-block;
    pointer-events: none;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  .searchbutton {
    position: absolute;
    font-size: 28px;
    width: 64px;
    height: 48px;
    margin: 0;
    border: 1px solid ${({ theme }) => theme.colors.dividerColor};
    background-color: ${({ theme }) => theme.colors.whiteColor};
    padding: 12px 20px;
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    ${media.md`
      right: 0;
      border-radius: 0 32px 32px 0;
      border-left: 0;
    `}
  }

  .search:focus + .searchbutton {
    transition-duration: 0.4s;
    -moz-transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s;
    -o-transition-duration: 0.4s;
    background-color: white;
    color: black;
    border-left: none;
    border-radius: 0 32px 32px 0;
  }

  .search {
    position: absolute;
    left: 49px;
    background-color: white;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.dividerColor};
    color: ${({ theme }) => theme.colors.textMedium};
    border-right: none;
    border-left: none;
    border-radius: 32px 0 0 32px;
    padding: 0;
    width: 0;
    height: 48px;
    z-index: 10;
    transition-duration: 0.4s;
    -moz-transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s;
    -o-transition-duration: 0.4s;
    ${media.md`
      position: relative;
      width: 100%;
      z-index: 0;
      padding-left: 24px;
      &.expandright{
        left: 0;
        right: 0;
        border-right:  1px solid ${({ theme }) => theme.colors.dividerColor};
        border-left:  1px solid ${({ theme }) => theme.colors.dividerColor};
        border-radius: 32px;
      }
    `}
  }

  .search:focus {
    width: 300px;
    padding: 0 16px 0 0;
    border-left:  1px solid ${({ theme }) => theme.colors.dividerColor};
    ${media.xs`
      width: 234px;
    `}
  }

  .expandright {
    left: auto;
    right: 49px;
  }

  .expandright:focus {
    padding: 0 0 0 16px;
  }
  &.portfolio-search {
    .search-container {
      display: flex;
      width: 100%;
      height: 36px;
    }
    .searchbutton {
      position: static;
      border: none;
      padding: 0;
      background-color: transparent;
      width: 32px;
      height: 36px;
      font-size: 24px;
      ${media.mobile`
        height: 30px;
        font-size: 20px;
      `}
    }
    .search {
      position: static;
      border: none;
      background-color: transparent;
      height: 34px;
      font-weight: ${({ theme }) => theme.fontWeight.light};
      ${media.md`
        padding-left: 0;
      `}
      ${media.mobile`
        height: 28px;
        font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
      `}
    }
    .search:focus {
      width: 230px;
      ${media.md`
        width: 100%;
      `}
    }
    .search:focus + .searchbutton {
      background-color: transparent;
    }
  }
`;

export default SearchWrapper;
