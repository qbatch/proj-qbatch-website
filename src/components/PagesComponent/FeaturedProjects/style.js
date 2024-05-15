import styled from 'styled-components'
import { media } from '../../../theme/media-mixins'

const AssistantWrapper = styled.div`
  padding: 96px 0px;
  ${media.sm`
    padding: 56px 0;
  `}
  .images-box {
    padding: 0 70px;
    ${media.sm`
              padding: 0 20px;
      `}
    .link {
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 6px;
    }
    h4 {
      letter-spacing: 0px;
      font-size: 20px;
    }
    h3 {
      margin-bottom: -8px;
    }
    .badges {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 24px;
      ${media.sm`
      margin-bottom: 12px;
      `}
      span {
        border: 1px solid ${({ theme }) => theme.colors.dividerColor};
        color: ${({ theme }) => theme.colors.bodyLight};
        font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
        font-weight: ${({ theme }) => theme.fontWeight.light};
        padding: 4px 8px;
        border-radius: 2px;
      }
    }
    .paragraph {
      color: ${({ theme }) => theme.colors.textMedium};
      line-height: 32px;
      ${media.sm`
        line-height:24px;
      `}
      &:last-child {
        margin-bottom: 0;
      }
    }
    .scraper-box {
      padding: 72px 0px;
      ${media.sm`
      padding: 48px 0px;
      `}
      .caption {
        color: ${({ theme }) => theme.colors.primaryColor};
        font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        line-height: 16px;
      }
    }
  }
`
export default AssistantWrapper
