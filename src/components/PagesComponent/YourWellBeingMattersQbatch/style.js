import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const YourWellBeingMattersQbatchWrapper = styled.div`
padding: 96px 0px;
border-bottom:1px solid ${({ theme }) => theme.colors.dividerColor};
${media.sm`
  padding: 40px 0px;
`}
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
.cards-overlay-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 24px;
    margin-top:72px;
    ${media.lg`
      grid-template-columns: 1fr 1fr 1fr;
      `}
    ${media.sm`
      grid-template-columns: 1fr 1fr;
      margin-top:32px;
      `}
    ${media.xs`
      grid-template-columns: 1fr;
      `}
.card-item{
  background-color:#E8F4FF;
  border:.5px solid #D2D9DC;
  padding:24px;
  border-radius:0px 28px 28px 28px;
  display:flex;
  flex-direction:column;
  grid-row-gap:8px;
  h3{
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
    text-align: left;
    color:#2D2F31;
    margin:0;
    ${media.mobile`
      font-size: 18px;
      line-height: 24px;
      `}
  }
  p{
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color:#5F737C;
    margin:0;
    ${media.mobile`
      font-size: 14px;
      line-height: 20px;
    `}
  }
}
}
`;
export { YourWellBeingMattersQbatchWrapper }
