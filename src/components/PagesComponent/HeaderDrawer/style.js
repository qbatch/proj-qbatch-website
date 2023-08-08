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
  background-image: url("/drawer-bg.svg");
  background-size: cover;
  position: relative;
  .cross-icon {
    position: absolute;
    right: 40px;
    top: 40px;
    cursor: pointer;
  }
  .menu-main {
    height: 57.3vh;
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

        &::after {
          display: none;
        }
        &::before {
          content: "";
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
          content: "";
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
    .dropdown-header {
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      color: ${({ theme }) => theme.colors.whiteColor};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      padding: 0;
      margin-bottom: 15px;
    }
    .dropdown-item {
      color: ${({ theme }) => theme.colors.dividerColor};
      line-height: 24px;
      padding: 0;
      margin-bottom: 16px;
      &:hover {
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
            filter: invert(14%) sepia(93%) saturate(6280%) hue-rotate(352deg)
              brightness(98%) contrast(90%);
          }
          &:hover {
            background-color: ${({ theme }) => theme.colors.whiteColor};
            img {
              width: 22px;
              height: 22px;
              filter: invert(18%) sepia(100%) saturate(2276%) hue-rotate(196deg)
                brightness(95%) contrast(102%);
            }
          }
        }
      }
    }
    .bottom-menu {
      margin-top: 9px;
      li {
        line-height: 24px;
        color: ${({ theme }) => theme.colors.bodyLight};
        cursor: pointer;
        margin-bottom: 16px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .social-section {
      margin-top: 11px;
      .follow-us {
        color: ${({ theme }) => theme.colors.dividerColor};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        ${media.xs`
        text-align: center;
        width: 100%;
      `}
      }
      .social-icons {
        margin-top: 18px;
        gap: 16px;
        div {
          cursor: pointer;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          transition: background-color 0.5s ease-out;
          img {
            filter: invert(61%) sepia(8%) saturate(960%) hue-rotate(170deg)
              brightness(90%) contrast(81%);
            transition: filter 0.5s ease-out;
            max-width: none;
          }
          &:hover {
            img {
              filter: invert(100%) sepia(33%) saturate(1%) hue-rotate(246deg)
                brightness(104%) contrast(101%);
            }
          }
        }
        .facebook-icon {
          &:hover {
            background-color: rgba(53, 121, 234, 1);
          }
        }
        .insta-icon {
          transition: background 0.5s ease-out;
          &:hover {
            background: radial-gradient(
              circle at 30% 107%,
              #fdf497 0%,
              #fdf497 5%,
              #fd5949 45%,
              #d6249f 60%,
              #285aeb 90%
            );
          }
        }
        .linkedin-icon {
          &:hover {
            background-color: rgba(0, 122, 185, 1);
          }
        }
        .twitter-icon {
          &:hover {
            background-color: rgba(0, 166, 222, 1);
          }
        }
        .behance-icon {
          &:hover {
            background-color: rgba(65, 118, 250, 1);
          }
        }
        .youtube-icon {
          &:hover {
            background-color: rgba(255, 0, 0, 1);
          }
        }
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
`;

export default DrawerWrapper;
