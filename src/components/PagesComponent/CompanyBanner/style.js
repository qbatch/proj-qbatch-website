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
  ${media.sm`
    background-color: #0A2545;
    background-image:none;
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
    padding-top: 28px;
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
