import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const EcomLogoWrapper = styled.div`
  padding: 96px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
     padding: 40px 0px;
  `}
  .logos-main {
    ${media.lg`
      justify-content: center;
  `}
  }
  .ecom-logos {
    width: 215px;
    height: 116px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${media.sm`
    width: 180px;
    height: 90px;
  `}
  }
`;

export default EcomLogoWrapper;

