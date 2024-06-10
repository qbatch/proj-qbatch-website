import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ContentWrapper = styled.div`
  .row {
    margin: 0 auto;
  }
  .content-section {
    padding-top: 96px;
    scroll-behavior: smooth;
    ${media.lg`
      padding-top: 56px;
    `}
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
        h3 {
          font-size: 22px;
          margin-bottom: 8px;
          text-transform:none;
          span {
            font-family: 'Inter Tight', sans-serif;
            font-size: ${({ theme }) => theme.fonts.baseFontSizeH3};
            color: ${({ theme }) => theme.colors.bodyTextVariant};
            font-weight: ${({ theme }) => theme.fontWeight.semiBold} !important;
          }
        }
        h2 {
          font-size: 26px;
          line-height: 32px;
          margin: 24px 0;
          text-transform:none;
          color: ${({ theme }) => theme.colors.primaryColor};
        }
        p {
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
          color: ${({ theme }) => theme.colors.bodyTextVariant};
          font-weight: ${({ theme }) => theme.fontWeight.light};
          line-height: 24px;
          letter-spacing: 0px;
          margin-bottom: 24px;
          img {
            border-radius: 24px 24px 0 24px;
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
            font-size: ${({ theme }) => theme.fonts.baseFontSize};
            color: ${({ theme }) => theme.colors.bodyTextVariant};
            font-weight: ${({ theme }) => theme.fontWeight.light};
            line-height: 24px;
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

  .subscribe-button {
    height: auto;
    padding: 24px;
    margin-bottom: 60px;
    border-radius: 24px 24px 0 24px;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    border: 1px solid  ${({ theme }) => theme.colors.dividerColor};
    p{
      margin-bottom: 24px;
    }
    button{
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
      }
    ${media.lg`
      margin: 32px 0 32px;
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
      border: 1px solid  ${({ theme }) => theme.colors.dividerColor};
      padding: 16px;
      border-radius: 8px;
      margin-bottom:24px;
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
  .author-name {
    background-color: ${({ theme }) => theme.colors.whiteColor};
    padding: 32px;
    border-radius: 24px 24px 0px 24px;
    border: 1px solid ${({ theme }) => theme.colors.dividerColor};
    margin-bottom: 24px;
    @media(max-width: 1499px){
      padding: 24px;
    }
    ${media.lg`
      margin-left: 0;
      padding: 32px;
    `}
    .avatar-box {
      gap: 23px;
      margin-bottom: 24px;
      .avatar-image {
        border-radius: 100px;
        object-fit: cover;
        background: ${({ theme }) => theme.colors.dividerColor};
      }
      span {
        font-size: 20px;
        color: ${({ theme }) => theme.colors.primaryColor};
        line-height: 32px;
        width: 150px;
      }
    }
    .socials-wrapper{
      border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
      margin-bottom: 16px;
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
      padding-bottom: 16px;
      margin-bottom: 16px;
      li img{
        cursor:pointer;
      }
    }
    .mt-32 {
      margin-top: 32px;
    }
  }
  .sidebar-socials{
    background-color: ${({ theme }) => theme.colors.whiteColor};
    border-radius: 24px 24px 0px 24px;
    border: 1px solid ${({ theme }) => theme.colors.dividerColor};
    padding: 16px;
    span{
      color: ${({ theme }) => theme.colors.primaryColor};
      font-weight:  ${({ theme }) => theme.fontWeight.bold};
      margin-bottom: 16px;
      display: block;
    }
    
    ${media.md`
    width: max-content;
    white-space: nowrap;
      display: flex;
      align-items: center;
      gap: 32px;
      span{
        margin-bottom: 0;
      }
    `}
  }
  .divider {
    margin: 48px 0 32px;
  }
  .might-section {
    margin-top: 16px;
    .might-heading {
      color:  ${({ theme }) => theme.colors.primaryColor};
    }
  }
  .side-scroll {
    position: sticky;
    border-radius: 8px 8px 0 8px;
    top: 90px;
    left: 0;
    width:100%;
    margin-bottom: 40px;
    .table-content{
      background-color: ${({ theme }) => theme.colors.whiteColor};
      border: 1px solid  ${({ theme }) => theme.colors.dividerColor};
      border-radius: 10px 10px 0 10px;
      overflow: hidden;
      padding: 16px;
      margin-bottom: 24px;
    }
    .side-scroll-content{
      span{
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        padding-bottom: 16px;
        display: block;
      }
      li{
        font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
        &:last-child{
          a{
            padding-bottom: 0;
          }
        }
      }
    }
    a {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
      line-height: 18px;
      color: ${({ theme }) => theme.colors.textMedium};
      text-decoration: none;
      display: block;
      border-bottom: none;
      &.title {
        max-width: 250px;
        padding-bottom: 12px;
        line-height: 18px;
        display: flex;
        align-items:start;
        gap: 5px;
        &:before{
          content: '';
          display:block;
          margin-top: 9px;
          height: 1.3px;
          min-width: 0px;
          display: inline-block;
          background-color: ${({ theme }) => theme.colors.primaryColor};
          transition: 0.3s;
        }
        &.active,
        &:hover{
          font-weight: ${({ theme }) => theme.fontWeight.semiBold};
          color:  ${({ theme }) => theme.colors.primaryColor};
          &::before{
            min-width: 9px;
          }
        }
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
