import styled from 'styled-components'
import { media } from '../../../theme/media-mixins'

const ChoseQbatchWrapper = styled.div`
  padding: 96px 0 72px;
  ${media.sm`
    padding: 56px 0px;
      `}
      .heading-box {
        margin-bottom: 72px;
        ${media.sm`
          margin-bottom: 48px;
          `}
        h2 {
          margin-bottom: 24px;
          ${media.sm`
            margin-bottom: 12px;
            `}
          }
        }
        .images-box {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap:58px;
          ${media.mobile`
            gap:0;
          `}
          p {
            font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
            margin-bottom: 0;
            line-height: 32px;
            white-space: pre-wrap;
          }
          div{
            text-align: center;
            ${media.mobile`
              margin-bottom: 32px;
              &:last-child {
                margin-bottom: 0;
              }
            `}
          }
          
    img {
      width: 80px;
      height: 80px;
      margin-bottom: 8px;
    }

  }
`
export default ChoseQbatchWrapper
