import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const InsightsWrapepr = styled.div`
  padding: 94px 0 91px;
  ${media.sm`
     padding: 40px 0px;
  `}
  .carousel-header {
    margin-bottom: 72px;
    h2 {
      line-height: 52px;
      margin-bottom: 29px;
      ${media.xs`
      line-height:24px;
      `}
    }
    p {
      font-size: 16px;
      line-height: 24px;
      font-weight: 300;
      margin-bottom: 0;
      padding-right: 30px;
    }
  }
  .slick-slider {
    .slick-list {
      margin: 0 -6px 0 -20px;
      .slick-track {
        display: flex;
        gap: 24px;
      }
    }
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-self: start;
    align-items: center;
  }
  .custom-controls {
    display: flex;
    align-items: center;
    button {
      border: none;
      background-color: transparent;
    }
  }
  .custom-controls {
    display: flex;
    align-items: center;
    margin-right: -6px;
    .slide-counter {
      display: flex;
      align-items: center;
      padding: 0 6px;
    }
    span {
      font-size: 16px;
      font-weight: 300;
      line-height: 20px;
      &:nth-child(2) {
        font-size: 24px;
        line-height: 30px;
        font-weight: 300;
        padding: 0 5px;
        color: ${({ theme }) => theme.colors.disableColor};
      }
      &:nth-child(3) {
        color: ${({ theme }) => theme.colors.disableColor};
      }
      &:first-child {
        color: ${({ theme }) => theme.colors.primaryColor};
        font-weight: bold;
      }
    }
    button {
      width: 25px;
      height: 22px;
      svg {
        width: 11px;
        max-width: 11px;
        height: 9px;
      }
    }
  }
  .inner {
    border: 1px solid #d2d9dc;
    border-radius: 16px 16px 0px 16px;
    overflow: hidden;
    min-height: 400px;
    .card-img {
      height: 224px;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
    .inner-content {
      padding: 24px 32px 26px;
      ${media.sm`
       padding: 20px;
      `}
      .tag {
        padding: 3px 7px;
        font-size: 12px;
        font-weight: 300;
        line-height: 14px;
        color: #7c8ea1;
        border: 1px solid #7c8ea1;
      }
      .date {
        padding-top: 3px;
        font-size: 12px;
        line-height: 14px;
        color: #889095;
        font-weight: 300;
      }
      .heading {
        margin-top: 20px;
        margin-bottom: 10px;
        min-height: 51px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .paragraph {
        font-size: 16px;
        font-weight: 300;
        line-height: 24px;
        color: #889095;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        white-space: pre-wrap;
        margin-bottom: 12px;
        height: 72px;
      }
      .btn {
        margin-left: auto;
        margin-right: -10px;
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
      }
    }
  }
`
export default InsightsWrapepr;
