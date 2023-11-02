import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ServicesBannerWrapper = styled.div`
  background-image: url('/portfolio-banner.svg');
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  background-repeat: no-repeat;
  background-size: 78% 100%;
  background-position: center;
  padding: 98px 0 120px 0px;
  ${media.sm`
    padding: 40px 0;
  `}
  .banner-content {
    margin-left: 53px;
    margin-top: 28px;
    h1 {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 16px;
    }
    .second-h1 {
      display: flex;
      color: ${({ theme }) => theme.colors.bodyLight};
    }
    h2 {
      color: ${({ theme }) => theme.colors.dividerColor};
      font-weight: ${({ theme }) => theme.fontWeight.normal};
      line-height: 32px;
      max-width: 1070px;
      margin-bottom: 32px;
      text-transform: none;
      b {
        color: ${({ theme }) => theme.colors.whiteColor};
        letter-spacing: 0;
        margin-top: 5px;
        display: block;
      }
      &:nth-child(3) {
        max-width: 1150px;
      }
    }
  }
  .button-box {
    margin-top: 86px;
    margin-left: 4px;
  }
`

export default ServicesBannerWrapper;
