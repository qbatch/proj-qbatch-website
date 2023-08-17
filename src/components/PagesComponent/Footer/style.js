import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  span,
  li {
    color: ${({ theme }) => theme.colors.bodyLight};
    line-height: 24px;
    ${media.xs`
     font-size: 14px;
    `}
  }
  .footer-section {
    padding: 96px 0;
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
        margin-bottom: 8px;
        img {
          margin-top: 4px;
        }
      }
    }
    .footer-email {
      h4 {
        color: ${({ theme }) => theme.colors.whiteColor};
        line-height: 32px;
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
      cursor: pointer;
      position: relative;
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
      a {
        color: ${({ theme }) => theme.colors.bodyLight};
        text-decoration: none;
        transition: color 0.5s ease-out;
      }
      &:hover {
        a {
          color: ${({ theme }) => theme.colors.whiteColor};
        }
        &::before {
          width: 18px;
        }
      }
      a{
        color: ${({ theme }) => theme.colors.bodyLight};
        text-decoration:none;
      }
    }
  }
  .footer-menu-bottom {
    ul {
      padding-top: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 64px;
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
    .follow-section {
      ${media.xs`
        width: 100%;
      `}
    }
    .follow-us {
      color: ${({ theme }) => theme.colors.dividerColor};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      ${media.xs`
        text-align: center;
        width: 100%;
      `}
    }
    .social-icons {
      margin-left: 32px;
      gap: 16px;
      ${media.xs`
        justify-content: center;
        width: 100%;
        margin-left: 0;
        margin-top: 10px;
      `}
      div {
        cursor: pointer;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        transition: background-color 0.5s ease-out;
        img {
          filter: invert(61%) sepia(8%) saturate(960%) hue-rotate(170deg) brightness(90%) contrast(81%);
          transition: filter 0.5s ease-out;
        }
        &:hover {
          img {
            filter: invert(100%) sepia(33%) saturate(1%) hue-rotate(246deg) brightness(104%) contrast(101%);
          }
        }
      }
      .facebook-icon {
        &:hover {
          background-color: rgba(53, 121, 234, 1);
        }
      }
      .instagram-icon {
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
`;

export default FooterWrapper;
