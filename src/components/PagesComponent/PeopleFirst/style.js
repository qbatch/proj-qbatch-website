import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const PeopleFirstWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  padding: 96px 0;
  ${media.sm`
    padding: 56px 0;
`}
  .section-btn {
    display: none;
  }
  &.productDesignPage {
    .section-btn {
      margin-top: 72px !important;
      display: flex;
      margin: auto;
      ${media.sm`
        margin-top: 48px !important;
      `}
    }
    .sub-heading {
      max-width: 811px;
    }
  }
  .row > .achievements-col:nth-last-child(-n + 4) {
    border-bottom: none;
  }
  .counter-wrapper {
    padding-top: 56px;
    ${media.sm`
      padding: 32px 0 0;
  `}
  }
  .main-heading {
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 24px;
    ${media.sm`
      margin-bottom:12px;
    `}
  }
  .paragraph {
    max-width: 720px;
    color: #2d2f31;
    line-height: 24px;
    letter-spacing: 0;
    ${media.sm`
      line-height: 24px;
    `}
  }

  .achievements-col {
    text-align: center;
    padding: 32px 12px;
    border-right: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    img {
      height: 114px;
      width: 114px;
      margin-bottom: 18px;
    }
    p {
      margin: 0 auto;
      padding-top: 8px;
      max-width: 200px;
      white-space: pre-wrap;
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      ${media.sm`
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
      `}
      max-width: 270px;
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    }
    &:nth-child(4n) {
      border-right: none;
    }

    ${media.md`
     &:nth-child(3){
      border-right: 0;
     }
     &:nth-child(4n){
      border-right: 1px solid ${({ theme }) => theme.colors.dividerColor};
     }
     &:nth-child(5){
      border-bottom:  1px solid ${({ theme }) => theme.colors.dividerColor};
      ${media.sm`
      border-bottom:  1px solid ${({ theme }) => theme.colors.dividerColor} !important;
      `}
     }
     &:nth-child(6){
      border-right: 0;
      border-bottom:  1px solid ${({ theme }) => theme.colors.dividerColor};
      ${media.sm`
      border-bottom:  1px solid ${({ theme }) => theme.colors.dividerColor} !important;
      `}
    }
    `}
    ${media.sm`
    &:nth-child(9){
      border-right: 0;
      border-bottom:  1px solid ${({ theme }) => theme.colors.dividerColor} !important;
    }
     &:nth-child(10){
      border-right: 0;
      border-bottom:  1px solid ${({ theme }) => theme.colors.dividerColor} !important;
    }
    
    `}
    @media (max-width: 767px) {
      &:nth-child(even) {
        border-right: 0;
      }
      &:nth-child(odd) {
        border-right: 1px solid ${({ theme }) => theme.colors.dividerColor};
      }
    }
    ${media.xs`
    p{
      line-height: 20px;
    }
    `}
  }
`

export default PeopleFirstWrapper;
