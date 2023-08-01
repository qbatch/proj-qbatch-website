import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const AwardsWrapper = styled.div`
  .awards-main {
    padding: 96px 0;
    border-top: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    background-color: ${({ theme }) => theme.colors.onGradient};
    background-image: url("/achievements-bg.svg");
    background-size: cover;
    text-align: center;
    ${media.sm`
      padding: 40px 0 0;
    `}
    .heading {
      margin-bottom: 71px;
      max-width: 221px;
      text-align: left;
      font-size: 40px;
      color:#2D2F31;
      font-weight:700;
      line-height: 52px;
    }
    .achievements-col {
      position: relative;
      ${media.sm`
        margin-bottom: 40px;
      `}
      &::after {
        position: absolute;
        content: "";
        width: 1px;
        height: 190px;
        background-color: ${({ theme }) => theme.colors.dividerColor};
        right: 0;
        top: 0;
        ${media.sm`
          width: 0px;
        `}
      }
      &:last-child::after {
        width: 0px;
      }
      h1 {
        font-size: ${({ theme }) => theme.fonts.baseFontXl};
        color: ${({ theme }) => theme.colors.bodyTextVariant};
        margin-bottom: 14px;
        ${media.lg`
          font-size: ${({ theme }) => theme.fonts.baseFontSizeH1};
        `}
        ${media.sm`
          font-size: ${({ theme }) => theme.fonts.baseFontSizeH2};
        `}
      }
      p {
        margin-bottom: 0;
        line-height: 32px;
        white-space: pre-line;
        ${media.lg`
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
        `}
      }
    }
    .awards-logos{
      a{
        img{
          width:84px;
        }
      }
    }
  }
`;

export default AwardsWrapper;
