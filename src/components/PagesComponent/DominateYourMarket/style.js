import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const DominateMarketWrapper = styled.div`
  padding: 96px 0px;
  ${media.sm `
  padding: 56px 0px;
  `}
  .heading-box {
    h2 {
      max-width: 970px;
      margin: 0 auto 72px;
      ${media.sm`
        margin-bottom: 48px;
      `}
      ${media.mobile`
        margin-bottom: 32px;
        text-align: left;
      `}
    }
  }
  .images-box {
    p {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      line-height: 32px;
      margin: 24px 0 0;
      text-align: center;
      ${media.mobile`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
        line-height: 18px;
        margin: 16px 0 0;
      `}
      }
      img {
        ${media.mobile`
          width: 82px;
          height: 82px;
      `}
    }
    .col-md-4 {
      ${media.sm `
        margin-bottom: 32px;
        &:last-child {
          margin-bottom: 0;
        }
      `}
    }
  }
`
export default DominateMarketWrapper;
