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
  .inner-heading{
    font-weight:${({ theme }) => theme.fontWeight.bold};
    ${media.md`
      font-size: ${({ theme }) => theme.fonts.baseFontSizeH2};
    `}
  }
  .achievements-main {
    padding: 96px 0 96px;
    border-top: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    text-align: center;
    position: relative;
    ${media.md`
      padding: 56px 0;
      .heading{
        text-align: left;
      }
    `}
    .achievements-inner-wrapper {
      position: relative;
      z-index: 2;
      ${media.xs`
        .heading{
          text-align: center !important;
        }
        `}

      .achievements-col {
        ${media.xs`
          text-align: center !important;
          margin-top:24px;
        `}
      }
      h2 {
        margin-bottom: 96px;
        ${media.sm`
          margin-bottom: 48px;
        `}
      }
    }
    .row-wrapper {
      padding-top: 2px;
      .achievements-col {
        padding: 32px 0 28px;
        ${media.md`
          text-align: left !important;
        `}
      }
      h1 {
        margin-bottom: 16px;
      }
      p {
        line-height: 30px;
        letter-spacing: 1px;
      }
    }

    .achievements-col {
      position: relative;
      ${media.md`
        margin-bottom: 16px;
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
      ${media.lg`
       &:nth-child(2)::after{
        width: 0px;
       }
      `}
      @media(max-width: 575px){
        &::after{
          width: 0px;
        }
      }
      .description{
        font-size: ${({ theme }) => theme.fonts.baseFontSize}; 
      }
      .heading {
        font-size: ${({ theme }) => theme.fonts.baseFontNumber};
        font-weight:${({ theme }) => theme.fontWeight.bold};
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
        line-height: 32px;
        text-transform: capitalize;
        ${media.lg`
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
        `}
      }
    }
  }
`

export default AchievementsWrapper;
