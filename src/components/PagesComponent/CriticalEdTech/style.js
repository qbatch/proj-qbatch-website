import styled from 'styled-components'
import { media } from '../../../theme/media-mixins'

const AssistantWrapper = styled.div`
  padding: 96px 0px;
  ${media.sm`
  padding: 56px 0px;
  `}
  .heading-box {
    margin-bottom: 72px;
    ${media.sm`
    margin-bottom: 40px;
  `}
  }
  .button-wrapper{
    margin:48px 0px;
    ${media.sm`
      margin: 32px 0 0;
    `}
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
      display: flex;
      gap: 24px;
       img{
        height: 50px;
        width: 50px;
        aspect-ratio: 2/2;
      }
      ${media.sm`
        margin-bottom: 0;
      `}
      .d-flex {
        margin-bottom: 24px;
        ${media.md`
            padding: 0  ;
      `}
      }
      h3 {
        letter-spacing: 0px;
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        margin-bottom: 24px;
        margin-top: 8px;
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
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 24px;
      max-width: 372px;
    }
  }
`
export default AssistantWrapper
