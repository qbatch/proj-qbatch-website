import styled from 'styled-components'
import { media } from '../../../theme/media-mixins'

const AssistantWrapper = styled.div`
  padding: 98px 0px;
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
      margin-bottom: -9px;
    }
    .badges {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 24px;
      span {
        border: 1px solid ${({ theme }) => theme.colors.dividerColor};
        color: ${({ theme }) => theme.colors.bodyLight};
        font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
        padding: 4px 8px;
        border-radius: 2px;
      }
    }
    .paragraph {
      color: ${({ theme }) => theme.colors.textMedium};
      line-height: 32px;
    }
    p {
      font-size: 16px;
      ${media.sm`
            font-size: 14px;
      `}
    }
    .scraper-box {
      padding: 72px 0px;
      .caption {
        color: ${({ theme }) => theme.colors.textMedium};
      }
    }
  }
`
export default AssistantWrapper
