import styled from 'styled-components'
import { media } from '../../../theme/media-mixins'

const AssistantWrapper = styled.div`
  padding: 95px 0px;
  ${media.sm`
  padding:56px 0px;
  `}
  .heading-box {
    margin-bottom: 71px;
    ${media.sm`
    margin-bottom: 48px;
  `}
    h2{
      margin-bottom:24px;
      ${media.sm`
        margin-bottom: 8px;
      `}
    }
    p {
      font-size: 16px;
      ${media.md`
            font-size: 14px;
      `}
    }
  }
  .images-box {
    .assistent-box {
      border-bottom: 1px solid #d2d9dc;
      min-height: 170px;
      margin-top: 24px;
      margin-bottom: 24px;
      .d-flex {
        margin-bottom: 24px;
        ${media.md`
            padding: 0  ;
      `}
      }
      h4 {
        letter-spacing: 0px;
        font-size: 20px;
        ${media.md`
            font-size: 16px;
      `}
      }
    }
    a {
      margin-top: 50px;
      text-decoration: underline;
      font-size: 20px;
      font-style: italic;
    }
    p {
      font-size: 16px;
      ${media.md`
            font-size: 14px;
      `}
    }
  }
`
export default AssistantWrapper
