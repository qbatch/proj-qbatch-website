import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  span,
  li {
    color: ${({ theme }) => theme.colors.bodyLight};
    line-height: 24px;
    letter-spacing: 0.14px;
    ${media.xs`
     font-size: 14px;
    `}
  }
  .footer-section {
    padding: 96px 0 96px;
    ${media.sm`
     padding: 40px 0;
    `}
    .footer-contact {
      padding-top: 6px;
      ${media.sm`
       padding: 12px 0;
      `}
      .address {
        margin-left: 28px;
      }
      div {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        margin-bottom: 9px;
        img {
          margin-top: 4px;
        }
      }
    }
    .footer-email {
      .text-h4 {
        color: ${({ theme }) => theme.colors.whiteColor};
        line-height: 32px;
        display: block;
        padding-bottom: 8px;
        letter-spacing: 0;
      }
      .email-input {
        padding: 39px 0 9px;
        display: flex;
        gap: 12px;
        border-bottom: 1px solid ${({ theme }) => theme.colors.textMedium};
        input {
          width: 100%;
          background-color: transparent;
          border: none;
          color: ${({ theme }) => theme.colors.whiteColor};
          padding: 0;
          &::placeholder {
            color: ${({ theme }) => theme.colors.bodyLight};
          }
          &:focus {
            outline: none;
          }
        }
        button {
          span {
            ${media.lg`
              display: none;
            `}
            ${media.sm`
              display: block;
            `}
            ${media.xs`
              display: none;
            `}
          }
        }
      }
    }
  }
  .footer-menu {
    ul {
      padding: 6px 0 0;
      ${media.sm`
       padding: 0;
      `}
    }
    li {
      margin-bottom: 8px;
      a {
        color: ${({ theme }) => theme.colors.bodyLight};
        text-decoration: none;
        transition: color 0.5s ease-out;
        position: relative;
        letter-spacing: 0.14px;
        cursor: pointer;
          &::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          height: 2px;
          width: 0;
          border-bottom: 2px solid ${({ theme }) => theme.colors.dangerColor};
          transition: all 0.5s ease-out;
          }
          &:hover {
            color: ${({ theme }) => theme.colors.whiteColor};
            &::before {
              width: 18px;
            }
          }
      }
    }
  }
  .footer-menu-bottom {
    ul {
      padding-top: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 58px;
    margin-right: 4px;
      ${media.lg`
        gap: 30px;
      `}
      ${media.sm`
        gap: 10px;
        margin-top: 10px;
      `}
      ${media.xs`
        justify-content: center;
      `}
    }
  }
  .social-section {
    padding: 24px 0;
    border-top: 1px solid ${({ theme }) => theme.colors.textMedium};
    justify-content: space-between;
    ${media.xs`
      justify-content: center;
    `}
    .follow-section {
      ${media.xs`
        justify-content: center;
      `}
    }
    .follow-us {
      color: ${({ theme }) => theme.colors.dividerColor};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      margin-right: 32px;
      ${media.xs`
        text-align: center;
        width: 100%;
        margin-right: 0;
      `}
    }
  }
`;

export default FooterWrapper;
