import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const HealthCareWrapper = styled.div`
padding: 96px 0px;
border-bottom:1px solid ${({ theme }) => theme.colors.dividerColor};
h2{
font-size: 40px;
font-weight: 700;
line-height: 52px;
text-align: center;
color: ${({ theme }) => theme.colors.primaryColor};;
margin: 0;
margin-bottom: 24px;
${media.lg`
    font-size: 32px;
    font-weight: 700;
      `}
      ${media.sm`
        font-size: 24px;
        line-height: 32px;
      `}
      ${media.mobile`
            text-align:left;
            `}
}
p{
font-size: 20px;
font-weight: 400;
line-height: 32px;
text-align: center;
color: #667176;
margin: 0;
${media.lg`
    font-size: 16px;
    line-height: 24px;

      `}
      ${media.sm`
        font-size: 14px;
        line-height: 20px;
      `}
      ${media.mobile`
            text-align:left;
            `}
}
.card-wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  margin-top: 40px;
  ${media.md`
      grid-gap: 12px;
      `}
  ${media.sm`
    grid-template-columns: 1fr 1fr;
      `}
  ${media.xs`
    grid-template-columns: 1fr;
      `}

  .card-item{
    display: flex;
    align-items: flex-start;
    grid-gap: 16px;
    max-width: 453px;
    padding: 24px 32px;
    border-radius: 24px 24px 0px 24px;
    background-color: #fff;
    border: 1px solid #D2D9DC;
    ${media.md`
      padding: 12px;
      grid-gap: 8px;
      `}
      ${media.xs`
      align-items: center;
      `}
      img{
        ${media.md`
        width: 32px;
      `}
      }
    p{
      margin: 0;
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      text-align: left;
      color: #2D2F31;
      margin: 0;
      ${media.xl`
        font-size: 20px;
        line-height: 28px;
      `}
      ${media.standard`
        font-size: 16px;
        line-height: 24px;
      `}
      ${media.customElementsBreakPoint`
        font-size: 12px;
        line-height: 20px;
      `}
      ${media.sm`
    font-size: 14px;
      `}
      ${media.mobile`
    font-size: 12px;
      `}
    }
  }
}
`;

export { HealthCareWrapper }