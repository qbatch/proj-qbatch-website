import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const StartYourHealthTechWrapper = styled.div`
padding: 96px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 40px 0;
    `}
    h2{
      font-size: 40px;
      font-weight: 700;
      line-height: 52px;
      margin-bottom: 72px;
      text-align: center;
      color: ${({ theme }) => theme.colors.primaryColor};
      ${media.lg`
        font-size: 32px;
        font-weight: 700;
          `}
          ${media.sm`
            font-size: 24px;
            line-height: 32px;
            margin-bottom: 32px;
          `}
          ${media.mobile`
            text-align:left;
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
      max-width: 100%;
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
        margin-bottom: 24px;
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
        margin-bottom: 24px;
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
        ${media.mobile`
          font-size: 14px;
          line-height: 18px;
          `}
      }
    }
  }
button{
  margin: auto;
  margin-top: 72px;
  ${media.mobile`
  margin-top: 24px;
    `}
}
`;

export { StartYourHealthTechWrapper }
