import styled from "styled-components";

const ContentWrapper = styled.div`
  .row {
    max-width: 1193px;
    margin: 0 auto;
  }
  .content-section {
    /* height: calc(100vh - 100px);
    overflow: auto; */
    .inner-content {
      padding: 97px 0px;
      padding-bottom: 49px;
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
    .can-help {
      background-image: url("/we-can-help.svg");
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
    margin-top: 96px;
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
    margin: 73px 0;
  }
  .side-scroll {
    position: sticky;
    top: 30%;
    display: flex;
    &:hover {
      .dashed-ul {
        opacity: 0;
        transform: translateX(10px);
      }
      .title-ul {
        opacity: 1;
        transform: translateX(-44px);
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
      margin-top: 30px;
      transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
      .title {
        font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
        color: ${({ theme }) => theme.colors.textMedium};
        margin-left: 19px;
        margin-bottom: 10px;
        cursor: pointer;
        &.active {
          color: ${({ theme }) => theme.colors.primaryColor};
        }
      }
    }
  }
  .subsribe-button {
    background-image: url("/email-bg.svg");
    height: 553px;
    background-repeat: no-repeat;
    margin-left: 40px;
    padding: 53px 49px;
    margin-top: 62px;
    background-position: right;
    background-size: cover;
    margin-bottom: 12px;
    h2 {
      color: ${({ theme }) => theme.colors.whiteColor};
      line-height: 51px;
    }
  }
`;
export default ContentWrapper;
