import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const StagesWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  padding: 120px 0;
  transition: all 0.3s ease;
  &.section-sticky{
    position:sticky;
    top:0;
    z-index: 1;
  }
  &.stage-slider-main2 {
    padding: 120px 0 62px;
    .stages-header {
      margin-bottom: 54px;
    }
  } 
  @media screen and (max-width: 767px) {
    padding-bottom: 32px;
    padding-top: 60px;
  }
  .stages-header {
    text-align: center;
    max-width: 840px;
    margin: 0 auto;
    margin-bottom: 76px;
    @media screen and (max-width: 767px) {
      margin-bottom: 32px;
    }
    h2 {
      color: ${({ theme }) => theme.colors.primaryColor};
      text-align: center;
      font-weight: 700;
      margin-bottom: 30px;
    }
    p {
      color: ${({ theme }) => theme.colors.textMedium};
      text-align: center;
      font-weight: 400;
    }
  }
  .fixed-slider-pagination {
    padding-left: 63px;
    @media screen and (max-width: 1400px) {
      padding-left: 0;
    }
    ul {
      padding-left: 0;
    }
    li {
      margin-bottom: 24px;
      margin-bottom: ${(props) => (props.marketplace ? `${props.marketplace}` : '24px')};
      padding-left: 20px;
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      font-size: 20px;
      font-weight: 400;
      line-height: 32px;
      position: relative;
      &:last-child {
        margin-bottom: 0;
      }
      @media screen and (max-width: 1199px) {
        font-size: 16px;
        line-height: 24px;
      }
      cursor: pointer;
      &:before {
        width: 8px;
        height: 8px;
        left: 0;
        display: inline-block;
        border-radius: 12px;
        border: 1px solid ${({ theme }) => theme.colors.dangerColor};
        background: #fff;
        content: '';
        top: 12px;
        position: absolute;
        @media screen and (max-width: 1199px) {
          top: 8px;
        }
      }
      &:after {
        width: 1px;
        height: 38px;
        content: '';
        position: absolute;
        left: 3.5px;
        top: 25px;
        background: #d2d9dc;
        @media screen and (max-width: 1199px) {
          top: 20px;
          height: 30px;
        }
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
        @media screen and (max-width: 1199px) {
          font-size: 20px;
          line-height: 24px;
        }
        &:before {
          background: ${({ theme }) => theme.colors.dangerColor};
        }
      }
    }
  }
  &.sticky-wrapper {
    position: sticky;
    top: 60px;
    width: 100%;
    overflow: hidden;
  }
  .slider-section {
    .slider-item {
      .title {
        h3 {
          color: ${({ theme }) => theme.colors.bodyTextVariant};
          font-weight: 600;
          letter-spacing: 0.64px;
          margin-bottom: 16px;
        }
        &.title-responsive {
          display: none;
        }
        @media screen and (max-width: 767px) {
          &.title-desktop {
            display: none;
          }
          &.title-responsive {
            display: block;
            text-align: center;
          }
        }
      }
      .content {
        color: ${({ theme }) => theme.colors.textMedium};
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        padding-right: 35px;
        min-height: 218px;
        @media screen and (max-width: 1199px) {
          padding-right: 0;
          min-height: 216px;
        }
        @media screen and (max-width: 767px) {
          padding-right: 0;
          min-height: 216px;
        }
        ul {
          margin-top: 24px;
          list-style: disc;
          padding-left: 24px;
        }
      }
      img {
        @media screen and (max-width: 767px) {
          margin: 0 auto;
          margin-bottom: 16px;
        }
      }
    }
    .slider-column {
      margin-left: -21px;
      @media screen and (max-width: 767px) {
        margin-left: 0;
      }
    }
    .slider-column-text {
      padding-left: 5px;
      min-height: 312px;
      @media screen and (max-width: 767px) {
        padding-left: 12px;
        min-height: 260px;
      }
    }
    .fixed-slider-column {
      @media screen and (max-width: 991px) {
        display: none;
      }
    }
  }
  .marketplace-section {
    .marketplace-logo {
      padding-bottom: 60px;
      ${media.md`
       display: flex;
       justify-content: center;
      `}
    }
    .fixed-slider-pagination {
      padding-left: 182px;
      ${media.lg`
       padding-left: 72px;
      `}
    }
  }
  .slider-btn {
    margin-top: 68px;
    margin-left: 12px;
    ${media.sm`
      margin-top: 0;
    `}
  }
  .ecom-section {
    padding-left: 0;
    ${media.sm`
      padding: 0 20px;
    `}
    img {
      max-width: none;
      ${media.lg`
      max-width: 100%;
    `}
    }
    .slider-item {
      .title {
        display: none;
        ${media.sm`
        &.title-responsive {
          display: none;
        }
        `}
      }
      .content {
        font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
        letter-spacing: 0.8px;
        line-height: 32px;
        margin-top: 92px;
        max-width: 350px;
        ul {
          display: none;
        }
        ${media.lg`
          margin-top: 40px;
        `}
        ${media.sm`
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
            text-align: center;
            max-width: 100%;
            margin-top: 8px;
        `}
      }
    }
  }
  .mb-8 {
    margin-bottom: 60px;
  }
`
export default StagesWrapper;
