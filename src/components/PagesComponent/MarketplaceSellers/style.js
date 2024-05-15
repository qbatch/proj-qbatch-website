import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const MarketplaceSellersWrapper = styled.div`
  background-image: ${(props) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : 'url(/growing-bg.svg)'};
  background-size: cover;
  padding: 120px 203px;
  &.productDesign {
    .text-h2.heading {
      font-size: 68px;
      ${media.md`
       font-size: 32px;
      `}
    }
  }
  ${media.md`
    padding: 96px 120px;
  `}
  ${media.sm`
    padding: 56px 24px;
  `}

  .heading {
    color: ${({ theme }) => theme.colors.whiteColor};
    max-width: 1038px;
    margin-bottom: 20px;
    ${media.sm`
      margin-bottom: 16px;
    `}
  }
  .paragraph {
    font-size: 24px;
    max-width: 931px;
    font-weight: 300;
    line-height:32px;
    margin-bottom: 78px;
    letter-spacing: 0.69px;
    color: ${({ theme }) => theme.colors.whiteColor};
    ${media.sm`
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    margin-bottom :40px;
    `}
  }
  &.web-scraping-component {
    padding: 96px 203px;
    ${media.md`
      padding: 96px 120px;
    `}
    ${media.sm`
      padding: 56px 20px;
    `}
    .heading {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeH1};
      line-height: 68px;
      ${media.md`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeH2};
        line-height: 48px;
      `}
      ${media.sm`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
        line-height: 32px;
      `}
    }
  }
`

export default MarketplaceSellersWrapper;
