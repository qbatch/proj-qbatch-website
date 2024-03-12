import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const AchievementsWrapper = styled.div`
  position: relative;
  .achievements-main {
    padding: 96px 0;
    border-top: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    background-size: cover;
    text-align: center;
    position: relative;
    ${media.sm`
      padding: 60px 0 0;
    `}
    .achievements-inner-wrapper {
      position: relative;
      z-index: 2;
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
      ${media.lg`
        width: 30%;
      `}
      ${media.md`
        margin-bottom: 40px;
        width: 40%;
      `}
      ${media.xs`
        margin-bottom: 40px;
        width: 100%;
      `}
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
