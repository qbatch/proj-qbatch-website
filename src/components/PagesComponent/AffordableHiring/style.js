import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

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
export { AffordableHiringWrapper }
