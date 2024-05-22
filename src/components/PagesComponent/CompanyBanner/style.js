import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const BannerWrapper = styled.div`
  background-image: url('/abouUs-banner.svg');
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  background-position: 100% 53px;
  background-repeat: no-repeat;
  padding: 194px 0;
  position: relative;
  z-index: 1;
  .breadcrumb-wrapper{
    margin: auto;
    position: absolute;
    z-index: 99;
    width: 100%;
      top: 0;
      left: 0;
      background: #001A33;
      padding: 0;
  }
  .breadcrumb {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
    color: ${({ theme }) => theme.colors.whiteColor};
    margin: 0 0 12px 0;
    padding: 16px 96px;
    max-width: 1600px;
    margin: auto;
    overflow: scroll;
    a {
      color: ${({ theme }) => theme.colors.whiteColor};
      white-space: nowrap;
    }
    ${media.lg`
      padding: 16px 80px;
    `}
    ${media.md`
      padding: 16px 60px;
    `}
    ${media.sm`
      padding: 16px 40px;
    `}
    ${media.xs`
      padding: 16px 24px;
    `}
  }
  ${media.sm`
  &::after{
    content: "";
    width: 100%;
    height: 100%;
    background: #002548;
    position: absolute;
    top: 0;
    z-index: -1;
    opacity: 0.4;
  }
  
  `}


  ${media.sm`
    padding: 40px 0;
    background-position: bottom left;
    background-size: contain;
  `}
  .banner-headings {
    ${media.md`
      text-align: center;
    `}
    ${media.sm`
      text-align: left;
    `}
    span {
      display: block;
    }
    p {
    color: ${({ theme }) => theme.colors.whiteColor};
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    max-width: 749px;
    margin-top: 32px;
    letter-spacing:0px;
    margin-bottom:48px;
    line-height: 32px;
  }
  }
  .banner-button {
    ${media.sm`
    display: flex;
    justify-content: left;
  `}
}
`
const H1 = styled.h1`
    font-size: ${({ theme }) => theme.fonts.fsh1};
  color: ${({ theme }) => theme.colors.whiteColor};
  margin-bottom: 0px;
`

export { BannerWrapper, H1 };
