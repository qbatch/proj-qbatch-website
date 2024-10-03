import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const FeelingLikeYouAreInItAloneWrapper = styled.div`
background-color: #002548;
${media.sm`
padding: 40px 0px;
`}
&.dont-just-rebuild{
  .feeling-section-wrapper {
    padding-block: 14px;
  }
}
.feeling-section-wrapper {
    display: flex;
    align-items: center;
    grid-gap:43px;
    ${media.sm`
        flex-wrap:wrap;
        `}
    img{
      ${media.md`
        width: 300px;
        `}
      ${media.sm`
        width: 100%;
        `}
    }
    .content{
      h2{
        color: #FFFFFF;
        margin:0;
        ${media.sm`
        text-align:center;
        `}
      }
      p{
      font-size: 20px;
      font-weight: 400;
      line-height: 32px;
      text-align: left;
      margin: 0;
      margin-top: 24px;
      margin-bottom: 32px;
      color: #D2D9DC;
      ${media.sm`
        text-align:center;
        `}
      }
    }
  }
  button{
    color: #fff !important;
    ${media.sm`
        margin:auto;
        `}
  }
`;
export { FeelingLikeYouAreInItAloneWrapper }
