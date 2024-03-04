import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const DrawerWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  color: #fff;
  padding: 98px 0 96px;
  ${media.sm`
   padding: 96px 0 40px;
  `}
  box-sizing: border-box;
  background-image: url('/drawer-bg.svg');
  background-size: cover;
  position: relative;
  min-height: 100vh;
  .cross-icon {
    position: absolute;
    right: 40px;
    top: 40px;
    cursor: pointer;
  }
  .menu-main {
    height: 478px;
    gap: 144px;
    .hire-developers-menu {
      gap: 73px;
      .inner-menu {
        gap: 56px;
      }
      .menu-heading {
        margin-left: 17px;
      }
    }
    .nav-item {
      height: 24px;
      &:first-child {
        min-width: 88px;
      }
      &:nth-child(2) {
        min-width: 156px;
      }
      &:nth-child(3) {
        min-width: 100px;
      }
      &:nth-child(4) {
        min-width: 138px;
      }

      .nav-link {
        font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
        color: ${({ theme }) => theme.colors.bodyLight};
        position: relative;
        transition: color 0.5s ease-out;

        &::after {
          display: none;
        }
        &::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -3px;
          height: 2px;
          width: 0;
          border-bottom: 2px solid ${({ theme }) => theme.colors.dangerColor};
          transition: all 0.5s ease-out;
        }
        &:hover {
          color: ${({ theme }) => theme.colors.whiteColor};
          font-weight: ${({ theme }) => theme.fontWeight.bold};
          &::before {
            width: 24px;
          }
        }
      }
      .active {
        color: ${({ theme }) => theme.colors.whiteColor};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        &::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -3px;
          height: 2px;
          width: 24px;
          border-bottom: 2px solid ${({ theme }) => theme.colors.dangerColor};
          transition: all 0.5s ease-out;
        }
      }
    }
  }

  .dropdown-menu {
    background-color: transparent;
    border: none;
    margin-top: 61px;
    padding: 0;
    transform: none !important;
    inset: 0 !important;
    .dropdown-header {
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      color: ${({ theme }) => theme.colors.whiteColor};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      padding: 0;
      margin-bottom: 15px;
    }
    .dropdown-item {
      line-height: 24px;
      padding: 0;
      margin-bottom: 16px;
      color: ${({ theme }) => theme.colors.dividerColor};
      text-decoration: none;
      animation: growDown 600ms ease-in-out forwards;
      transform-origin: top center;
      &:hover,
      &:focus,
      &:focus-visible,
      &:active {
        outline: none;
        box-shadow: none;
        background: none;
      }
    }
  }
  .sub-menu2 {
    margin-top: 35px;
  }
  .bottom-content {
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    padding-top: 50px;

    .drawer-email {
      h3 {
        color: ${({ theme }) => theme.colors.whiteColor};
        line-height: 40px;
        letter-spacing: 0.3px;
      }
      span {
        color: ${({ theme }) => theme.colors.dividerColor};
      }
      .email-input {
        padding: 26px 0 13px;
        display: flex;
        gap: 12px;
        border-bottom: 1px solid ${({ theme }) => theme.colors.textMedium};
        max-width: 83%;
        ${media.xs`
          max-width: 100%;
        `}
        input {
          width: 100%;
          background-color: transparent;
          border: none;
          color: ${({ theme }) => theme.colors.whiteColor};
          padding: 0;
          font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
          letter-spacing: 0.48px;
          ${media.xs`
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
          `}
          &::placeholder {
            color: ${({ theme }) => theme.colors.bodyLight};
          }
          &:focus {
            outline: none;
          }
        }
        div {
          cursor: pointer;
          position: relative;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          transition: all 0.5s ease-out;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            max-width: none;
            filter: invert(14%) sepia(93%) saturate(6280%) hue-rotate(352deg) brightness(98%) contrast(90%);
          }
          &:hover {
            background-color: ${({ theme }) => theme.colors.whiteColor};
            img {
              width: 22px;
              height: 22px;
              filter: invert(18%) sepia(100%) saturate(2276%) hue-rotate(196deg) brightness(95%) contrast(102%);
            }
          }
        }
      }
    }
    .bottom-menu {
      margin-top: 9px;
      li {
        line-height: 24px;
        cursor: pointer;
        margin-bottom: 16px;
        a{
          color: ${({ theme }) => theme.colors.bodyLight};
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .social-section {
      margin-top: 11px;
      ${media.sm`
        margin-top: 24px;
      `}
      .follow-us {
        color: ${({ theme }) => theme.colors.dividerColor};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        margin-bottom: 18px;
        display: block;
        ${media.xs`
        text-align: center;
        width: 100%;
      `}
      }
    }
  }
  @media (max-width: 1314px) {
    .menu-main {
      gap: 90px;
      ${media.lg`
        gap: 60px;
      `}
      ${media.md`
       gap: 17px;
      `}
      ${media.sm`
       height: auto;
       margin-bottom: 20px;
       flex-direction: column;
       gap: 5px;
      `}
      .hire-developers-menu {
        ${media.md`
         gap: 30px;
        `}
        ${media.sm`
          flex-wrap: wrap;
        `}
        .inner-menu {
          ${media.md`
            gap: 30px;
        `}
        }
      }
      .nav-item {
        ${media.sm`
          height: auto;
          margin-bottom: 20px;
          `}
        .dropdown-menu {
          ${media.sm`
            position: static !important;
            height: auto;
            margin-top: 30px;
          `}
        }
      }
    }
  }
  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(1.1);
    }
    100% {
      transform: scaleY(1);
    }
  }
`

export default DrawerWrapper;
