import styled from 'styled-components'
import { media } from '../../../theme/media-mixins'

const AchievementsWrapper = styled.div`
  position: relative;
  .achievements-main {
    padding: 96px 0 96px;
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
    .row-wrapper {
      padding-top: 2px;
      .achievements-col {
        padding: 32px 0 28px;
      }
      h1 {
        margin-bottom: 16px;
      }
      p {
        line-height: 30px;
        letter-spacing: 1px;
      }
    }
    .heading {
      margin-bottom: 94px;
    }

    .achievements-col {
      position: relative;
      ${media.sm`
        margin-bottom: 40px;
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
        line-height: 32px;
        white-space: pre-line;
        ${media.lg`
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
        `}
      }
    }
  }
`

export default AchievementsWrapper
