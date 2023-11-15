import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const DedicatedMobileWrapper = styled.div`
  background: url("/quotation-bg.svg");
  background-size: cover;
  padding: 120px 0;
  text-align: center;
  ${media.sm`
    padding: 60px 0;
  `}
  .dedicated-heading {
    h2 {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 16px;
    }
    h3 {
      color: ${({ theme }) => theme.colors.dividerColor};
      line-height: 52px;
      margin-bottom: 32px;
      ${media.sm`
       font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      `}
    }
  }
  .dedicated-list {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 52px;
    ${media.md`
      margin-top: 0;
    `}
    ${media.md`
      flex-direction: column;
  `}
  }
  .list-heading {
    position: relative;
    color: ${({ theme }) => theme.colors.dividerColor};
    font-weight: 300;
    margin: 0 35px;
    ${media.md`
        margin: 0 16px 22px;
  `}

    &::after {
      content: "";
      position: absolute;
      height: 6px;
      width: 6px;
      bottom: 0;
      right: -40px;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colors.dangerColor};
      top: 11px;
      ${media.md`
          right: -15px;
  `}
      ${media.md`
        display:none ;
         `}
    }
    &:last-child {
      &::after {
        display: none;
      }
    }
  }
  &.you-know-section {
    .dedicated-heading {
      h3 {
        max-width: 760px;
        margin: 0 auto;
        margin-bottom: 72px;
      }
    }
  }
`;

export default DedicatedMobileWrapper;
