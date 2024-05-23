import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const DedicatedDeveloperWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    background-image: url('/home-banner.png');
    overflow: hidden;
    height: 100vh;
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
    animation: shrink 5s infinite alternate;
    ${media.sm`
      background-image: none;
      animation: none;
      background-size: cover;
      height: auto;
    `}
      @keyframes shrink {
        0% {
          background-size: 100% 100%;
        }
        100% {
          background-size: 105% 105%;
        }
      }

  .title-portion {
    padding: 220px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    ${media.sm`
      padding: 96px 0;
      height: auto;
    `}
    h1 {
      color: ${({ theme }) => theme.colors.whiteColor};
      text-align: center;
      ${media.sm`
      line-height: 32px;
      `}
      span {
        color: ${({ theme }) => theme.colors.highlightColor} !important;
        padding-left: 8px;
      }
    }
    h2 {
      color: ${({ theme }) => theme.colors.dividerColor};
      letter-spacing: 0px;
      text-align: center;
      max-width: 810px;
      padding: 24px 0px;
      margin: 0 auto;
      margin-bottom: 24px;
    }
  }
`


export { DedicatedDeveloperWrapper };
