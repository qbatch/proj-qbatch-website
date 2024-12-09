import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

export const IroncladSecurityMeasuresWrapper = styled.div`
padding: 96px 0;
background-color: ${({theme}) => theme.colors.secondaryColor};
${media.sm`
padding: 40px 0;
`}
.card-overlay{
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 110px;
  img{
    ${media.mobile`
    max-width:322px;
      `}
  }
  ${media.standard`
    grid-gap: 32px;
    `}
    ${media.md`
    flex-direction:column;
    grid-row-gap:40px;
    justify-content:center;
    align-items:center;
      `}
  h2{
    color: ${({theme}) => theme.colors.whiteColor};
    font-size:  ${({theme}) => theme.fonts.baseFontSizeH2};
    margin: 0;
    font-weight: 700;
    line-height: 52px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    overflow-wrap: anywhere;
    ${media.md`
    text-align:center;
      `}
      ${media.sm`
        font-size:  ${({theme}) => theme.fonts.baseFontSizeLg};
        line-height: 32px;
        `}
  }
  p{
    font-size: ${({theme}) => theme.fonts.baseFontSizeSm};
    font-weight: 400;
    line-height: 32px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: ${({theme}) => theme.colors.dividerColor};
    margin: 0;
    overflow-wrap: anywhere;
    a{
  color: ${({theme}) => theme.colors.dividerColor};
  text-decoration-line: underline;
  text-decoration-style: solid;
}
${media.md`
    text-align:center;
      `}
      ${media.sm`
    font-size: ${({theme}) => theme.fonts.baseFontSize};
    line-height: 24px;
        `}
  }
  button{
    color: ${({theme}) => theme.colors.whiteColor};
    ${media.md`
    margin: auto;
      `}
&:hover{
  color: ${({theme}) => theme.colors.whiteColor};
}
  }
}
.title{
  display: flex;
  flex-direction: column;
  grid-row-gap: 32px;
}
`
