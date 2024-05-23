import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ExtensionInnerBannerWrapper = styled.div`
background-color:  ${({ theme }) => theme.colors.secondaryColor};
  ${media.md`
    padding: 56px 120px 62px;
  `}
  ${media.sm`
    padding: 40px 40px;
  `}
  .paragraph {
    color: ${({ theme }) => theme.colors.whiteColor};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    margin-top: 24px;
    display: block;
    max-width: 572px;
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
  .extension-banner-inner{
    padding: 96px 0;
    ${media.sm`
      padding: 20px 0;
    `}
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
