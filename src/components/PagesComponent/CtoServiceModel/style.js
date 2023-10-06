import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const CtoServiceWrapper = styled.div`
 padding: 96px 0;
 ${media.sm`
     padding: 40px 0px;
  `}
 h2{
  text-align: center;
  margin-bottom: 70px;
  line-height: 52px;
  ${media.sm`
        line-height: 32px;
        margin-right: 0;
      `}
 }
 .cto-service{
  display: flex;
  justify-content: space-between;
  max-width: 930px;
  margin: auto;
  padding-bottom: 32px;
  margin-bottom: 32px;
  border-bottom: 1px solid #D2D9DC;
  &:last-child{
    margin-bottom: -2px;
  }

  button{
      margin-right: -8px;
    }
    ${media.sm`
     display: block;
     button{
      margin-top: 20px;
     }
    `}
  .inner-wrapper{
    display: flex;
    align-items: center;
    ${media.sm`
     display: block;
    `}
  }
  .inner-text{
    margin: 0 32px;
    max-width: 588px;
    margin-right: 32px;
    ${media.sm`
     margin-right: 0;
     max-width: 100%;
    `}
    h3{
      font-weight: 600;    
      line-height: 40px;
      letter-spacing: 0.7px;
      padding-bottom: 4px;
    }
    p{
      font-weight: 400;
      line-height: 24px;
      font-size: 16px;
      color: #5F737C;
      margin: 0;
    }
    ${media.sm`
     margin-left: 0;
     margin-top: 16px;
    `}
  }
 }
`

export default CtoServiceWrapper;
