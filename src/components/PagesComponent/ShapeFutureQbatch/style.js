import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ShapeFutureQbatchWrapper = styled.div`
padding: 115px 0px;
background-image: url('/bg-career-page.svg');
background-repeat: no-repeat;
background-size: cover;
background-position: bottom;
${media.sm`
  padding:40px 0;
`}
${media.mobile`
  background-image: none;
  background: #0A2545;
`}
h2{
font-size: 40px;
font-weight: 700;
line-height: 52px;
text-align: left;
color: #FFFFFF;
max-width: 1100px;
margin:0;
${media.lg`
  font-size: 32px;
    line-height: 42px;
`}
${media.md`
  font-size: 24px;
    line-height: 32px;
`}
  ${media.mobile`
    text-align:left;
    `}
${media.xs`
  font-size: 20px;
    line-height: 28px;
`}
}
p{
max-width: 938px;
font-size: 20px;
font-weight: 400;
line-height: 32px;
text-align: left;
color:#FFFFFF;
margin:0;
margin-top:24px;
${media.mobile`
  font-size: 16px;
  line-height: 24px;
    `}
}
.expert-advice{
  color: #fff;
  margin-top: 32px;
}

`;
export { ShapeFutureQbatchWrapper }
