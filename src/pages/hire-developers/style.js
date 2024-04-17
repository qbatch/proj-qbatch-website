import styled from "styled-components";
import { media } from "../../theme/media-mixins";
import Background from "../../../static/background-banner-new.svg";
import CongratulationsBg from "../../../static/share-your-requirements.svg";

const HireDeveloperStyleWrapper = styled.div`
  .hire-developer-banner {
    &:before {
      width: 100%;
      height: 100%;
      position: absolute;
      background: #0000002e;
      top: 0;
      left: 0;
      content: "";
    }
  }
`;
const RemoteDeveloperStyleWrapper = styled.div`
  padding-bottom: 96px;
  ${media.md`
  padding-bottom:72px ;
  
  `}
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  .content-wrapper {
    max-width: 930px;
    text-align: center;
    margin: auto;
    padding-top: 96px;
    padding-bottom: 72px;
    h2 {
      color: ${({ theme }) => theme.colors.primaryColor};
    }
  }
  .card-overlay-wrapper {
    display: grid;
    align-items: center;
    grid-gap: 24px;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    ${media.md`
    grid-template-columns: 1fr 1fr 1fr;
    `}
    ${media.sm`
    grid-template-columns: 1fr 1fr;
    `}
    ${media.xs`
    grid-template-columns: 1fr;
    justify-content:center;
    `}
  }
  .card-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-row-gap: 24px;
    ${media.xs`
        margin: auto;
    `}
    h2 {
      margin: 0;
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      text-align: center;
      font-style: normal;
      font-weight: 700;
      line-height: 32px;
      min-height:160px

    }
  }
`;
const HiringHassleWrapper = styled.div`
  padding: 96px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};

  h2 {
    color: ${({ theme }) => theme.colors.primaryColor};
    text-align: center;
    margin-bottom: 16px;
  }
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textMedium};
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    text-align: center;
    font-style: normal;
    font-weight: 300;
    line-height: 32px;
  }
  .hiring-hassle-overlay {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 24px;
    padding: 72px 0px 0px;
    ${media.customBrakePoint`
    grid-template-columns: 1fr 1fr 1fr 1fr;
    `}
    ${media.md`
    grid-template-columns: 1fr 1fr 1fr;
    `}
    ${media.sm`
    grid-template-columns: 1fr 1fr;
    `}
    ${media.xs`
    grid-template-columns: 1fr;
    `}
  .hiring-hassle-cards {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      border-radius: 24px 24px 0px 24px;
      border: 1px solid ${({ theme }) => theme.colors.dividerColor};
      background: ${({ theme }) => theme.colors.whiteColor};
      box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.16);
      padding: 32px;
      grid-row-gap: 14px;
      ${media.xs`
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      `}
      p {
        color: ${({ theme }) => theme.colors.primaryColor};
        font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
        font-style: normal;
        font-weight: 400;
        line-height: 32px;
        max-width: 115px;
        text-align: left;
        ${media.xs`
        max-width: 100%;
      `}
      }
      .hiring-hassle-card-tem {
        display: flex;
        align-items: center;
        grid-gap: 16px;
        p {
          display: flex;
          grid-gap: 8px;
          span {
            color: ${({ theme }) => theme.colors.gardientColor};
            text-align: center;
            font-size: ${({ theme }) => theme.fonts.baseFontSizeH2};
            font-style: normal;
            font-weight: 600;
            text-transform: capitalize;
            ${media.sm`
                line-height: 16px;
              `}
            &:nth-child(2) {
              color: ${({ theme }) => theme.colors.dangerColor};
              font-size: ${({ theme }) => theme.fonts.baseFontSizeH3};
              font-style: normal;
              font-weight: 300;
              ${media.sm`
                line-height: 16px;
              `}
            }
          }
        }
      }
    }
  }
`;
const PerfectDevStyleWrapper = styled.div`
  padding: 96px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  h2 {
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 24px;
  }
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textMedium};
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    font-style: normal;
    font-weight: 300;
    line-height: 32px;
  }
  .get-a-query-btn {
    margin: auto;
  }
  .image-wrapper {
    ${media.standard`
    display:none;   
            `}
  }
  .perfect-devs-overlay {
    padding: 0px 200px;
    padding-top: 72px !important;
    display: flex;
    flex-direction: column;
    ${media.standard`
    padding: 0px 150px;
    grid-row-gap: 72px;
    `}
    ${media.md`
      padding: 0px 24px;
    `}
    .perfect-devs-wrapper {
      display: flex;
      align-items: flex-start;
      grid-gap: 24px;
      position: relative;
      ${media.sm`
        flex-direction:column !important;
        `}
      ${media.sm`
      flex-direction: column;
      `}
    .responsive-image {
        display: none;
        ${media.standard`
      display:block `}
      }
      &:nth-child(1) {
        flex-direction: row;
        padding-top: 72px ${media.sm`
        flex-direction: column;
        `};
      }
      &:nth-child(3) {
        top: -120px;
        ${media.sm`
          flex-direction: column;
          `}
        ${media.standard`
          top:0px;
        `}
      }
      &:nth-child(2) {
        flex-direction: row-reverse;
        position: relative;
        left: 200px;
        top: -56px;
        ${media.standard`
          left: 0;
          top:0;
          flex-direction: row;
        `}
        ${media.sm`
          flex-direction: column;
        `}
      }
      &:nth-child(4) {
        flex-direction: row-reverse;
        position: relative;
        left: 200px;
        top: -170px;
        ${media.standard`
          left: 0;
          top:0;
          flex-direction: row;
        `}
        ${media.sm`
          flex-direction: column;
        `}
      }
      .perfect-devs-item {
        display: flex;
        grid-row-gap: 16px;
        flex-direction: column;
        max-width: 573px;
        margin: 0px 0px 0px auto;
        ${media.lg`
          max-width: 100%;
          margin:0px;
        `}
        h3 {
          color: ${({ theme }) => theme.colors.bodyTextVariant};
          font-size: ${({ theme }) => theme.fonts.baseFontSizeH3};
          font-style: normal;
          font-weight: 600;
          line-height: 40px;
          letter-spacing: 0.64px;
          text-transform: capitalize;
          margin-bottom: 0px;
        }
        p {
          color: ${({ theme }) => theme.colors.textMedium};
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
        }
      }
    }
  }
`;
const SoftwareDevelopersWrapper = styled.div`
  padding: 96px 0px;
  h2 {
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 16px;
    text-align: center;
  }
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textMedium};
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    font-style: normal;
    text-align: center;
    font-weight: 300;
    line-height: 32px;
  }
  .scroll-icon-wrapper {
    display: none;
    ${media.xl`
        display: block;
        position: absolute;
        top: 24px;
        right: 20px;
        font-size: 28px;
        animation:SlideAnimation infinite alternate 1.5s ease;
        color: ${({ theme }) => theme.colors.primaryColor};
        `}
  }
  .table-base-overlay-wrapper {
    max-width: 1400px;
    overflow: auto;
    .table-base-overlay {
      display: grid;
      grid-template-columns: 390px 300px 239px 239px;
      padding: 72px 0px 96px;
      position: relative;
      justify-content: center;
      ${media.xl`
      justify-content: flex-start;
      `}
      .column-ui-wrapper {
        p {
          padding: 20px 32px;
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
          font-weight: 400;
          line-height: 24px;
          text-align: left;
          border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
          color: ${({ theme }) => theme.colors.bodyTextVariant};
          &:nth-child(1) {
            background: #fff;
            font-weight: 400;
            padding: 8px 32px;
            color: ${({ theme }) => theme.colors.primaryColor};
          }
          &:nth-child(2) {
            background-color: #ffdd3326;
            font-weight: 600;
            color: ${({ theme }) => theme.colors.primaryColor};
          }
          &:nth-child(3) {
            background-color: #ffdd3326;
            font-weight: 600;
            color: ${({ theme }) => theme.colors.primaryColor};
          }
          &:nth-child(4) {
            background-color: #ffdd3326;
            font-weight: 600;
            color: ${({ theme }) => theme.colors.primaryColor};
          }
          &:nth-child(5) {
            background-color: #ffdd3326;
            font-weight: 600;
            color: ${({ theme }) => theme.colors.primaryColor};
          }
          }
        }
      }
      & .second-column {
        border-radius: 12px 12px 0px 12px;
        border: 2px solid ${({ theme }) => theme.colors.primaryColor};
        margin-top: -36px;
        box-shadow: -2px 19px 15px 0px rgba(0,0,0,0.1);
        img {
          padding: 22px 48px;
        }
        p {
          font-weight: 700;
          &:nth-child(2) {
            border-top: 1px solid ${({ theme }) => theme.colors.primaryColor};
          }
          &:nth-child(16) {
            padding-bottom: 49px;
          }
          &:nth-child(16) {
            border-bottom:1px solid transparent;
          }
        }
      }
    }
    .fourth-column {
      p {
        &:nth-child(1) {
          color: ${({ theme }) => theme.colors.bodyTextVariant} !important;
        }
        &:nth-child(2) {
          background-color: #ffdd3326;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.bodyTextVariant} !important;
        }
        &:nth-child(3) {
          background-color: #ffdd3326;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.bodyTextVariant} !important;
        }
        &:nth-child(4) {
          background-color: #ffdd3326;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.bodyTextVariant} !important;
        }
        &:nth-child(5) {
          background-color: #ffdd3326;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.bodyTextVariant} !important;
        }
      }
    }
    .third-column {
      p {
        &:nth-child(1) {
          color: ${({ theme }) => theme.colors.bodyTextVariant} !important;
        }
        &:nth-child(2) {
          background-color: #ffdd3326;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.bodyTextVariant} !important;
        }
        &:nth-child(3) {
          background-color: #ffdd3326;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.bodyTextVariant} !important;
        }
        &:nth-child(4) {
          background-color: #ffdd3326;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.bodyTextVariant} !important;
        }
        &:nth-child(5) {
          background-color: #ffdd3326;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.bodyTextVariant} !important;
        }
      }
    }
  @keyframes SlideAnimation {
    0% {
      transform: translateX(-30px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;
const ReasonToHireWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Background});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 96px;
  ${media.sm`
  padding: 96px 0px;
    `}
  h2 {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeH2};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.whiteColor};
    line-height: 52px;
    text-align: center;
    max-width: 930px;
    margin: auto;
    margin-bottom: 48px;
  }
  .cards-wrapper {
    display: flex;
    align-items: baseline;
    justify-content: center;
    grid-row-gap: 24px;
    ${media.xl`
    flex-wrap: wrap;
    `}
    .card-items {
      max-width: 201px;
      text-align: center;
      ${media.xs`
          max-width:100%;
          `}
      p {
        font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
        font-weight: 300;
        color: ${({ theme }) => theme.colors.dividerColor};
        line-height: 32px;
        letter-spacing: 0.02em;
        text-align: center;
        margin-bottom: 0px;
        margin-top: 16px;
        border-left: 1px solid ${({ theme }) => theme.colors.bodyLight};
        padding: 0px 20px;
        &.text-wrapper {
          border-left: 0px !important;
          ${media.xl`
          border-left: 1px solid ${({ theme }) =>
      theme.colors.bodyLight} !important;
          `}
        }
      }
    }
  }
  .hire-developers-btn {
    color: ${({ theme }) => theme.colors.whiteColor};
    margin: 72px auto 0px;
  }
`;
const FourStepsProcessWrapper = styled.div`
  padding: 96px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  h2 {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeH2};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primaryColor};
    line-height: 52px;
    text-align: center;
    margin-bottom: 72px;
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
      h3 {
        width: 96px;
        height: 96px;
        font-size: ${({ theme }) => theme.fonts.baseFontSizeH2};
        font-weight: 500;
        line-height: 52px;
        text-align: center;
        color: ${({ theme }) => theme.colors.bodyTextVariant};
        border: 1px solid ${({ theme }) => theme.colors.primaryColor};
        border-radius: 54px;
        margin-bottom: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      h4 {
        font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
        font-weight: 700;
        color: ${({ theme }) => theme.colors.bodyTextVariant};
        line-height: 29.04px;
        text-align: center;
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
const AffordableHiringWrapper = styled.div`
  padding: 120px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  h2 {
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.primaryColor};
    text-align: left;
  }
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textMedium};
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    font-style: normal;
    text-align: left;
    font-weight: 300;
    line-height: 32px;
  }
  .cards-overlay-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px;
    padding-top: 72px;
    ${media.md`
    grid-template-columns: 1fr 1fr;
    `}
    ${media.sm`
    grid-template-columns: 1fr;
    `}
  .card-items {
      display: flex;
      flex-direction: column;
      padding: 32px;
      grid-row-gap: 24px;
      border-radius: 24px 24px 0px 24px;
      border: 1px solid ${({ theme }) => theme.colors.dividerColor};
      h3 {
        font-size: ${({ theme }) => theme.fonts.baseFontSizeH3};
        font-weight: 600;
        color: ${({ theme }) => theme.colors.bodyTextVariant};
        line-height: 40px;
        letter-spacing: 0.02em;
        text-align: left;
        max-width: 204px;
      }
      .item-content {
        p {
          font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
          font-weight: 700;
          line-height: 32px;
          text-align: left;
          color: ${({ theme }) => theme.colors.primaryColor};
          margin-bottom: 8px;
        }
        ul {
          padding: 0px;
          li {
            position: relative;
            padding-left: 16px;
            color: ${({ theme }) => theme.colors.textMedium};
            line-height:24px;
            &::after {
              content: "";
              width: 6px;
              height: 6px;
              position: absolute;
              left: 0;
              top: 10px;
              border-radius: 4px;
              background: ${({ theme }) => theme.colors.textMedium};
            }
          }
        }
      }
    }
  }
  .explore-more-btn {
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    font-weight: 600;
    margin-left: auto;
  }
