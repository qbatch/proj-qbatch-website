import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const LogoWrapper = styled.div`
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
  .ecom-logo-slider {
    .slick-list {
      line-height: 0;
    }
  }
  .ecom-logos {
    img {
      width: 234px;
      height: 56px;
      ${media.sm`
        height: auto;
      `}
    }
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
`;

export default LogoWrapper;
