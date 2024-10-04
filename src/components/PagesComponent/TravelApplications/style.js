import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const TravelApplicationsWrapper = styled.div`
padding: 96px 0px;
border: 1px solid ${({ theme }) => theme.colors.dividerColor};
${media.sm`
  padding: 40px 0px;
    `}
h2 {
    line-height: 52px;
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 24px;
    text-align: center;
    ${media.sm`
      line-height: 32px;
      text-align: left;
    `}
    ${media.sm`
      line-height: 32px;
      margin-bottom: 12px;
    `}
    }
    .card-item {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px 24px;
    margin-top: 72px;
    ${media.customBrakePoint`
      grid-gap: 32px 16px;
      `}
    ${media.md`
      grid-template-columns: 1fr 1fr;
      grid-gap: 24px;
      margin-top: 32px;
      `}
    ${media.mobile`
      grid-template-columns: 1fr;
      `}
    .cards {
    display: flex;
    align-items: flex-start;
    grid-gap:32px;
    padding: 24px;
    border: 1px solid #D2D9DC;
    background-color:#fff;
    border-radius: 24px 24px 0;
    ${media.customBrakePoint`
      padding: 16px;
      `}
      ${media.lg`
      grid-gap: 32px 16px;
      `}
    .card-content {
    display: flex;
    flex-direction: column;
    grid-row-gap: 16px;
    h3{
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    text-align: left;
    color:#2D2F31;
    ${media.sm`
      font-size: 16px;
      line-height: 24px;
      `}
    }
    p{
    font-size: ${({theme}) => theme.fonts.baseFontSize};
    font-weight: ${({theme}) => theme.fontWeight.normal};
    line-height: 24px;
    text-align: left;
    color:#5F737C;
    ${media.sm`
      font-size: 12px;
      line-height: 16px;
      `}
    }
}
}
}




`;

export { TravelApplicationsWrapper }