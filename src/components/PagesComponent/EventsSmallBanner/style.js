import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const EventsSmallBannerWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  background-image: url('/event-banner-img.svg');
  padding: 126px 0 80px;
  background-repeat: no-repeat;
  background-position: 113% 100%;
  position: relative;
  ${media.sm`
    background-image: none;
  `}
  ${media.mobile`
    padding: 102px 0 56px;
  `}
  .events-banner {
    h1 {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 16px;
      ${media.sm`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeH3};
        line-height: 40px;
      `}
    }
    p {
      color: ${({ theme }) => theme.colors.dividerColor};
      font-weight: ${({ theme }) => theme.fontWeight.normal};
      max-width: 650px;
      ${media.mobile`
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        line-height: 24px;
      `}
    }
  }
`

export default EventsSmallBannerWrapper;
