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
    padding: 96px;
    padding-right: 0;
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
  &.saas-inner-banner{
    .paragraph{
      max-width: 811px;
    }
    ul{
      list-style-type: none;
      column-count: 2;
      padding-left: 0;
      li{
        color: ${({ theme }) => theme.colors.dividerColor} ;
        line-height: 40px;
        font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
  
      }
    }
    &.why-trust{
      .extension-banner-inner{
        padding: 64px 0 64px 96px;
      }
    }
  }

`

export default ExtensionInnerBannerWrapper;
