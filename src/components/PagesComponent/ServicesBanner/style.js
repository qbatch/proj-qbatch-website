import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ServicesBannerWrapper = styled.div`
  background-image: url("/company-banner-img.png");
  background-size: cover;
  background-position: bottom;
  padding: 98px 0 96px; 
  display: flex;
  justify-content: center;
  ${media.sm`
    padding: 40px 0;
  `}
  .banner-content {
    margin-left: -20px;
    ${media.lg`
    margin-left: 0;
  `}
    h2 {
      color: ${({theme}) => theme.colors.whiteColor};
      margin-bottom: 26px;
    }
    h4 {
      color: ${({theme}) => theme.colors.dividerColor};
      font-weight: ${({theme}) => theme.fontWeight.normal};
      line-height: 32px;
      letter-spacing: 0.48px;
      max-width: 910px;
      margin-bottom: 24px;
      b {
        color: ${({theme}) => theme.colors.whiteColor};
        letter-spacing: 0;
      }
      &:nth-child(3) {
        max-width: 770px;
      }
    }
  }
`

export default ServicesBannerWrapper;