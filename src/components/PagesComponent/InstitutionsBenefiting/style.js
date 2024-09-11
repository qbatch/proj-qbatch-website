import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const InstitutionsBenefitingWrapper = styled.div`
padding: 96px 0;
border-bottom:1px solid ${({ theme }) => theme.colors.dividerColor};
h2{
font-size: 40px;
font-weight: 700;
line-height: 52px;
text-align: center;
color: ${({ theme }) => theme.colors.primaryColor};
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
color: #5F737C;
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
.section {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 24px;
    margin-top: 72px;
    ${media.lg`
      grid-template-columns: 2fr;
      `}
.item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    ${media.mobile`
      grid-template-columns: 1fr;
      grid-row-gap:16px;
      
      `}
    ul{
      display: flex;
      flex-direction: column;
      grid-row-gap: 24px;
      ${media.sm`
      padding-left:16px;
        `}
      li{
        font-size: 20px;
        font-weight: 500;
        line-height: 32px;
        text-align: left;
        color: #2D2F31;
        ${media.lg`
        font-size: 16px;
        line-height: 24px;
      `}
      }
    }
    &.item-2{
      display: grid;
      grid-template-columns: 1fr;
      border-radius: 24px;
      padding: 63px 14px;
      background: linear-gradient(182.08deg, #D9ECFF -5.97%, rgba(217, 236, 255, 0) 149.03%);
      ${media.lg`
      display: flex;
      justify-content: center;

      `}
    }
    ul{
      li{
        list-style: disc;
      }
    }
}
}
`;
export { InstitutionsBenefitingWrapper }