import styled from 'styled-components'
import { media } from '../../../theme/media-mixins'

const StoppingDataDriven = styled.div`
  padding: 100px 0px;
  ${media.sm`
  padding: 56px 0px;
  `}
  .heading-box {
    margin-bottom: 42px;
    ${media.sm`
    margin-bottom: 48px;
  `}
  }
  .button-wrapper{
    margin: 48px 0px;
    ${media.sm`
      margin: 24px 0px 0px;
      `}
  }
  .images-box {
    .d-flex {
      padding: 0 191px;
      ${media.md`
            padding: 0  ;
      `}
    }
    h4 {
      margin-top: 26px;
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      font-weight: 300;
      margin-bottom: 23px;
      text-transform: none;
      letter-spacing: 0.48px;
      ${media.sm`
      line-height:24px;
      `}
    }
  }
  a {
    margin-top: 50px;
    text-decoration: underline;
    font-size: 20px;
    font-style: italic;
  }
  p{
    letter-spacing:0;
    margin-top:70px;
    ${media.sm`
    margin-top:32px;
    `}
  }
`
export default StoppingDataDriven