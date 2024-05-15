import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const PerfectDevStyleWrapper = styled.div`
  padding: 96px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
  padding: 56px 0px;
  `}
  h2 {
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 24px;
    ${media.md`
    margin-bottom: 12px;
    `}
  }
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textMedium};
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }
  .get-a-query-btn {
    margin: auto;
  }
  .perfect-devs-overlay-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    ${media.customElementsBreakPoint`
    img{
      display: none;
    }
    `}
  .perfect-devs-overlay {
    padding: 0px 200px;
    padding-top: 72px;
    display: flex;
    flex-direction: column;
    grid-row-gap: 72px;
    ${media.standard`
    padding-left: 150px;
    padding-right: 150px;
    `}
    ${media.md`
      padding: 0px 24px;
      grid-row-gap: 24px;
      padding-top:24px ;
    `}
    ${media.sm`
      padding-top:48px ;
    `}
    .perfect-devs-wrapper {
      display: flex;
      align-items: flex-start;
      grid-gap: 24px;
      position: relative;
      &:nth-child(1){
        img{
          position: absolute;
          top: 90px;
          left: -100px;
      }
        }
      &:nth-child(2){
        flex-direction: row-reverse;
        margin-right: auto;
        margin-left: 110px;
        img{
          position: absolute;
          right: -110px;
          top: 90px;
      }
      ${media.sm`
      margin-left:0px;
          `}
        }
        &:nth-child(3){
          margin-right:auto;
          img{
            position: absolute;
            left: -110px;
            top: 90px;
          }
        }
        &:nth-child(4){
          margin-left: 110px;
          margin-right: auto;
          ${media.sm`
            margin-left:0px;
          `}
      }
      &:nth-child(2) {
        flex-direction: row-reverse;
        position: relative;
      }
      &:nth-child(4) {
        flex-direction: row-reverse;
      }
      .perfect-devs-item {
        display: flex;
        grid-row-gap: 16px;
        flex-direction: column;
        max-width: 573px;
        ${media.lg`
          margin:0px;
        `}
        ${media.md`
         max-width:100%;
        `}
        ${media.sm`
        grid-row-gap: 8px;
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
          ${media.sm`
          font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
          line-height:24px;
          `}
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
}
`;
export { PerfectDevStyleWrapper };
