import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const FleetIssuesWrapper = styled.div`
  background-image: url('/retail-section-bg.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  padding: 96px 0px;
  ${media.sm`
    padding: 40px 0px;
  `};
  ${media.mobile`
    background: #0A2545;
    background-image:none;
  `}
.build-retail-wrapper {
    display: flex;
    ${media.sm`
    flex-wrap:wrap;
      `}
    h2{
      color: #FFFFFF;
      margin-bottom: 8px;
      max-width: 630px;
      ${media.sm`
        margin-bottom: 24px;
      `}
    }
    .right-section-wrapper {
      display: flex;
      flex-direction: column;
      grid-row-gap: 12px;
      .right-section-item {
        display: flex;
        align-items: center;
        grid-gap: 12px;
        h3{
          color: #ffff;
          margin: 0;
          font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
          font-weight: ${({ theme }) => theme.fontWeight.bold};
          line-height: 32px;
          text-align: left;
          ${media.mobile`
            font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
            font-weight: ${({ theme }) => theme.fontWeight.normal};
            line-height: 18px;
          `}
      }
    }
  }
}
`

export default FleetIssuesWrapper;
