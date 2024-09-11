import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const WhyTrustQbatchWrapper = styled.div`
background: #002548;
padding: 72px 0;
h2{
font-size: 40px;
font-weight: 700;
line-height: 52px;
text-align: left;
color: #FFFFFF;
${media.lg`
  font-size: 32px;
  line-height: 42px;
`}
${media.sm`
  font-size: 24px;
  line-height: 32px;
`}
${media.mobile`
    text-align:left;
    `}
}
.card-wrapper{
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 24px;
  img{
  ${media.mobile`
  max-width:280px;
    `}
  }
  ${media.md`
    grid-template-columns: 1fr;
    place-items:center;
    `}
  .card-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 32px 0;
    ${media.mobile`
      grid-template-columns: 1fr;
    `}
  ul{
    li{
    font-size: 20px;
    font-weight: 700;
    line-height: 40px;
    text-align: left;
    color: #D2D9DC;
    ${media.lg`
  font-size: 16px;
`}
    }
  }
}
}
button{
  margin-left: auto;
  color: #fff;
  ${media.mobile`
    /* margin-left: 0; */
    `}
}
`;

export { WhyTrustQbatchWrapper }