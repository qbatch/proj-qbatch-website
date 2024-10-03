import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ImagineRetailExperienceWrapper = styled.div`
padding: 96px 0;
border-bottom:1px solid ${({ theme }) => theme.colors.dividerColor};
&.travel-app-wrapper{
  p.p-text{
    display: none;
  }
  .cards-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    ${media.sm`
      grid-template-columns: 1fr;
      margin-top: 32px;
              `}
  }
}
${media.sm`
  padding: 40px 0;
      `}
h2{
  color: #0054A6;
  margin:0;
  text-align: center;
  ${media.sm`
  text-align: left;
  font-size: 24px;
  line-height: 32px;
      `}
}
p{
font-size: 20px;
font-weight: 400;
line-height: 32px;
text-align: center;
margin:0;
color: #5F737C;
margin-top: 24px;
${media.sm`
  text-align: left;
  font-size: 14px;
  line-height: 24px;
  margin-top: 12px;
      `}
}
.cards-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    ${media.md`
      grid-template-columns: 1fr 1fr;
      `}
    ${media.sm`
      grid-template-columns: 1fr;
      margin-top: 32px;

      `}
    grid-gap: 48px 24px;
    margin-top: 72px;
    .card-item{
      display: flex;
      grid-gap: 24px;
      align-items: flex-start;
      padding-bottom: 32px;
      border-bottom: 1px solid #D2D9DC;
      ${media.sm`
        padding-bottom: 24px;
              `}
      .card-item-text{
        display: flex;
        flex-direction: column;
        grid-row-gap: 16px;
        ${media.sm`
          grid-row-gap: 8px;
              `}
        h3{
          margin:0;
          font-size: 24px;
          font-weight: 600;
          line-height: 32px;
          text-align: left;
          ${media.sm`
          font-size: 16px;
          line-height: 24px;
              `}
        }
        p{
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        color: #5F737C;
        margin:0;
        ${media.sm`
          font-size: 14px;
          line-height: 20px;
              `}
        }
      }
    }
}
button{
  margin:auto;
  margin-top: 72px;
  ${media.sm`
  margin-top:32px;
    `}
}
`;

export { ImagineRetailExperienceWrapper }
