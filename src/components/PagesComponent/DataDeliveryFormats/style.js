import styled from 'styled-components'
import { media } from '../../../theme/media-mixins'

const AssistantWrapper = styled.div`
  padding: 96px 0px;
  ${media.sm`
    padding: 56px 0;
  `}
  .heading-box {
    margin-bottom: 71px;
  }
  .images-box {
    .row > div {
      display: flex;
      flex-direction: column;
    }
    .row > div > div {
      flex: 1;
    }
    h2 {
      margin-bottom: 24px;
      ${media.sm`
      margin-bottom: 12px;
      `}
    }
    h4 {
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      margin-top: 72px;
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
      margin-bottom: 40px;
      max-width: 910px;
    }
    .add-border-gap {
      margin-bottom: 30px;
    }
    .add-image-space {
      padding-top: 31px;
      ${media.sm`
        padding-top: 32px;
        display:flex;
        justify-content:flex-start;
        align-items:flex-start !important;
      `}
    }
    .delivery-data {
      p {
        margin-bottom: 24px;
        flex: 1;
      }
    }
  }
`
export default AssistantWrapper
