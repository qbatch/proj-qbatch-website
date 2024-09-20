import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const QbatchIsEmpoweringRetailersWrapper = styled.div`
padding: 96px 0;
${media.sm`
  padding: 40px 0;
    `}
h2{
  color: #0054A6;
  margin: 0;
  text-align: center;
  ${media.sm`
text-align:left;
`}
}
.cards-wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 24px;
  margin-top: 72px;
  ${media.md`
    grid-template-columns: 1fr 1fr 1fr;
    `}
  ${media.sm`
    grid-template-columns: 1fr 1fr;
    `}
  ${media.mobile`
    grid-template-columns: 1fr;
    `}
  .card-item{
    display: flex;
    flex-direction: column;
    grid-row-gap: 24px;
    align-items:center;
    ${media.mobile`
      border-bottom:1px solid #D9D9D9;
      padding-bottom: 24px;
      `}
    img{
      max-width: 114px;
    }
    h3{
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    text-align: center;
    color: #5F737C;
    margin: 0;
    ${media.mobile`
    font-size: 16px;
    line-height: 24px;
    `}
    }
  }
}
button{
  margin: auto;
  margin-top: 72px;
}

`;

export { QbatchIsEmpoweringRetailersWrapper }
