import styled from "styled-components";
import { media } from '../../../theme/media-mixins'

const HomeBannerWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteColor};
  background-image: url('/home-banner-bg.svg');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 180px 0 120px;
  position: relative;
  min-height: 796px;
  z-index: 1;
  ${media.lg`
    padding: 120px 0;
    min-height: auto;
  `}
  ${media.xs`
    padding: 56px 0;
  `}
  .banner-home {
    h1 {
      color: ${({ theme }) => theme.colors.secondaryColor};
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
      color: ${({ theme }) => theme.colors.newTextColor};
      margin-bottom: 40px;
      max-width: 540px;
      ${media.lg`
        max-width: 440px;
      `}
      ${media.xs`
        margin-bottom: 24px;
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
      @media(max-width:1400px) {
        width: 660px;
      }
      ${media.lg`
        width: 500px;
      `}
    }
  }
`

export default HomeBannerWrapper;