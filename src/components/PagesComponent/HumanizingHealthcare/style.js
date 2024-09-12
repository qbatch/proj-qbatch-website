import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const HumanizingHealthcareWrapper = styled.div`
padding: 96px 0;
border-bottom:1px solid ${({ theme }) => theme.colors.dividerColor};
${media.sm`
  padding: 40px 0px;
`}

h2{
font-size: 40px;
font-weight: 700;
line-height: 52px;
text-align: center;
color: ${({ theme }) => theme.colors.primaryColor};
}
p{
font-size: 20px;
font-weight: 400;
line-height: 32px;
text-align: center;
color: #5F737C;
}
`;

export {HumanizingHealthcareWrapper}
