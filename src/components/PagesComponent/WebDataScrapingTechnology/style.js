import styled from 'styled-components'
import { media } from '../../../theme/media-mixins'

const AssistantWrapper = styled.div`
  padding: 99px 60px;
  ${media.sm`
    padding: 56px 0px;
      `}
  .heading-box {
    margin-bottom: 76px;
    ${media.sm`
      margin-bottom: 48px;
      `}
    h2 {
      margin-bottom: 12px;
    }
  }
  .images-box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    img {
      width: 80px;
      height: 80px;
      margin-bottom: 11px;
    }

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
      }
    }
  }
`
export default AssistantWrapper
