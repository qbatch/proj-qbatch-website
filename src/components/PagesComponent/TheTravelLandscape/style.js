import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const TheTravelLandscapeWrapper = styled.div`
    padding: 140px 96px;
    background-image: url(/landscape.svg);
    background-size: cover;
    background-repeat: no-repeat;
    ${media.sm`
      padding: 40px;
      background: #0A2545;
      background-image:none ;
      `}

    h2{
      color: #FFFFFF;
      margin: 0;
      ${media.sm`
      text-align:center;
      `}
    }
    p{
      font-size: 20px;
      font-weight: 400;
      line-height: 32px;
      text-align: left;
      color: #D2D9DC;
      margin: 0;
      margin-top: 24px;
      margin-bottom: 32px;
      ${media.sm`
      text-align:center;
      font-size: 16px;
      line-height: 24px;
      margin-top: 8px;
      margin-bottom: 28px;
      `}
    }

    button{
      color: #FFFFFF !important;
     &:hover{
      color: #FFFFFF !important;
     }
      ${media.sm`
      margin:auto;
      `}
    }
`;

export { TheTravelLandscapeWrapper };
