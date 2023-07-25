import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const AchievementsWrapper = styled.div`
  .achievements-main {
    padding: 96px 30px;
    border-top: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    background-color: ${({ theme }) => theme.colors.onGradient};
    text-align: center;
    background-image: url("/achievements-bg.svg");
    background-size: cover;

    .achievements {
      ${media.sm`
        margin-bottom: 40px;
      `}
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
        font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
        margin-bottom: 0;
        color: ${({ theme }) => theme.colors.textMedium};
        line-height: 32px;
        white-space: pre-line;
        ${media.lg`
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
        `}
      }
    }
    .achievements-container {
      max-width: 1432px;
    }
    .achievements-row {
      margin-top: 72px;
    }
    .achievements-col {
      position: relative;
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
    }
  }
`;

export default AchievementsWrapper;
