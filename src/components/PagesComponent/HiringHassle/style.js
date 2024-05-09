import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const HiringHassleWrapper = styled.div`
  padding: 96px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
${media.sm`
padding: 56px 0px;
`}
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
    font-weight: 400;
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
    padding-top:48px;
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
        font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
        font-style: normal;
        font-weight: 600;
        line-height: 32px;
        text-align: left;
      }
      .hiring-hassle-card-tem {
        display: flex;
        align-items: center;
        grid-gap: 16px;
        p {
          display: flex;
          grid-gap: 4px;
          span {
            color: ${({ theme }) => theme.colors.gardientColor};
            text-align: center;
            font-size: ${({ theme }) => theme.fonts.baseFontSizeHeading};
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
              font-weight: 500;
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
export { HiringHassleWrapper };
