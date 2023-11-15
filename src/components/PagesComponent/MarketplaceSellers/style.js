import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const MarketplaceSellersWrapper = styled.div`
  background: url("/growing-bg.svg");
  background-size: cover;
  padding: 120px 203px;
  &.productDesign{
    .text-h2.heading{
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
    padding: 96px 40px;
  `}
  ${media.xs`
    padding: 96px 20px;
  `}

  .heading {
    color: ${({ theme }) => theme.colors.whiteColor};
    max-width: 1038px;
    margin-bottom: 20px;
    ${media.sm `
      margin-bottom: 16px;
    `}
  }
  .paragraph{
    font-size: 24px;
    max-width: 931px;
    font-weight: 300;
    margin-bottom: 78px;
    letter-spacing: 0.69px;
    color: ${({ theme }) => theme.colors.whiteColor};
    ${media.sm`
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    margin-bottom :40px;
    `}
  }
`;

export default MarketplaceSellersWrapper;
