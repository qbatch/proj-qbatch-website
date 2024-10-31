import styled from "styled-components";
import { media } from '../../../theme/media-mixins'

const HomeBannerWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteColor};
  background-image: url('/home-banner-bg.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 180px 0 120px;
  position: relative;
  min-height: 796px;
  z-index: 1;
  position: relative;
  ${media.lg`
    padding: 120px 0;
    min-height: auto;
    background-image: none;
    background: linear-gradient(0deg, #D9ECFF -5.97%, rgba(255, 255, 255, 0) 149.03%);
  `}
  ${media.xs`
    padding: 56px 0;
  `}
  .banner-home {
    h1 {
      color: #153A6C;
      margin-bottom: 48px;
      max-width: 620px;
      ${media.lg`
        max-width: 440px;
      `}
      ${media.sm`
        margin-bottom: 32px;
        max-width: 350px;
      `}
      ${media.xs`
        margin-bottom: 24px;
      `}
    }
    p {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      color: ${({ theme }) => theme.colors.newTextColor};
      margin-bottom: 40px;
      max-width: 660px;
      line-height: 32px;
      ${media.lg`
        max-width: 440px;
      `}
      ${media.md`
        max-width: 660px;
      `}
      ${media.mobile`
        margin-bottom: 24px;
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        line-height: 24px;
      `}
    }
  }

  .banner-img {
    position: absolute;
    right: 0;
    top: 98px;
    z-index: -1;
    ${media.md`
      display: none;
    `}
    img {
      @media(max-width:1500px) {
        width: 680px !important;
        height: 100% !important;
      }
      @media(max-width:1400px) {
        width: 660px !important;
      }
      ${media.lg`
        width: 500px !important;
      `}
    }
  }
`

export default HomeBannerWrapper;
