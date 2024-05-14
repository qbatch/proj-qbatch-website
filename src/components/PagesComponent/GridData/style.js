import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const RevenueWrapper = styled.div`
  padding: 96px 0 96px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 56px 0;
  `}
  .revenue-heading {
    max-width: 614px;
    h2 {
      line-height: 52px;
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 24px;
      font-size:${({ theme }) => theme.colors.baseFontSizeH2};
      line-height:52px;
      text-transform:none;
      span{
        font-style: italic;
        color: #000;
        font-weight:${({ theme }) => theme.fontWeight.normal};
      }
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
    padding: 24px;
    min-height: 259px;
    margin-bottom: 24px;
    flex:1;
    ${media.sm`
      min-height: auto;
      padding-bottom: 48px;
    `}
    .revenue-data {
      p {
        letter-spacing: 0;
        margin-bottom: 0px;
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        font-weight:${({ theme }) => theme.fontWeight.normal};
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
