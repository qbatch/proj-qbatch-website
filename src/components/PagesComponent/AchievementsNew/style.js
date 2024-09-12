import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const AchievementsNewWrapper = styled.div`
  padding: 96px 0;
  ${media.sm`
    padding: 40px 0;
  `}
  ${media.mobile`
    background-color: #E8F4FF;
    margin: 56px 0;
  `}
  .achievements-box {
    background: linear-gradient(180deg, #E8F4FF 0%, #E8F4FF 100%);
    border-radius: 64px 64px 0 64px;
    padding: 56px;
    ${media.mobile`
      padding: 0;
      background: transparent;
    `}
    .heading {
      margin-bottom: 46px;
    }
    .white-box {
      background-color: ${({ theme }) => theme.colors.whiteColor};
      padding: 48px;
      border-radius: 40px;
      ${media.mobile`
        padding: 32px 16px;
      `}
      .count-row {
        margin-bottom: 36px;
        padding-bottom: 40px;
        border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
        ${media.md`
          border-bottom: none;
        `}
        ${media.sm`
          margin-bottom: 32px;
          padding-bottom: 0;
        `}
        .counter-col {
          ${media.md`
            margin-bottom: 24px;
            &:nth-last-of-type(-n+2) {
              margin-bottom: 0;
            }
          `}
          ${media.sm`
            padding-bottom: 24px;
            border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
            &:nth-last-of-type(2) {
              margin-bottom: 24px;
            }
            &:last-child {
              margin-bottom: 0;
            }
          `}
        }
        
      }
      .count-data {
        span {
          font-size: ${({ theme }) => theme.fonts.baseFontSizeH2};
          color: ${({ theme }) => theme.colors.primaryColor};
          font-weight: ${({ theme }) => theme.fontWeight.bold};
          line-height: 68px;
        }
        p {
          font-weight: ${({ theme }) => theme.fontWeight.bold};
          background: linear-gradient(90deg, #ED1C24 0%, #0054A6 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0;
        }
      }
      .count-desc {
        color: ${({ theme }) => theme.colors.textMedium};
        font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
        text-align: center;
        margin-bottom: 0;
        line-height: 32px;
      }
      .awards-heading {
        ${media.mobile`
          text-align: center;
        `}
        p {
          font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
          font-weight: ${({ theme }) => theme.fontWeight.semiBold};
          color:${({ theme }) => theme.colors.primaryColor};
          line-height: 32px;
          margin-bottom: 12px;
        }
        span {
          color: ${({ theme }) => theme.colors.textMedium};
          line-height: 24px;
        }
      }
      .awards-imgs {
        width: 74px;
        height: 74px;
        margin-right: 60px;
      }
    }
  }
`

export default AchievementsNewWrapper;
