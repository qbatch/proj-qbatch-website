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
    margin-bottom: 32px;
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
    .row > div {
      display: flex;
      flex-direction: column;
    }
    .row > div > div {
      flex: 1;
    }
    .assistent-box {
      border-bottom: 1px solid #d2d9dc;
      margin-top: 24px;
      margin-bottom: 24px;
      ${media.sm`
        margin-bottom: 0;
      `}
      .d-flex {
        margin-bottom: 24px;
        ${media.md`
            padding: 0  ;
      `}
      }
      h4 {
        letter-spacing: 0px;
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        ${media.md`
          font-size: 16px;
          line-height: 24px;
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
      margin-bottom: 32px;
    }
  }
`
export default AssistantWrapper
