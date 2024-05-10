import styled from 'styled-components'
import { media } from '../../../theme/media-mixins'

const ChoseQbatchWrapper = styled.div`
  padding: 99px 60px;
  ${media.sm`
    padding: 56px 0px;
      `}
      .heading-box {
        margin-bottom: 72px;
        ${media.sm`
          margin-bottom: 48px;
          `}
        h2 {
          margin-bottom: 28px;
          ${media.sm`
            margin-bottom: 12px;
            `}
          }
        }
        .images-box {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap:55px;
          div{
            ${media.sm`
            margin-bottom:0px !important;
            `}
          }
          
    img {
      width: 80px;
      height: 80px;
      margin-bottom: 11px;
    }

  }
`
export default ChoseQbatchWrapper
