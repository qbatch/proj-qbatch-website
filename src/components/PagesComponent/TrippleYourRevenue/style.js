import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const RevenueWrapper = styled.div`
  padding: 120px 0 96px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 56px 0;
  `}
  .revenue-heading {
    max-width: 360px;
    h2 {
      line-height: 52px;
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 24px;
      ${media.sm`
        line-height: 32px;
      `}
      ${media.sm`
        line-height: 32px;
        margin-bottom: 12px;
      `}
    }
    ${media.sm`
      max-width: 100%;
      margin-bottom: 60px;
      text-align: center;
    `}
  }
  .revenue-box {
    border: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-radius: 24px 24px 0px 24px;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    padding: 48px;
    height: 100%;
    ${media.sm`
      min-height: auto;
      padding-bottom: 48px;
    `}
    .revenue-data {
      h3 {
        margin-bottom: 16px;
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
        letter-spacing: 0.6px
      }
      p {
        letter-spacing: 0;
        margin-bottom: 0;
        ${media.sm`
         line-height:20px;
        `}
      }
      ${media.sm`
        text-align: center;
        padding-left: 0;
      `}
      .revenue-img {
        ${media.sm`
          display: flex;
          justify-content: center;
        `}
      }
      .revenue-desc {
        margin-top: 40px;
        h3{
          ${media.sm`
        margin-bottom: 8px;
      `}
        }
      }
    }
  }
`;

export default RevenueWrapper;
