import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ExtensionInnerBannerWrapper = styled.div`
background-color:  ${({ theme }) => theme.colors.secondaryColor};
&.saas-list-banner{
  li{
    position: relative;
    display: flex;
    align-items: start;
    gap: 8px;
    &:before{
      content: '';
      display: block;
      width: 8px;
      height: 2px;
      margin-top: 20px;
      background-color: ${({ theme }) => theme.colors.dividerColor} ;
    }
  }
}
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
      padding: 20px 0 !important;
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
    ${media.lg`
       ul{
        column-count: 1;
       }
    `}
  }
  &.edu-inner-banner{
    .idea-btn{
      ${media.md`
        justify-content: center;
      `}
    }
  }
`

export default ExtensionInnerBannerWrapper;
