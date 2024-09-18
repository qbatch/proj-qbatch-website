import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const HealthcareIndustryLeadersWrapper = styled.div`
padding: 115px 96px 99px;
background-image: url('/background-health-care.png');
background-repeat: no-repeat;
background-size: cover;
background-position: bottom;
${media.sm`
  padding:40px;
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
${media.lg`
  font-size: 32px;
    line-height: 42px;
`}
${media.md`
  font-size: 24px;
    line-height: 32px;
`}
  ${media.mobile`
    text-align:center;
    `}
${media.xs`
  font-size: 20px;
    line-height: 28px;
`}
}
.expert-advice{
  color: #fff;
  margin-top: 32px;
  ${media.mobile`
    margin: auto;
  margin-top: 32px;
    `}
}
`;
export { HealthcareIndustryLeadersWrapper }
