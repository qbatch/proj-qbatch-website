import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const CtoBannerWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  background-image: ${(props) => `url(${props.blogInner ? props.blogInner : ''})`};
  background-position: 100% 100%;
  background-repeat: no-repeat;
  padding: 132px 0 98px 0;
  height:calc(100vh - 70px);
  margin: auto;
  ${media.lg`
     min-height:calc(100vh - 700px);
  `}
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  .breadcrumb {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
    color: ${({ theme }) => theme.colors.whiteColor};
    margin: 4px 0 16px 10px;
    a {
      color: ${({ theme }) => theme.colors.whiteColor};
    }
    ${media.xs`
      margin: 0 0 12px;
  `}
  }
  .banner-main {
    position:relative;
    z-index:1;
    ${media.md`
     text-align: center;
    `}
    .banner-sub-heading {
      font-size: 20px;
      font-weight: 700;
      padding-bottom: 10px;
      color: ${({ theme }) => theme.colors.dividerColor};
      letter-spacing: 0;
      ${media.lg`
        font-size: 16px;
      `}
    }
    .text-h1 {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 34px;
      margin-top: 3px;
      max-width: 723px;
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
      max-width: 680px;
      margin-bottom: 40px;
      line-height: 32px;
      font-size: 24px;
      color: ${({ theme }) => theme.colors.whiteColor};
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
    padding: 143px 0 50px;
    background-position:right;
    justify-content:start;
       &.change-background-size{
      background-size:50%;
    }
    .container-wrapper {
    align-items: center;
    display: flex;
 
}
    .mobile-view-banner {
      display:none;
    }
  ${media.md`
    background-image: none;
    position: relative;
    height:calc(100vh - 65px);
    justify-content:center;
    display: flex;
    z-index: 2;
    .mobile-view-banner {
      max-width: 400px;
    height: auto;
    position: absolute;
    right: 8px;
    z-index: -1;
    bottom: 0;
    object-fit: cover;
    display: block;
}
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
    padding: 143px 0 144px;
    ${media.md`
    background-image:none;
    
    `}
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
      max-width: 724px;
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
    .mobile-view-banner {
      display:none;
    }
    ${media.md`
    .mobile-view-banner {
    max-width: 400px;
    height: auto;
    position: absolute;
    right: 8px;
    z-index: 0;
    bottom: 0;
    object-fit: cover;
    display: block;
}
    
    `}
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
    .mobile-view-banner {
      display:none;
    }
    ${media.md`
    .mobile-view-banner {
      max-width: 400px;
      height: auto;
      position: absolute;
      right: 8px;
      z-index: 0;
      bottom: 0;
      object-fit: cover;
      display: block;
    }
    `}
    h1 {
      max-width: 904px;
    }
  }
  &.web-data-scraping {
    padding: 212px 0 189px;
    .mobile-view-banner {
      display:none;
    }
    ${media.md`
    background-image: none;
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
  ${media.md`
    &.enterprise-banner,&.mobile-app-banner,&.product-design-banner,&.cto-banner{
      padding: 100px 0;
    }
  `}
    &.hire-developer-banner {
    &:before {
      width: 100%;
      height: 100%;
      position: absolute;
      background: #0000002e;
      top: 0;
      left: 0;
      content: "";
    }
  }
`

export default CtoBannerWrapper;
