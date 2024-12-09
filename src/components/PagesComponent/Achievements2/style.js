import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const AchievementsWrapper = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: block;
    height: 100%;
    width: 100%;
    background: linear-gradient(180deg, rgba(246, 247, 250, 0.7) 0%, rgba(246, 247, 250, 0.6) 100%);
  }
  .achievements-main {
    padding: 96px 0;
    border-top: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    background-size: cover;
    text-align: center;
    background-position: center;
    position: relative;
    background-image: url('/achievements-bg.svg');
    ${media.sm`
      padding: 56px 0px;
    `}
    .achievements-inner-wrapper {
      position: relative;
      z-index: 2;
      h2 {
        margin-bottom: 72px;
        color: ${({ theme }) => theme.colors.primaryColor};
      }
      p{
        margin-bottom: 96px;
        ${media.sm`
          margin-bottom: 48px;
        `}
      }
    }
    .counter-wrapper{
      display: flex;
      justify-content: center;
      flex-wrap: wrap
    }
    .row-wrapper {
      padding-top: 2px;
      .achievements-col {
        padding: 32px 0 28px;
      }
      h1 {
        margin-bottom: 16px;
      }
      p {
        line-height: 24px;
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
      }
    }
    .heading {
      margin-bottom: 94px;
    }

    .achievements-col {
      position: relative;
      width: 20%;
      &:not(:last-child){
        /* border-right: 1px solid ${({ theme }) => theme.colors.dividerColor}; */
      }
      ${media.lg`
        width: 30%;
      `}
      ${media.md`
        margin-bottom: 40px;
        width: 40%;
      `}
      ${media.xs`
        margin-bottom: 32px;
        width: 100%;
      `}
      &::after {
        position: absolute;
        content: '';
        width: 1px;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.dividerColor};
        right: 0;
        top: 0;
        ${media.xs`
          width: 0px;
        `}
      }
      &:last-child::after {
        width: 0px;
      }
      .heading {
        font-size: ${({ theme }) => theme.fonts.baseFontXl};
        font-weight: 600;
        color: ${({ theme }) => theme.colors.bodyTextVariant};
        ${media.lg`
          font-size: ${({ theme }) => theme.fonts.baseFontSizeH1};
        `}
        ${media.sm`
          font-size: ${({ theme }) => theme.fonts.baseFontSizeH2};
        `}
      }
      p {
        margin-bottom: 0;
        margin-top: 14px;
        white-space: pre-line;
        text-transform: capitalize;
        line-height: 24px;
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        ${media.lg`
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
        `}
      }
    }
  }
`

export default AchievementsWrapper;
