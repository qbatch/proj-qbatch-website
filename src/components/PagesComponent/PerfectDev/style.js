import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

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
export { PerfectDevStyleWrapper };
