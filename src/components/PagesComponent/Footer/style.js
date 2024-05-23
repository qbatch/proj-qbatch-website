import styled from "styled-components";
import { media } from "../../../theme/media-mixins";
import footerImg from "../../../../static/footer-bg.png";

const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.footerBgColor};
  background-image: url(${footerImg});
  background-repeat: no-repeat;
  background-position: right 0;
  background-size: contain;
  ${media.md`
    background-size: cover;
  `}
  ${media.sm`
    background-image: none;
  `}
  span,
  li {
    color: ${({ theme }) => theme.colors.bodyLight};
    line-height: 24px;
    letter-spacing: 0.14px;
    ${media.xs`
     font-size: 14px;
    `}
  }
  a{
    color: ${({ theme }) => theme.colors.bodyLight};
    line-height: 24px;
    letter-spacing: 0.14px;
    transition: color 0.5s ease-out;
    ${media.xs`
     font-size: 14px;
    `}
    &:hover{
      color: ${({ theme }) => theme.colors.whiteColor};
    }
  }
  .newsletter-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
    padding: 20px 0 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.textColor};
    .stories-inbox {
      display: flex;
      align-items: center;
      gap: 20px;
      img {
        ${media.lg`
          width: 120px;
        `}
        ${media.xs`
          width: 80px;
        `}
      }
      h3 {
        color: ${({ theme }) => theme.colors.whiteColor};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        max-width: 375px;
        text-transform: capitalize;
        ${media.lg`
          font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
        `}
        ${media.md`
          max-width: 100%;
        `}
        ${media.xs`
          font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
          line-height:24px;
        `}
      }
    }
  }
  .footer-section {
    padding: 40px 0;
    ${media.sm`
     padding: 30px 0;
    `}
    span{
      font-weight: ${({ theme }) => theme.fontWeight.medium};
    }
    .footer-contact {
      padding-top: 6px;
      ${media.sm`
       padding: 12px 0;
      `}
      .address {
        margin-left: 28px;
      }
      .address-flag {
        margin-top: 0;
        margin-left: 4px;
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
  }
  .footer-email {
    display: flex;
    align-items: center;
    gap: 24px;
    ${media.md`
      margin-top: 24px;
    `}
    .email-input {
      padding-bottom: 16px;
      display: flex;
      gap: 12px;
      border-bottom: 1px solid #F6F7FAB2;
      width: 100%;
      input {
        width: 100%;
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.colors.whiteColor};
        padding: 0;
        &::placeholder {
          color: ${({ theme }) => theme.colors.whiteColor};
        }
        &:focus {
          outline: none;
        }
      }
    }
  }
  .footer-menu {
    h4 {
      color: ${({ theme }) => theme.colors.whiteColor};
      font-weight: ${({ theme }) => theme.fontWeight.medium};
      margin-bottom: 24px;
    }
    li {
      margin-bottom: 16px;
      font-weight:${({ theme }) => theme.fontWeight.medium};
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
      gap: 48px;
      ${media.lg`
        gap: 30px;
      `}
      ${media.sm`
        gap: 16px;
      `}
      ${media.xs`
        justify-content: center;
      `}
    }
  }
  .social-section {
    padding: 16px 0;
    border-top: 1px solid ${({ theme }) => theme.colors.textColor};
    background-color: #002343;
    .manage-contant {
      justify-content: space-between;
      gap: 8px;
      ${media.mobile`
        justify-content: center;
      `}
    }
    .follow-section {
      ${media.xs`
        justify-content: center;
      `}
    }
    .reserved-rights {
      span {
        font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
        color: ${({ theme }) => theme.colors.dividerColor};
        line-height: 18px;
      }
    }
  }
  .error-msg {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
    color: ${({ theme }) => theme.colors.dangerColor};
    position: absolute;
    bottom: -30px;
  }
`;

export default FooterWrapper;
