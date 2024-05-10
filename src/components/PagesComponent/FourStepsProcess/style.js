import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const FourStepsProcessWrapper = styled.div`
  padding: 96px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
  padding: 56px 0px;
  `}
  h2 {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeH2};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primaryColor};
    line-height: 52px;
    text-align: center;
    margin-bottom: 72px;
    text-transform:none;
    ${media.sm`
    margin-bottom:48px;
    font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
    line-height:32px;
    `}
  }
  .process-card-overlay {
    display: grid;
    grid-gap: 16px;
    align-items: baseline;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    ${media.md`
    grid-template-columns: 1fr 1fr 1fr;
    `}
    ${media.sm`
    grid-template-columns: 1fr 1fr;
    `}
    ${media.xs`
    grid-template-columns: 1fr;
    `}
    .process-card-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 302px;
      text-align: center;
      position:relative;
     
      ${media.xs`
        margin: auto;
    `}
    img{
      position: absolute;
      right: -95px;
      width: 175px;
      height: 10px;
      top: 40px;
      ${media.xl`
      right: -75px;
      width: 130px;
      `}
      ${media.lg`
        display: none;
      `}
    }
      .num-icon {
        width: 96px;
        height: 96px;
        font-size: ${({ theme }) => theme.fonts.baseFontSizeH2};
        font-weight: 500;
        line-height: 52px;
        text-align: center;
        color: ${({ theme }) => theme.colors.bodyTextVariant};
        border: 1px solid ${({ theme }) => theme.colors.primaryColor};
        border-radius: 54px;
        background-color:${({ theme }) => theme.colors.whiteColor};
        margin-bottom: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      h3 {
        font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
        font-weight: 700;
        color: ${({ theme }) => theme.colors.bodyTextVariant};
        line-height: 29.04px;
        text-align: center;
        text-transform:none;
        ${media.sm`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
        line-height:16px;
        `}
      }
      p {
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        font-weight: 400;
        color: ${({ theme }) => theme.colors.textMedium};
        line-height: 24px;
        text-align: center;
      }
    }
  }
`;
export { FourStepsProcessWrapper }
