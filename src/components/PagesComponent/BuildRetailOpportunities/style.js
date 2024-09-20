import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const BuildRetailOpportunitiesWrapper = styled.div`
background-image: url('/retail-section-bg.svg');
background-repeat: no-repeat;
background-size: cover;
background-position: bottom;
padding: 96px 0px;
${media.sm`
  padding: 40px 0px;
`};
  ${media.mobile`
 background: #0A2545;
 background-image:none ;
    `}
.build-retail-wrapper {
    display: flex;
    ${media.sm`
    flex-wrap:wrap;
      `}
    h2{
      color: #FFFFFF;
      margin-bottom: 8px;
    }
    .right-section-wrapper {
    display: flex;
    flex-direction: column;
    grid-row-gap: 12px;
    p{
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    text-align: left;
    color: #FFFFFF;
    margin-bottom: 0px;
    ${media.mobile`
      font-size: 14px;
      line-height: 20px;
      margin-bottom:20px;
      `}
    }
    .right-section-item {
    display: flex;
    align-items: center;
    grid-gap: 12px;
    h3{
      color: #ffff;
      margin: 0;
      font-size: 20px;
      font-weight: 700;
      line-height: 32px;
      text-align: left;
      ${media.mobile`
      font-size: 16px;
      line-height: 24px;
      `}
    }
}
  }
}

`;

export { BuildRetailOpportunitiesWrapper }
