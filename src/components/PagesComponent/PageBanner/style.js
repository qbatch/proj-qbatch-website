import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const CtoBannerWrapper = styled.div`
  position: relative;
  max-width: 1600px;
  margin: auto;
  ${media.sm`
     padding: 40px 0px;
  `}
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  .banner-main {
    ${media.md`
     text-align: center;
    `}
    .banner-sub-heading{
      font-size:24px;
      font-weight: 700;
      padding-bottom: 10px;
      color: ${({ theme }) => theme.colors.secondaryColor};
      letter-spacing: 0;
      ${media.lg`
        font-size: 16px;
      `}
    }
    .text-h1 {
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 34px;
      margin-top: 3px;
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
      letter-spacing: 0.7px;
      ${media.lg`
        margin: 0 auto;
        margin-bottom: 32px;
        font-size: 16px;
        line-height: 24px;
      `}
    }
  }

  &.cto-banner{
    padding: 143px 0 50px;
    .banner-img{
      margin-top: -48px;
      object-fit: contain
    }
   .banner-main{
    h1{
      max-width: 744px;
    }
    p{
      max-width: 690px;
    }
   }
   @media (max-width: 1480px){
    padding: 143px 0 140px;
   }
  }
  &.product-design-banner{
    padding: 143px 0 144px;
    .banner-img{
      object-fit: contain;
    }
    p{
      max-width:724px;
    }
  }
  &.mobile-app-banner{
    padding: 159px 0px 144px;
    .banner-img{
      position: absolute;
      right: 0;
      bottom: 0;
      height: 100%;
      max-width: 55%;
      object-fit: contain;
      object-position: bottom;
    }
    h1{
      max-width: 756px;
    }
  }
  &.enterprise-banner{
    padding: 143px 0px 120px;
    .banner-img{
      position: absolute;
      right: 0;
      bottom: 0;
      height: 100%;
      max-width: 55%;
      object-fit: contain;
      object-position: bottom;
    }
    h1{
      max-width: 904px;
    }
  }
  ${media.md`
    &.enterprise-banner,&.mobile-app-banner,&.product-design-banner,&.cto-banner{
      padding: 100px 0;
    }
  `}
`;

export default CtoBannerWrapper;
