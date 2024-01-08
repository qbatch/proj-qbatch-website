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
    h1 {
      font-size: 64px;
      color: ${({ theme }) => theme.colors.whiteColor};
      text-align: center;
      line-height: 79px;
      span {
        color: ${({ theme }) => theme.colors.highlightColor};
        padding-left: 4px;
      }
    }
    p {
      color: ${({ theme }) => theme.colors.whiteColor};
      font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
      letter-spacing: 0px;
      line-height: 32px;
      text-align: center;
      max-width: 933px;
      padding: 24px 0px;
      margin: 0 auto;
      margin-bottom: 44px;
    }
  }
`


export { DedicatedDeveloperWrapper };
