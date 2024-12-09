import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

export const FinTechBeyondTheBasicsWrapper = styled.div`
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
    display:none;
    `}
  .card-item{
    display: flex;
    flex-direction: column;
    grid-row-gap: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    h3{
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    color: ${({ theme }) => theme.colors.bodyTextVariant};
    margin: 0;
    margin-top: 16px;
    }
    p{
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    margin: 0;
    }
  }
}
.mobile-cards{
  display: none;
  ${media.sm`
  display: block;
    `}
  margin-top: 32px;
  .card-item{
    display: flex;
    flex-direction: column;
    grid-row-gap: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    h3{
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    color: ${({ theme }) => theme.colors.bodyTextVariant};
    margin: 0;
    margin-top: 24px;
    margin-bottom: 12px;
    }
    p{
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    margin: 0;
    }
  }
}
.slick-dots {
  bottom: -44px;
    li {
      margin: 0px;
      &.slick-active {
        margin-right: 24px;
        button {
          &::before {
            background-color: ${({ theme }) => theme.colors.primaryColor};
            width: 32px;
            height: 8px;
            border-radius: 50px;
            opacity: 1;
            color:transparent;
          }
        }
      }
      button {
        &::before {
          background-color: ${({ theme }) => theme.colors.dividerColor};
          height: 8px;
          width: 8px;
          border-radius: 50px;
          opacity: 1;
          color: transparent;
        }
      }
    }
  }
`;
