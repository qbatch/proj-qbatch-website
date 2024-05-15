import styled from 'styled-components'
import { media } from '../../../theme/media-mixins'

const AssistantWrapper = styled.div`
  padding: 96px 0;
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
    }
  }
  .images-box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
    max-width: 1070px;
    margin: 0 auto;
    ${media.sm`
      justify-content: center;
      gap: 56px;
    `}
    img {
      width: 80px;
      height: 80px;
      margin-bottom: 8px;
    }
    p {
      text-align: center;
      margin-bottom: 0;
     }
  }
`
export default AssistantWrapper
