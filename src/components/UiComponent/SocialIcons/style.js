import styled from "styled-components";
import { media, bgMixin } from "../../../theme/media-mixins";

const SocialWrapper = styled.div`
  .social {
    gap: 16px;
    ${media.xs`
        justify-content: center;
        width: 100%;
        margin-left: 0;
      `}
    div {
      cursor: pointer;
      max-width: 40px;
      max-height: 40px;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      img{
        max-width: 40px;
        max-height: 40px;
        width: 100%;
        height: 100%;
      }
    }

    ${media.lg`
    gap: 8px;
    justify-content: space-between;
        div{
          height: 28px;
          width: 28px;
          img{
            height: 28px;
            width: 28px;
          }
        }
      `}
  }
`

export default SocialWrapper;
