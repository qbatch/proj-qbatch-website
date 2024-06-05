import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const HireTrustedDevelopersWrapper = styled.div`
  padding: 96px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    ${media.sm`
  padding: 56px 0px;
  `}
  h2 {
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.primaryColor};
    text-align: left;
    max-width: 334px;
    text-transform:none;
    font-size: ${({ theme }) => theme.fonts.baseFontSizeH2};
    ${media.xs`
    margin-bottom:0px !important;
    `}
    span{
      color: ${({ theme }) => theme.colors.dangerColor};
    }
    text-transform:none;
    font-size: ${({ theme }) => theme.fonts.baseFontSizeH2};
    ${media.sm`
    font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
    line-height:32px;
    `}
    span{
      color: ${({ theme }) => theme.colors.dangerColor};
    }
    ${media.sm`
    max-width: 100%;
    `}
  }
  .trusted-developer-wrapper {
    display: grid;
    grid-template-columns: 477px 1fr;
    ${media.md`
    grid-template-columns: 350px 1fr;
    `}
    ${media.sm`
    grid-template-columns: 1fr;
    `}
    .card-ui-wrapper {
      border-radius: 24px 24px 0px 24px;
      border: 1px solid ${({ theme }) => theme.colors.dividerColor};
      background-color: ${({ theme }) => theme.colors.whiteColor};
      padding: 40px;
      ${media.md`
    padding: 24px;
    
    `}
      ${media.sm`
    margin-top: 48px;
    `}
    h3 {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
      font-weight: 700;
      line-height: 32px;
      text-align: left;
      margin: 0px;
      color: ${({ theme }) => theme.colors.primaryColor};
      text-transform:none;
    }
    }
    .data-list-wrapper {
      display: flex;
      justify-content: space-between;
      ${media.lg`
        display: grid;
        grid-template-columns: 1fr 1fr;
        `}
      ul {
        padding-top: 40px;
        display: flex;
        flex-direction: column;
        grid-row-gap: 9px;

        li {
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
          font-weight: 400;
          line-height: 24px;
          text-align: left;
          color: ${({ theme }) => theme.colors.textMedium};
          position: relative;
          padding-left: 16px;
          &::after {
            content: "";
            left: 0;
            top: 10px;
            position: absolute;
            width: 6px;
            height: 6px;
            background: ${({ theme }) => theme.colors.textMedium};
            border-radius: 6px;
          }
        }
      }
    }
  }
  .data-list-overlay-wrapper {
    display: grid;
    grid-template-columns: 1fr 453px;
    grid-gap: 24px;
    margin-top: 24px;
    ${media.md`
    grid-template-columns: 1fr 1fr;
    `}
    ${media.sm`
  grid-template-columns: 1fr;
    `}
  .card-ui-wrapper {
      border-radius: 24px 24px 0px 24px;
      border: 1px solid ${({ theme }) => theme.colors.dividerColor};
      background-color: ${({ theme }) => theme.colors.whiteColor};
      padding: 48px;
      ${media.md`
        padding: 24px;
    `}
    h3 {
       font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
       font-weight: 700;
       line-height: 32px;
       text-align: left;
       margin: 0px;
       color: ${({ theme }) => theme.colors.primaryColor};
       text-transform:none;
     }
    }
    .data-list-wrapper {
      display: grid;
      grid-template-columns: auto auto auto auto;
      grid-gap:16px;
      ${media.lg`
      display: grid !important;
      grid-template-columns: 1fr 1fr 1fr;
      `}
      ${media.md`
      display: grid !important;
      grid-template-columns: 1fr 1fr;
      `} 
      ul {
        padding-top: 40px;
        display: flex;
        flex-direction: column;
        grid-row-gap: 9px;
        ${media.customBrakePoint`
          flex-wrap:wrap;
        `}
        li {
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
          font-weight: 400;
          line-height: 24px;
          text-align: left;
          color: ${({ theme }) => theme.colors.textMedium};
          position: relative;
          padding-left: 16px;
          &::after {
            content: "";
            left: 0;
            top: 10px;
            position: absolute;
            width: 6px;
            height: 6px;
            background: ${({ theme }) => theme.colors.textMedium};
            border-radius: 6px;
          }
        }
      }
    }
  }
`;
export { HireTrustedDevelopersWrapper }
