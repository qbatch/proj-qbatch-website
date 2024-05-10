import styled from 'styled-components'
import { media } from '../../../theme/media-mixins'

const AssistantWrapper = styled.div`
  padding: 95px 0px;
  ${media.sm`
  padding: 56px 0px;
  `}
  .heading-box {
    margin-bottom: 71px;
  }
  .images-box {
    h2 {
      margin-bottom: 24px;
      ${media.sm`
      margin-bottom: 12px;
      `}
    }
    h4 {
      margin-top: 82px;
      margin-bottom: 16px;
      ${media.sm`
      margin-bottom: 8px;
      `}
    }
    a {
      margin-top: 50px;
      text-decoration: underline;
      font-size: 20px;
      font-style: italic;
    }
    p {
      font-size:16px;
      line-height: 29px;
      margin-bottom: 52px;
      ${media.sm`
      margin-bottom: 48px;
      `}
    }
    .add-border-gap {
      margin-bottom: 33px;
    }
    .add-image-space {
      padding-top: 31px;
      ${media.sm`
        padding-top: 16px;
        display:flex;
        justify-content:flex-start;
        align-items:flex-start !important;
      `}
    }
  }
`
export default AssistantWrapper
