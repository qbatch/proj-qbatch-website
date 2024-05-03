import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ExtensionInnerBannerWrapper = styled.div`
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
  .paragraph {
    color: ${({ theme }) => theme.colors.whiteColor};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    margin-top: 24px;
    display: block;
  }
  .heading {
    color: ${({ theme }) => theme.colors.whiteColor};
    margin: auto;
    text-transform: none;
    .inner-heading {
      color: ${({ theme }) => theme.colors.dividerColor};
      display: block;
    }
  }
  .banner-inner-img{
    object-fit: contain;
  }
  .idea-btn {
    ${media.xs`
      margin-top: 30px !important;
    `}
  }
`

export default ExtensionInnerBannerWrapper;
