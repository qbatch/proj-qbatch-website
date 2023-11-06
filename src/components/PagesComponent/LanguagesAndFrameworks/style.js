import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const LanguagesWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  padding: 120px 0;
  ${media.sm`
    padding: 60px 0;
    text-align: center;
  `}
  .desktop-data {
    ${media.md`
      display: none;
    `}
  }
  .languages-header {
    margin-bottom: 76px;
    h2 {
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 30px;
      letter-spacing: 0;
    }
    p {
      letter-spacing: 0;
    }
  }
  .fixed-slider-pagination {
    display: flex;
    justify-content: center;
   
    ul {
      padding-left: 0;
    }
    li {
      margin-bottom: 32px;
      padding-left: 20px;
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      font-size: 20px;
      font-weight: 400;
      line-height: 32px;
      position: relative;
      &:last-child {
        margin-bottom: 0;
      }
      ${media.lg`
        font-size: 16px;
        line-height: 24px;
      `}
      cursor: pointer;
      &:before {
        width: 8px;
        height: 8px;
        left: 0;
        display: inline-block;
        border-radius: 12px;
        border: 1px solid ${({ theme }) => theme.colors.dangerColor};
        background: #fff;
        content: "";
        top: 12px;
        position: absolute;
        ${media.lg`
          top: 8px;
        `}
      }
      &:after {
        width: 1px;
        height: 38px;
        content: "";
        position: absolute;
        left: 3.5px;
        top: 25px;
        background: #d2d9dc;
        ${media.lg`
          top: 20px;
          height: 30px;
        `}
      }
      &:last-of-type {
        &:after {
          display: none;
        }
      }
      &.active {
        font-size: 24px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primaryColor};
        ${media.lg`
          font-size: 20px;
          line-height: 24px;
        `}
        &:before {
          background: ${({ theme }) => theme.colors.dangerColor};
        }
      }
    }
  }
  .framework-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 46px;
    img {
      margin-bottom: 22px;
    }
  }
  .small-screen-data {
    display: none;
    width:100%;
    ${media.md`
      display: block;
    `}
    h3 {
      margin-bottom: 52px;
    }
  }
  .languages-btn {
    display: flex;
    justify-content: center;
    margin-top: 98px;
  }
`;

export default LanguagesWrapper;
