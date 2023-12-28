import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const DedicatedDeveloperWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  background-image: url('./home-banner.png');
  overflow: hidden;
  height: 100vh;
  .title-portion {
    padding: 220px 73px;
    h1 {
      font-size: 64px;
      color: ${({ theme }) => theme.colors.whiteColor};
      text-align: center;
      letter-spacing: 0.7px;
      line-height: 79px;
      span {
        color: ${({ theme }) => theme.colors.highlightColor};
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
      margin-bottom:44px;
    }
  }
`


export { DedicatedDeveloperWrapper };
