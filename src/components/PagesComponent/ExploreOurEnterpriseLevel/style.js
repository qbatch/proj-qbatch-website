import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ExploreOurEnterpriseLevelWrapper = styled.div`
padding: 96px 0px;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor} ;
${media.xs`
padding: 56px 0px;
`}
.title-wrapper {
    max-width: 818px;
    h1 {
    line-height: 52px;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: ${({ theme }) => theme.fonts.baseFontSizeH2};
    font-weight: 700;
    text-transform: none;
    span{
      color: ${({ theme }) => theme.colors.dangerColor};

    }
    ${media.xs`
    font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
    line-height:32px;
    `}
}
}
.card-overlay-wrapper {
    padding: 72px 0px;
    display: grid;
    grid-gap: 16px;
    grid-row-gap: 32px;
    grid-template-columns: 1fr 1fr 1fr;
    ${media.md`
    grid-template-columns: 1fr 1fr;
    padding:32px 0px ;
    `}
    ${media.sm`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    `}
.card-item-wrapper {
    max-width: 453px;
    min-height: 336px;
    padding: 24px;
    border-radius: 24px 24px 0px 24px;
    border: 1px solid ${({ theme }) => theme.colors.dividerColor};
    background-color:${({ theme }) => theme.colors.whiteColor};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    grid-row-gap: 10px;
    h2{
    font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
    color:${({ theme }) => theme.colors.bodyTextVariant};
    line-height: 32px;
    font-weight: 700;
    margin: 0px;
    text-transform:none;
    }
    p{
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    color:${({ theme }) => theme.colors.textMedium};
    line-height: 24px;
    font-weight: 400;
    margin: 0px; 
    }
}
}
button{
  margin:auto;
}

`;
export { ExploreOurEnterpriseLevelWrapper };
