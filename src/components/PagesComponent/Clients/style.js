import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const AwardsWrapper = styled.div`
position: relative;
&::before{
  content : '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: block;
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, rgba(246, 247, 250, 0.70) 0%, rgba(246, 247, 250, 0.60) 100%);
}

.clients-logos{
        position: relative;
        z-index: 2;
        display: flex;
        flex-wrap: wrap;
        margin-left: -20px;
        ${media.lg`
         margin-left: 0;
        `}
        .logo{
          width: 20%;
          height: 116px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          ${media.lg`
          height: 90px;
          padding: 10px;
          `}
          ${media.sm`
           width: 33.3%;
           img{
            width: 100%;
           }
          `}
        }
      }
  .awards-main {
    padding: 96px 0;
    border-top: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    background-color: ${({ theme }) => theme.colors.onGradient};
    background-image: url("/clients-bg.svg");
    background-size: cover;
    background-position: center;
    text-align: center;
    background-repeat: no-repeat;
    ${media.lg`
      background-position: -7px bottom;
    `}
    ${media.md`
      background-position: -33px bottom;
    `}
    ${media.sm`
      padding: 40px 0;
      background-size: 100%;
      background-repeat: no-repeat;
    `}
    .heading {
      position:relative;
      z-index: 2;
      max-width: 221px;
      text-align: left;
      font-size: 40px;
      color: ${({ theme }) => theme.colors.primaryColor};
      font-weight: 700;
      line-height: 52px;
      padding: 7px 0 0 39px;
      ${media.lg`
       padding-left: 0;
       margin-bottom: 24px
      `}
      ${media.md`
      margin-bottom: 14px; 
        font-size:35px;
        line-height:40px;
      `}
      ${media.sm` 
        max-width:100%;
        font-size:24px;
        line-height:32px;
        text-align:center;
      `}
    }
  }
`;

export default AwardsWrapper;
