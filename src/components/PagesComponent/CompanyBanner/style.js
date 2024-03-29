import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const BannerWrapper = styled.div`
  background-image: url('/abouUs-banner.svg');
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  background-position: 100% 53px;
  background-repeat: no-repeat;
  padding: 132px 0 98px 0;

  ${media.sm`
    padding: 40px 0;
    background-position: bottom left;
  `}
  .banner-headings {
    padding-top: 37px;
    ${media.md`
      text-align: center;
    `}
    span {
      display: block;
    }
    p {
    color: ${({ theme }) => theme.colors.whiteColor};
    font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
    max-width: 749px;
    margin-top: 33px;
    letter-spacing:0px;
    margin-bottom:78px;
  }
  }
`
const H1 = styled.h1`
    font-size: ${({ theme }) => theme.fonts.fsh1};
  color: ${({ theme }) => theme.colors.whiteColor};
  margin-bottom: 0px;
`

export { BannerWrapper, H1 };
