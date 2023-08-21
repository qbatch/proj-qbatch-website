import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ExpandableView = styled.section`
  .wrap {
    display: flex;
    gap: 24px;
    .item {
      border: 1px solid ${({ theme }) => theme.colors.dividerColor};
      background-color: ${({ theme }) => theme.colors.whiteColor};
      border-top-left-radius: 24px;
      border-top-right-radius: 24px;
      border-bottom-left-radius: 24px;
      padding: 10px;
      position: relative;
      height: 450px;
      transition: all 0.3s;
      flex-grow: 1;
      z-index: 1;
      transition: all 0.3s;

      &:hover {
        flex-grow: 2;
      }
    }
  }
  .stories-box {
    .paragraph {
      color: ${({ theme }) => theme.colors.textMedium};
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
    }
    .badge {
      display: flex;
      gap:8px;
      span {
        color: #7f8f97;
        font-weight: 400;
        border: 1px solid #7f8f97;
        padding:8px;
        border-radius:2px;
      }
    }
  }
`;
export default ExpandableView;