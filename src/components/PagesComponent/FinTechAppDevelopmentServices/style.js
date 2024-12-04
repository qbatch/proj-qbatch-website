import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

export const FinTechAppDevelopmentServicesWrapper = styled.div`
padding: 96px 0px;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor} ;
${media.sm`
padding: 56px 0px;
`}
h2{
font-size: ${({ theme }) => theme.fonts.baseFontSizeH2};
font-weight: 700;
line-height: 52px;
text-align: center;
color: ${({ theme }) => theme.colors.primaryColor};
margin: 0;
margin-bottom: 24px;
${media.lg`
  font-size: ${({ theme }) => theme.fonts.baseFontSizeH3};
    font-weight: 700;
      `}
      ${media.sm`
         font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
        line-height: 32px;
      `}
      ${media.mobile`
            text-align:left;
            `}
}
p{
font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
font-weight: 400;
line-height: 32px;
text-align: center;
color: ${({ theme }) => theme.colors.bodyText};
margin: 0;
${media.lg`
  font-size: ${({ theme }) => theme.fonts.baseFontSize};
    line-height: 24px;

      `}
      ${media.mobile`
            text-align:left;
            `}
}
.cards-wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  margin-top: 72px;
  ${media.md`
    grid-template-columns: 1fr 1fr;
    `}
  ${media.sm`
    grid-template-columns: 1fr;
    `}
.card-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    grid-gap: 16px;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    border: 1px solid ${({ theme }) => theme.colors.dividerColor};
    padding: 32px;
    border-radius: 24px 24px 0px 24px;

    .title {
        display: flex;
        align-items: center;
        grid-gap: 16px;
        h3 {
        font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
        font-weight: 700;
        line-height: 24px;
        text-align: left;
        color: ${({ theme }) => theme.colors.bodyTextVariant};
        margin: 0;
}
    }
    p {
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: ${({ theme }) => theme.colors.textMedium};
    margin: 0;
}
}
}
`;
