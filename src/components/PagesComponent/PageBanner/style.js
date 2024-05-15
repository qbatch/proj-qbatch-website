import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const CtoBannerWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  background-image: ${(props) => `url(${props.blogInner ? props.blogInner : ''})`};
  background-position: 100% 100%;
  background-repeat: no-repeat;
  padding: 132px 0 98px 0;

  min-height:calc(100vh - 70px);
  margin: auto;
  ${media.lg`
     min-height:calc(100vh - 700px);
  `}
  ${media.sm`
  padding: 56px 0 !important;
  height:auto;
  min-height:auto;
  `}
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  &.portfolio-banner{
    .banner-main{
      .text-h1{
        margin-right:0;
        margin-left:0;
      }
    }
  }
  &.extension-dev-banner{
    h2{
      text-transform: none;
    }
    ${media.md`
      .breadcrumb{
        display: none;
      }
    `}
  }
  .breadcrumb {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
    color: ${({ theme }) => theme.colors.whiteColor};
    margin: 0px 0 12px 10px;
    position:relative;
    a {
      color: ${({ theme }) => theme.colors.whiteColor};
    }
    ${media.sm`
      display: none;
  `}
  }
  .banner-main {
    position:relative;
    z-index:1;
    .banner-sub-heading {
      font-size:${({ theme }) => theme.fonts.baseFontSizeSm};
      font-weight: 700;
      padding-bottom: 12px;
      margin-bottom:0px;
      color: ${({ theme }) => theme.colors.dividerColor};
      letter-spacing: 0;
      text-transform:none;
      ${media.lg`
        font-size: 16px;
        line-height:24px;
      `}
    }
    .text-h1 {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 24px;
      max-width: 716px;
      text-transform:none;
      i{
        color: ${({ theme }) => theme.colors.textColor};
      }
      ${media.md`
      margin: auto;
      margin-bottom: 24px;
      `}
      span {
        color: ${({ theme }) => theme.colors.dangerColor};
      }
    }
    p {
      max-width: 750px;
      margin-bottom: 48px;
      line-height: 32px;
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      color: ${({ theme }) => theme.colors.dividerColor};
      a{
        color: ${({ theme }) => theme.colors.textColor};
      }
      ${media.lg`
        margin: 0 auto;
        margin-bottom: 32px;
        font-size: 16px;
        line-height: 24px;
        margin-left:0px;
      `}
    }
  }
  &.services-banner{
    min-height: 100vh;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 100px 0;
    & > div{
      width: 100%;
    }
    ${media.sm`
      min-height: auto;
    `}
  }
  &.dev-ops-banner{
    padding: 100px 0;
    display: flex;
    align-items: center;
    .inner-container{
      width:100%;
    }
  }
  &.cto-banner {
    padding: 96px 0 96px;
    background-position:right;
    justify-content:start;
    display: flex;
    align-items: center;
       &.change-background-size{
      background-size:50%;
    }
    .container-wrapper {
    align-items: center;
    display: flex;
    ${media.md`
      justify-content: center;
    `}
    .banner-main {
      .text-h1 {
        max-width: 515px;
      }
    }
}
  ${media.md`
    background-image: none;
    position: relative;
    justify-content:center;
    display: flex;
    z-index: 2;
`}
    .banner-img {
      margin-top: -48px;
      object-fit: contain;
    }
    .banner-main {
      h1 {
        max-width: 744px;
      }
      p {
        max-width: 690px;
        i{
          color: ${({ theme }) => theme.colors.textColor};
        }
      }
    }
    @media (max-width: 1480px) {
      padding: 143px 0 140px;
    }
  }
  &.product-design-banner {
    ${media.md`
    background-image:none;
    `}
    .text-h1 {
      white-space: pre-wrap;
    }
    .banner-img {
      object-fit: contain;
    }
    .mobile-view-banner {
      display:none;
    }
    ${media.md`
    .mobile-view-banner {
    height: auto;
    position: absolute;
    right: 8px;
    z-index: 0;
    bottom: 0;
    object-fit: cover;
    display: block;
}
    
    `}
    p {
      max-width: 750px;
    }
  }
  &.mobile-app-banner {
    padding: 159px 0px 144px;
    display:flex;
    justify-content:start;
    ${media.md`
    display:flex;
    justify-content:center;
    
    `}
    .banner-img {
      position: absolute;
      right: 0;
      bottom: 0;
      height: 100%;
      max-width: 55%;
      object-fit: contain;
      object-position: bottom;
    }
    h1 {
      max-width: 756px;
    }
  }
  &.enterprise-banner {
    padding: 143px 0px 120px;
    position:relative;
    justify-content:flex-start;
    z-index:1;
   ${media.md`
  display: flex;
  justify-content:center;
    &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #0000004a;
    top: 0;
    z-index: 0;
}`
}
    .banner-img {
      position: absolute;
      right: 0;
      bottom: 0;
      height: 100%;
      max-width: 55%;
      object-fit: contain;
      object-position: bottom;
    }
    h1 {
      max-width: 904px;
    }
  }
  &.web-data-scraping {
    padding: 212px 0 189px;
    ${media.sm`
    padding: 56px 0;
    `}
    ${media.md`
    background-image: none;
    `}
    .banner-main {
      p {
        max-width: 680px;
      }
    }
    .banner-img {
      position: absolute;
      right: 0;
      bottom: 0;
      height: 100%;
      max-width: 55%;
      object-fit: contain;
      object-position: bottom;
    }
    h1 {
      max-width: 904px;
      margin-bottom: 0;
    }
    h2 {
      white-space: pre-line;
    }
    .text-h1 {
      ${media.md`
        margin: 0 0 24px;
      `}
    }
  }
  img.mobile-view-banner {
    display: none;
    ${media.sm`
    display: block;
    `}
}
  ${media.md`
    &.enterprise-banner,&.mobile-app-banner,&.product-design-banner,&.cto-banner{
      padding: 100px 0;
    }
  `}
    &.hire-developer-banner {
      background-size:cover;
      display:flex;
      align-items:center;
      ${media.sm`
      min-height:auto;
      height: auto;
      background-image:none ;
      `}
  }
`

export default CtoBannerWrapper;
