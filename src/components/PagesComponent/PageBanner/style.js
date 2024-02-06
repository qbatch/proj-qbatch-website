import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const CtoBannerWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  background-image: ${(props) => `url(${props.blogInner ? props.blogInner : ''})`};
  background-position: 100% 100%;
  background-repeat: no-repeat;
  padding: 132px 0 98px 0;
  height:100vh;
  margin: auto;
  ${media.sm`
     padding: 40px 0px;
  `}
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  .banner-main {
    ${media.md`
     text-align: center;
    `}
    .banner-sub-heading {
      font-size: 20px;
      font-weight: 700;
      padding-bottom: 10px;
      color: ${({ theme }) => theme.colors.bodyLight};
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
      ${media.lg`
        margin: 0 auto;
        margin-bottom: 32px;
        font-size: 16px;
        line-height: 24px;
      `}
    }
  }
  &.services-banner{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 150px 0;
    & > div{
      width: 100%;
    }
  }

  &.cto-banner {
    padding: 143px 0 50px;
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
    .banner-img {
      object-fit: contain;
    }
    p {
      max-width: 724px;
    }
  }
  &.mobile-app-banner {
    padding: 159px 0px 144px;
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
`

export default CtoBannerWrapper;
