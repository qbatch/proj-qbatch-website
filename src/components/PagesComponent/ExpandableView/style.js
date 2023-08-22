import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ExpandableView = styled.section`
  padding: 97px 0;
  h1 {
    margin-bottom: 128px;
  }
  .wrap {
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    gap: 10px;
    .item {
      border: 1px solid ${({ theme }) => theme.colors.dividerColor};
      background-color: ${({ theme }) => theme.colors.whiteColor};
      border-top-left-radius: 24px;
      border-top-right-radius: 24px;
      border-bottom-left-radius: 24px;
      padding: 47px;
      min-width:453px;
      transition: width 1s;
      position: relative;
      height: 524px;
      z-index: 1;
      cursor: pointer;
      .image-logo {
        opacity: 0;
        width: 0;
      }
      &.item-primary {
        background-color: ${({ theme }) => theme.colors.secondaryColor};
        .stories-box {
          h3,
          .paragraph {
            color: ${({ theme }) => theme.colors.whiteColor};
          }
          .badge {
            span {
              border: 1px solid ${({ theme }) => theme.colors.whiteColor};
              color: ${({ theme }) => theme.colors.whiteColor};
            }
          }
        }
      }
      .stories-box {
        display: flex;
        align-items: center;
        gap: 16px;
        .logo {
          margin-bottom: 26px;
        }
        h3 {
          margin-bottom: 18px;
        }
        .paragraph {
          color: ${({ theme }) => theme.colors.textMedium};
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
          max-width: 356px;
          line-height: 24px;
          margin-bottom: 29px;
        }
        .badge {
          display: flex;
          gap: 8px;
          padding: 0;

          span {
            color: #7f8f97;
            font-weight: 400;
            border: 1px solid #7f8f97;
            padding: 4px 7px;
            border-radius: 2px;
          }
        }
        button {
          position: absolute;
          bottom: 46px;
        }
      }
      &:hover {
        .image-logo {
          opacity: 1;
          width: 100%;
        }
        min-width: 53px;
      }
    }
  }
`;
export default ExpandableView;