import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const InnerBannerWrapper = styled.div`
  background: url('/inner-banner-bg.svg');
  background-size: cover;
  background-position: top;
  padding: 96px 203px;
  ${media.md`
    padding: 96px 120px 120px;
  `}
  ${media.sm`
    padding: 40px 40px;
  `}
  &.mvp-wrapper{
    .heading{
      .caption{
        margin-top: 24px;
      margin-bottom: 72px;
      }
    }
  }
  .caption {
    color: ${({ theme }) => theme.colors.whiteColor};
    font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    margin-top: 48px;
    display: block;
  }
  .heading {
    color: ${({ theme }) => theme.colors.whiteColor};
    margin: auto;
    text-transform: capitalize;
    .inner-heading {
      color: ${({ theme }) => theme.colors.dividerColor};
      display: block;
    }
  }
  .idea-btn {
    ${media.xs`
      margin-top: 30px !important;
    `}
  }
`

export default InnerBannerWrapper;
