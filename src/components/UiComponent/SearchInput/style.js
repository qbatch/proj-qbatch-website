import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const SearchWrapper = styled.div`
  .search-container {
    position: relative;
    height: 50px;
    width: 64px;
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
`;

export default SearchWrapper;
