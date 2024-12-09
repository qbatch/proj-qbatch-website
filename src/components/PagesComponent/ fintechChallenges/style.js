import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

export const FinTechChallengesWrapper = styled.div`
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
  font-size: ${({ theme }) => theme.fonts.baseFontSizeH2};
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
.cards-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:  40px 24px;
    margin-top: 72px;
    ${media.sm`
      grid-template-columns: 1fr;
      margin-top: 36px;
      grid-gap: 24px;
      `}
.card-item {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    max-width: 692px;
.title-wrapper {
    display: flex;
    flex-direction: column;
    grid-row-gap: 16px;
h3 {
    font-size:${({ theme }) => theme.fonts.baseFontSizeLg};
    font-weight: 600;
    line-height: 32px;
    text-align: left;
    text-decoration-skip-ink: none;
    margin:0;
    color: ${({ theme }) => theme.colors.bodyTextVariant};
    ${media.sm`
      font-size:${({ theme }) => theme.fonts.baseFontSizeSm};
      `}
 
  }
  p{
    font-size:${({ theme }) => theme.fonts.baseFontSize};
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    text-decoration-skip-ink: none;
    margin:0;
    color: ${({ theme }) => theme.colors.textMedium};
    ${media.sm`
      font-size:${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
      `}
}
}
}
}
`;
