import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ContentWrapper = styled.div`
  .row {
    max-width: 1193px;
    margin: 0 auto;
  }
  .content-section {
    padding-top: 96px;
    scroll-behavior: smooth;
    .inner-content {
      &.small-space {
        padding: 75px 0px;
        padding-bottom: 0px;
      }
      &.last-paragraph {
        padding: 31px 0;
        padding-bottom: 28px;
      }
      .paragraph {
        .heading-wrapper{
          position: relative;
          & > div{
            height: 100px;
            background-color: transparent;
            z-index: -1;
            position: absolute;
            top: -100px;
          }
        }
        h1,
        h3 {
          font-size: 22px;
          margin-bottom: 16px;
          span {
            font-family: 'Inter Tight', sans-serif;
            font-size: ${({ theme }) => theme.fonts.baseFontSizeH3};
            color: ${({ theme }) => theme.colors.bodyTextVariant};
            font-weight: ${({ theme }) => theme.fontWeight.semiBold} !important;
          }
        }
        h2 {
          font-size: 26px;
          margin: 48px 0 15px;
        }
        p {
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
          color: ${({ theme }) => theme.colors.bodyTextVariant};
          line-height: 24px;
          letter-spacing: 0px;
          margin-bottom: 20px;
          img {
            border-radius: 24px 24px 0 24px;
            margin: 40px 0;
          }
          span {
            color: ${({ theme }) => theme.colors.bodyTextVariant};
            font-size: ${({ theme }) => theme.fonts.baseFontSize};
            font-family: 'Inter Tight', sans-serif;
          }
        }
        ul, ol{
          margin-bottom: 20px;
          li{
            margin-bottom: 16px;
          }
        }
        .table {
          width: 100% !important;
        }
      }
    }
    .blog-title {
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .social-links {
      .title {
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        color: ${({ theme }) => theme.colors.primaryColor};
      }
      .social-link {
        margin-bottom: 16px;
        margin-top: -2px;
        li {
          padding: 0 10px;
          cursor: pointer;
        }
      }
    }
  }
  .can-help-button {
    margin-top: 51px;
  }
  .author-name {
    padding: 32px;
    border-radius: 24px 24px 0px 24px;

    border: 1px solid ${({ theme }) => theme.colors.disableColor};
    margin-left: 40px;
    ${media.sm`
      margin-left: 0;
    `}
    .avatar-box {
      gap: 23px;
      margin-bottom: 24px;
      .avatar-image {
        border-radius: 24px 24px 0 24px;
      }
      span {
        font-size: 20px;
        color: ${({ theme }) => theme.colors.primaryColor};
        line-height: 32px;
        width: 150px;
      }
    }
    .title {
      line-height: 23px;
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      display: -webkit-box;
      max-width: 400px;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .social-link {
      gap: 20px;
      li img{
        cursor:pointer;
      }
    }
    .mt-32 {
      margin-top: 32px;
    }
  }

  .divider {
    margin: 32px 0;
  }
  .might-section {
    margin-top: 72px;
  }
  .side-scroll {
    position: sticky;
    margin: 100px 0 100px 12px;
    border-radius: 8px 8px 0 8px;
    top: 20%;
    left: 0;
    height: 100%;
    max-width: 300px;
    background-color:  ${({ theme }) => theme.colors.whiteColor};
      box-shadow: 0 3px 15px rgba(0,0,0,0.16);
    .table-content-header{
      background-color: ${({ theme }) => theme.colors.onGradient};
      color: ${({ theme }) => theme.colors.gardientColor};
      width: 100%;
      padding: 8px 16px;
      display: block;
    }
    .side-scroll-content{
      padding: 8px 16px 0 0;
      li{
        font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
      }
    }
    a {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
      line-break: 18px;
      color: ${({ theme }) => theme.colors.textMedium};
      text-decoration: none;
      display: block;
      border-bottom: none;
      &.title {
        max-width: 250px;
        padding-bottom: 12px;
      }
      /* &.active {
        color: ${({ theme }) => theme.colors.primaryColor};
      } */
    }
  }

  .dashed-ul {
    .line {
      width: 28px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.textMedium};
      transition: all 400ms ease;
      height: 32px;
      user-select: none;
      cursor: pointer;
      &.active {
        border-bottom: 1px solid ${({ theme }) => theme.colors.primaryColor};
      }
    }
  }
  .title-ul {
    opacity: 0;
    margin-top: 26px;
    transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
    .title {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
      color: ${({ theme }) => theme.colors.textMedium};
      margin-left: 20px;
      height: 32px;
      cursor: pointer;
      &.active {
        color: ${({ theme }) => theme.colors.primaryColor};
      }
    }
  }

  .subsribe-button {
    background-image: url('/email-bg.svg');
    height: auto;
    background-repeat: no-repeat;
    margin-left: 40px;
    padding: 48px;
    margin-top: 62px;
    background-position: right;
    background-size: cover;
    margin-bottom: 60px;
    border-radius: 24px 24px 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${media.sm`
      margin-left: 0;
    `}
    h2 {
      color: ${({ theme }) => theme.colors.dividerColor};
      line-height: 52px;
      margin-bottom: 0;
    }
    .subscribe-email {
      display: flex;
      gap: 12px;
      background-color: ${({ theme }) => theme.colors.whiteColor};
      padding: 16px;
      border-radius: 8px;
      margin: 56px 0 48px;
      width: 100%;
      input {
        border: none;
        color: ${({ theme }) => theme.colors.textMedium};
        width: 100%;
        &::placeholder {
          color: ${({ theme }) => theme.colors.bodyLight};
        }
        &:focus {
          outline: none;
        }
      }
    }
  }
  .scroll-propgress {
    position: fixed;
    top: 81px;
    width: 100%;
    z-index: 1;
  }

  .progress-container {
    background-color: ${({ theme }) => theme.colors.whiteColor};
    height: 4px;
    width: 100%;
  }

  .progress-bar {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    height: 4px;
    width: 5%;
  }
`
export default ContentWrapper;
