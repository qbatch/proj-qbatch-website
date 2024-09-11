import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const CollaborationModelsWrapper = styled.div`
padding: 96px 0;
border: 1px solid ${({ theme }) => theme.colors.dividerColor};
h2{
font-size: 40px;
font-weight: 700;
line-height: 52px;
text-align: center;
color: ${({ theme }) => theme.colors.primaryColor};
margin: 0;
${media.lg`
    font-size: 32px;
    font-weight: 700;
    line-height: 42px;
      `}
      ${media.sm`
        font-size: 24px;
        line-height: 32px;
      `}
}
p{
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: center;
color: #5F737C;
margin: 0;
margin: auto;
margin-top: 16px;
max-width: 593px;
${media.lg`
    font-size: 16px;
    line-height: 24px;

      `}
      ${media.sm`
        font-size: 14px;
        line-height: 20px;
      `}
}
.cards-wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  margin-top: 56px;
}
.cards-item{
  display: flex;
  flex-direction: column;
  grid-gap: 36px;
  align-items: center;
  .card-data{
    background-color: #FFFFFF;
    border-radius: 12px;
    padding: 80px 12px 24px;
    box-shadow: 0px 0px 32px 0px #0000001A;
    ${media.lg`
      padding: 40px 12px 24px;
      `}
    h3{
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    text-align: center;
    color: #434343;
    margin: 0;
    ${media.lg`
    font-size: 20px;
    line-height: 28px;
      `}
    }
    p{
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    color: #5F737C;
    margin-bottom: 0;
    ${media.lg`
    font-size: 14px;
    line-height: 20px;

      `}
    }
  }
}
`;
export { CollaborationModelsWrapper }