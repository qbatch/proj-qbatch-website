import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const HireCtoWrapper = styled.div`
  padding: 98px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
     padding: 40px 0px;
  `}
  .list-group {
    text-align: left;
    max-width: 930px;
    margin: 50px auto 71px auto;
    .list-group-item {
      border: 0px;
      background-color: transparent;
      border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
      padding: 24px 0 22px 0;
      display: flex;
      align-items: center;
      letter-spacing: 0.48px;

      span {
        color: ${({ theme }) => theme.colors.textMedium};
        margin-top: 1px;
        font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
        ${media.md`
            font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
        `}
        ${media.sm`
            font-size: ${({ theme }) => theme.fonts.baseFontSize};
        `}
      }
      &:last-child {
        border-radius: 0px;
      }
      .grey-box {
        background-color: #d9d9d9;
        width: 24px;
        height: 24px;
        display: inline-block;
        margin-right: 16px;
        margin-top: -1px;
      }
    }
  }
`;
export default HireCtoWrapper;
