import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

export const TechnologyToFastTrackWrapper = styled.div`
padding-top: 96px;
${media.sm`
  padding-top: 40px;
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