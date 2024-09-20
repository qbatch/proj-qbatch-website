import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const LetsReimagineRetailTogetherWrapper = styled.div`
background-image: url('/retail-section-bg.svg');
background-repeat: no-repeat;
background-size: cover;
background-position: bottom;
padding: 133px 0px;
${media.sm`
  padding: 40px 0px;
`};
  ${media.mobile`
 background: #0A2545;
 background-image:none ;
    `}
h2{
  color: #fff;
  max-width: 1052px;
  ${media.mobile`
 text-align:center;
    `}
}
button{
  color:#FFFFFF;
  margin-top: 32px;
  ${media.mobile`
  margin: auto;
  margin-top: 32px;
    `}
}
`;
export { LetsReimagineRetailTogetherWrapper }