`;

const HireTrustedDevelopersWrapper = styled.div`
  padding: 96px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  h2 {
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.primaryColor};
    text-align: left;
    max-width: 334px;
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
      padding: 48px;
      ${media.md`
    padding: 24px;
    
    `}
    }

    .card-ui-wrapper h3 {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
      font-weight: 700;
      line-height: 32px;
      text-align: left;
      margin: 0px;
      color: ${({ theme }) => theme.colors.primaryColor};
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
      padding: 48px;
      ${media.md`
    padding: 24px;
    
    `}
    }

    .card-ui-wrapper h3 {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
      font-weight: 700;
      line-height: 32px;
      text-align: left;
      margin: 0px;
      color: ${({ theme }) => theme.colors.primaryColor};
    }
    .data-list-wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fill, 164px);
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
const ShareYourRequirementsWrapper = styled.div`
  padding: 96px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  h2 {
    color: ${({ theme }) => theme.colors.primaryColor};
    max-width: 930px;
    text-align: center;
    margin: auto;
    margin-bottom: 24px;
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
    font-weight: 300;
    line-height: 32px;
    text-align: center;
    max-width: 930px;
    margin: auto;
  }
  .heading-label-text {
    margin-bottom: 72px;
  }
  .stepper-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 72px;
    border-radius: 24px 24px 0px 24px;
    border: 1px solid ${({ theme }) => theme.colors.dividerColor};
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
      p.label-text-wrap{
        text-align: left;
        font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
        line-height: 16px;
      }
      .arrow-wrapper {
        display: flex;
        justify-content: end;
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
export {
  HireDeveloperStyleWrapper,
  RemoteDeveloperStyleWrapper,
  HiringHassleWrapper,
  PerfectDevStyleWrapper,
  SoftwareDevelopersWrapper,
  ReasonToHireWrapper,
  FourStepsProcessWrapper,
  AffordableHiringWrapper,
  HireTrustedDevelopersWrapper,
  ShareYourRequirementsWrapper,
};
