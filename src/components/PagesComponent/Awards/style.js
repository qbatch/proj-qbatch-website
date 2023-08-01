import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const AwardsWrapper = styled.div`
  .awards-main {
    padding: 96px 0;
    border-top: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    background-color: ${({ theme }) => theme.colors.onGradient};
    background-image: url("/awards-bg.svg");
    background-size: cover;
    text-align: center;
    ${media.sm`
      padding: 40px 0 0;
      background-size: 100%;
      background-repeat: no-repeat;
    `}
    .heading {
      margin-bottom: 72px;
      max-width: 221px;
      text-align: left;
      font-size: 40px;
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      font-weight: 700;
      line-height: 52px;
      ${media.sm`
        margin-bottom:24px; 
        max-width:100%;
        font-size:24px;
        line-height:32px;
        text-align:center;
      `}
    }
    .awards-logos {
      row-gap: 32px;
      ${media.sm`
        row-gap:15px;
      `}
      a {
        padding:16px 0;
        display: flex;
        justify-content: center;
        position:relative;
        z-index:1;
        ${media.sm`
        padding:12px 0;
      `}
        img {
          max-width: 100%;
        }
      }
    }
    .btn-awards{
      text-align:left;
      margin-top:-87px;
       ${media.sm`
          margin-top:24px;
          margin-bottom:40px;
          text-align:center;
          button{
            margin:0 auto;
          }
       `}

    }
  }
`;

export default AwardsWrapper;
