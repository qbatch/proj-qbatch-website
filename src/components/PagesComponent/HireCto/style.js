import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const HireCtoWrapper = styled.div`
  padding: 96px 0;
  ${media.sm`
     padding: 56px 0px;
  `}
  .heading{
    max-width: 100%;
    margin: auto;
    line-height: 52px;
    text-transform:none;
    ${media.sm`
    line-height: 32px;
    `}
  }
  &.product-design{
    .list-group-item{
      gap: 16px;
      span{
        font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
        letter-spacing: 0.7px;
        line-height: 32px;
        ${media.md`
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
          line-height: 24px;
        `}
      }
    }
    img{
      margin-right: 0 !important;
    }
    .heading{
      max-width: 800px;
    }
    .paragraph{
      margin-bottom: 72px;
      line-height: 32px;
      letter-spacing: 0;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      ${media.sm`
        margin-bottom:8px;
      
      `}
    }
    .list-group{
      max-width: 1170px;
      .list-group-item{
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
    margin: 48px auto 72px;
    ${media.sm`
      margin:24px auto 24px;
    `}
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
        color:${({ theme }) => theme.colors.midGray};
        font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
        font-weight:600;
        line-height:32px;
        ${media.sm`
          font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
          line-height:24px;
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
