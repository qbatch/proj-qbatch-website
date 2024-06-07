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
    }
    .assistent-box {
      border-bottom: 1px solid #d2d9dc;
      margin-top: 24px;
      margin-bottom: 24px;
      display: flex;
      gap: 24px;
      img{
        height: 50px;
        width: 50px;
        aspect-ratio: 2/2;
      }
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
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
      margin-bottom: 24px;
    }
  }
  .col-md-7{
    ${media.sm`
      padding-top:32px;
    `}
  }
`
export default AssistantWrapper
