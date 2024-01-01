import styled from 'styled-components'
import { media } from '../../../theme/media-mixins'

const ServicesBannerWrapper = styled.div`
  background-image: url('/abouUs-banner.svg');
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  background-position: 100% 53px;
  background-repeat: no-repeat;
  padding: 132px 0 98px 0;

  ${media.sm`
    padding: 40px 0;
    background-position: bottom left;
  `}
  p {
    color: ${({ theme }) => theme.colors.whiteColor};
    font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
    line-height: 32px;
    max-width: 749px;
    margin-top: 33px;
    letter-spacing: 0px;
    margin-bottom: 78px;
  }
  .banner-headings {
    padding-top: 37px;
    ${media.md`
      text-align: center;
    `}
    span {
      display: block;
    }
  }
`
const H1 = styled.h1`
  font-size: 64px;
  color: ${({ theme }) => theme.colors.whiteColor};
  margin-bottom: 0px;
  ${media.lg`
    font-size: 80px;
    line-height: 86px;
  `}
  ${media.sm`
  font-size: 60px;
    line-height: 68px;
  `}
  ${media.xs`
  font-size: 48px;
    line-height: 52px;
  `}
`

export { ServicesBannerWrapper, H1 }
