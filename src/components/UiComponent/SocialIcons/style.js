import styled from "styled-components";
import { media, bgMixin } from "../../../theme/media-mixins";

const SocialWrapper = styled.div`
  .social {
    gap: 16px;
    ${media.xs`
        justify-content: center;
        width: 100%;
        margin-left: 0;
        margin-top: 10px;
      `}
    div {
      cursor: pointer;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      transition: background-color 0.5s ease-out, background-image 0.5s ease-out;
      img {
        filter: invert(61%) sepia(8%) saturate(960%) hue-rotate(170deg)
          brightness(90%) contrast(81%);
        transition: filter 0.5s ease-out;
      }
      &:hover {
        img {
          filter: invert(100%) sepia(33%) saturate(1%) hue-rotate(246deg)
            brightness(104%) contrast(101%);
        }
      }
    }
    &__facebook {
      ${bgMixin("rgba(53, 121, 234, 1)")};
    }
    &__instagram {
      &:hover {
        background-image: radial-gradient(
          circle at 30% 107%,
          #fdf497 0%,
          #fdf497 5%,
          #fd5949 45%,
          #d6249f 60%,
          #285aeb 90%
        );
      }
    }
    &__linkedin {
      ${bgMixin("rgba(0, 122, 185, 1)")};
    }
    &__twitter {
      ${bgMixin("rgba(0, 166, 222, 1)")};
    }
    &__behance {
      ${bgMixin("rgba(65, 118, 250, 1)")};
    }
    &__youtube {
      ${bgMixin("rgba(255, 0, 0, 1)")};
    }
  }
`;

export default SocialWrapper;
