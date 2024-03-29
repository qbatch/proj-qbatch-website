import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const SeemToWorkWrapper = styled.div`
  padding: 120px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  .heading {
    padding-bottom: 72px;
  }
  .row:has(.work-col) {
    max-width: 1050px;
    margin: auto;
  }
  .work-col {
    text-align: center;
    border-right: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    padding: 24px;
    &:nth-child(3),
    &:nth-child(6) {
      border-right: 0;
    }
    &:nth-last-child(-n + 3) {
      border-bottom: none;
    }
    p {
      max-width: 200px;
      margin: auto;
      line-height: 32px;
    }
    .inner-counter {
      display: flex;
      align-items: center;
      margin: auto;
      justify-content: center;
      .of {
        font-size: ${({ theme }) => theme.fonts.baseFontSizeH3};
        color: ${({ theme }) => theme.colors.dangerColor};
        padding: 8px;
      }
    }
    ${media.sm`
    padding: 12px;
    p{
      line-height: 24px;
    }
    .inner-counter{
      .of{
        font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      }
    }
  `}
    @media(max-width: 575px) {
      padding: 24px 12px;
      border-right: 0;
      &:nth-last-child(-n+3) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
      }
      &:last-child {
        border-bottom: 0;
      }
    }
  }
`

export default SeemToWorkWrapper;
