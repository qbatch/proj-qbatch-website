import styled from "styled-components";
import { media } from "../../../theme/media-mixins";
import CongratulationsBg from "../../../../static/share-your-requirements.svg";

const ShareYourRequirementsWrapper = styled.div`
  padding: 96px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    ${media.sm`
      padding: 56px 0px;
  `}
  h2 {
    color: ${({ theme }) => theme.colors.primaryColor};
    max-width: 930px;
    text-align: center;
    margin: auto;
    margin-bottom: 24px;
    text-transform:none;
    ${media.sm`
      margin-bottom: 12px;
    `}
  }
  textarea {
    padding: 12px 0px;
    width: 100%;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    outline: none;
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    height: ${(props) => (props.height ? `${props.height}` : "60px")};
    letter-spacing: 0.19px;
    background-color:transparent;
    &::placeholder {
      color: ${({ theme }) => theme.colors.bodyLight};
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
    }
    ${media.sm`
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    &::placeholder{
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
    }
    `}
}
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textMedium};
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    text-align: center;
    max-width: 930px;
    margin: auto;
  }
  .heading-label-text {
    margin-bottom: 72px;
    ${media.xs`
    margin-bottom: 48px;
    `}
  }
  .stepper-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 72px;
    border-radius: 24px 24px 0px 24px;
    border: 1px solid ${({ theme }) => theme.colors.dividerColor};
    background-color:${({ theme }) => theme.colors.whiteColor};
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    margin: auto;
    align-items: baseline;
    grid-gap: 24px;
    ${media.sm`
    padding:24px;
    
    `}
    .stepper-content-wrapper {
      max-width: 453px;
      width: 100%;
      ${media.sm`
      max-width: 100%;
      `}
      h3{
        text-transform:none;
      }
      p.label-text-wrap{
        text-align: left;
        font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
        line-height: 16px;
      }
      .arrow-wrapper {
        display: flex;
        gap: 24px;
        justify-content: end;
        align-items: center;
        margin-top: 48px;
        img {
          cursor: pointer;
        }
      }
    }
    .bars-wrapper {
      display: flex;
      flex-direction: column;
      grid-row-gap: 24px;
      margin-top: 24px;
      h3 {
        font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
        font-weight: 700;
        line-height: 32px;
        text-align: left;
      }
      .bar-item {
        display: flex;
        align-items: center;
        grid-gap: 16px;
        padding: 28px 24px;
        width: 100%;
        border: 1px solid ${({ theme }) => theme.colors.dividerColor};
        border-radius: 8px;
        &:hover {
          border-color: ${({ theme }) => theme.colors.primaryColor};
          cursor: pointer;
          box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        &.active {
          border-color: ${({ theme }) => theme.colors.primaryColor};
          cursor: pointer;
          box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        p {
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
          font-weight: 400;
          line-height: 24px;
          text-align: left;
          margin: 0;
        }
        h3 {
          font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
        }
      }
    }
    .stepper-tracker {
      display: flex;
      flex-direction: column;
      grid-row-gap: 12px;
      max-width: 417px;
      ${media.sm`
      display: none;
      `}
      .stepper-tracker-item {
        display: flex;
        grid-gap: 32px;
        p {
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
          font-weight: 400;
          line-height: 24px;
          text-align: left;
        }
        .right-side-content-wrapper {
          display: flex;
          flex-direction: column;
          grid-row-gap: 12px;
          &.non-active {
            p {
              background-color: ${({ theme }) => theme.colors.dividerColor};
            }
          }
          &.active {
            span {
              background-color: ${({ theme }) => theme.colors.primaryColor};
            }
            p {
              background-color: ${({ theme }) => theme.colors.primaryColor};
            }
          }
          span {
            width: 16px;
            height: 16px;
            display: block;
            border-radius: 30px;
            position: relative;
            z-index: 1;
            background-color: ${({ theme }) => theme.colors.bodyLight};
          }
          p {
            height: 48px;
            width: 2px;
            background-color: ${({ theme }) => theme.colors.bodyLight};
          }
        }
      }
    }
  }
  .title-wrapper {
    display: flex;
    flex-direction: column;
    grid-row-gap: 8px;
    max-width: 365px;
    p {
      margin: 0px;
    }
    p.selected-text {
      margin: 0px;
      color: ${({ theme }) => theme.colors.bodyTextVariant};
    }
  }
  .congratulations-overlay-wrapper {
    background-image: url(${CongratulationsBg});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 317px 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    grid-row-gap: 32px;
    ${media.sm`
    padding: 120px;
    
    `}
    ${media.xs`
    padding: 168px 24px;
    
    `}
    h3 {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeH2};
      font-weight: 700;
      line-height: 52px;
      text-align: center;
      color: ${({ theme }) => theme.colors.whiteColor};
      margin: 0px;
    }
    p {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
      font-weight: 400;
      line-height: 32px;
      margin: 0px;
      color: ${({ theme }) => theme.colors.dividerColor};
      text-align: center;
    }
    span {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      text-align: center;
      color: ${({ theme }) => theme.colors.bodyLight};
    }
    .social-links-wrapper {
      display: flex;
      grid-gap: 60px;
      ${media.sm`
        grid-gap:24px;
        justify-content:center;
    `}
    }
  }
`;
export { ShareYourRequirementsWrapper }
