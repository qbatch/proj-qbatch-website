import styled from "styled-components";
import { media } from "../../../theme/media-mixins";
import Background from "../../../../static/background-banner-new.svg";

const ReasonToHireWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Background});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 96px;
  ${media.sm`
  padding: 40px 0px;
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
    text-transform:none;
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
export { ReasonToHireWrapper };
