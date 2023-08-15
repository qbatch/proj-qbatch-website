import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const AchievementsWrapper = styled.div`
position:relative;
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
  .achievements-main {
    padding: 96px 0;
    border-top: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    background-image: url("/achievements-bg.svg");
    background-image:none;
    background-size: cover;
    text-align: center;
    position : relative;
    ${media.sm`
      padding: 40px 0 0;
    `}
    .achievements-inner-wrapper{
      position: relative;
      z-index: 2;
    }
    .heading {
      margin-bottom: 71px;
    }
    .achievements-col {
      position: relative;
      padding-top: 35px;
    padding-bottom: 25px;
      ${media.sm`
        margin-bottom: 40px;
      `}
      &::after {
        position: absolute;
        content: "";
        width: 1px;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.dividerColor};
        right: 0;
        top: 0;
        ${media.xs`
          width: 0px;
        `}
      }
      &:last-child::after {
        width: 0px;
      }
      h1 {
        color: ${({ theme }) => theme.colors.bodyTextVariant};
        margin-bottom: 16px;
      }
      p {
        margin-bottom: 0;
        line-height: 32px;
        white-space: pre-line;
        ${media.lg`
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
        `}
      }
    }
  }
`;

export default AchievementsWrapper;
