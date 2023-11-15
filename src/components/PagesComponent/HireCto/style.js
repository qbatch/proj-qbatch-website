import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const HireCtoWrapper = styled.div`
  padding: 97px 0;
  ${media.sm`
     padding: 40px 0px;
  `}
  .heading{
    max-width: 720px;
    margin: auto;
    line-height: 52px;
  }
  &.product-design{
    .list-group-item{
      gap: 16px;
      span{
        letter-spacing: 0.7px;
        line-height: 30.6px;
      }
    }
    img{
      margin-right: 0 !important;
    }
    .heading{
      max-width: 820px;
      ${media.sm`
        line-height: 32px;
      `}
    }
    .paragraph{
      margin-bottom: 74px;
      line-height: 32px;
      letter-spacing: 0;
    }
    button{
      margin-bottom: 24px;
    }
    .list-group{
      max-width: 1170px;
      .list-group-item{
        padding: 24px 0;
        .service-icon{
          height: 24px;
          width: 24px;
          object-fit: contain;
        }
      }
    }
  }
  .list-group {
    text-align: left;
    max-width: 930px;
    margin: 50px auto 72px auto;
    .list-group-item {
      border: 0px;
      background-color: transparent;
      border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
      padding: 24px 0 22px 0;
      display: flex;
      align-items: center;
      letter-spacing: 0.48px;
      .service-icon{
        height: 40px;
        width: 40px;
        object-fit: contain
      }
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
