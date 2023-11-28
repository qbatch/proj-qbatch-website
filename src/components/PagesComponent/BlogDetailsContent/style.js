import styled from "styled-components";

const ContentWrapper = styled.div`
  .row {
    max-width: 1193px;
    margin: 0 auto;
  }
  .content-section {
    padding-top: 96px;
    scroll-behavior: smooth;
    .inner-content {
      margin-bottom: 49px;
      &.small-space {
        padding: 75px 0px;
        padding-bottom: 0px;
        h3 {
          margin-bottom: 34px;
        }
        .paragraph {
          margin-bottom: 32px;
        }
      }
      &.last-paragraph {
        padding: 31px 0;
        padding-bottom: 28px;
      }
      .paragraph {
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        color: ${({ theme }) => theme.colors.textMedium};
        line-height: 24px;
        letter-spacing: 0px;
        margin-bottom: 22px;
        &.mb-32 {
          margin-bottom: 32px;
        }
      }
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
    .avatar-box {
      gap: 23px;
      margin-bottom: 24px;
      span {
        font-size: 20px;
        color: ${({ theme }) => theme.colors.primaryColor};
        line-height: 32px;
      }
    }
    .title {
      line-height: 23px;
    }
    .social-link {
      gap: 20px;
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
    top: 55%;
    left: 0;
    height: 100%;
    width: 108px;
    overflow: hidden;
        a {
          font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
          color: ${({ theme }) => theme.colors.textMedium};
          display: block;
          border-bottom: none;
          &.title {
            width: 150px;
            height: 32px;
            transform: translateX(-104%);
            transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
            opacity: 1;
          }
          &.active {
            height: 0px;
            color: ${({ theme }) => theme.colors.primaryColor};
          }
          &.line {
            width: 28px;
            border-bottom: 1px solid ${({ theme }) => theme.colors.textMedium};
            height: 0;
            margin-bottom: 0px;
            opacity: 1;

            &.active {
              height: 32px;
              width: 28px;
              border-bottom: 1px solid ${({ theme }) => theme.colors.primaryColor};
            }
          }
        
      }
      &:hover {
        a {
          &.title {
            transform: translateX(0);
            opacity: 1;
            margin-left:4px;
          }
          &.line {
            opacity: 0;
          }
        }
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
  }
  .subsribe-button {
    background-image: url('/email-bg.svg');
    height: 553px;
    background-repeat: no-repeat;
    margin-left: 40px;
    padding: 48px;
    margin-top: 62px;
    background-position: right;
    background-size: cover;
    margin-bottom: 12px;
    border-radius: 24px 24px 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
      input {
        border: none;
        color: ${({ theme }) => theme.colors.textMedium};
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
  .can-help {
    background-image: url('/we-can-help.svg');
    width: 100%;
    background-repeat: no-repeat;
    padding: 74px 0;
    text-align: center;
    h4 {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-left: 6px;
      letter-spacing: 0px;
      margin-bottom: 3px;
    }
  }
`
export default ContentWrapper;
