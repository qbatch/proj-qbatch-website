import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const QbatchMakingWrapper = styled.div`
  .container-padding {
    padding: 96px 0 39px;
    ${media.sm`
      padding: 40px 0 8px;
    `}
  }
  .section-heading {
    margin-bottom: 72px;
    ${media.xs`
      margin-bottom: 40px;
    `}
    h1 {
      margin-bottom: 24px;
    }
    p {
      ${media.xs`
        line-height: 24px;
      `}
    }
  }
  .challenges-section {
    margin-top: 24px;
    p {
      margin-bottom: 0;
    }
    .challenges-box {
      margin-bottom: 40px;
      align-items: center;
      p {
        ${media.xs`
          font-size: 12px;
        `}
      }
    }
    .challenges-icons {
      img {
        ${media.xs`
          min-width: 20px;
        `}
      }
    }
    .gradient-arrow {
      width: 100%;
      min-width: 30px;
      position: relative;
      height: 2px;
      background: linear-gradient(
        to right,
        rgba(237, 28, 36, 1),
        rgba(0, 84, 166, 1)
      );
      ${media.xs`
        height: 1px;
      `}
      svg {
        position: absolute;
        right: -9px;
        top: -12px;
        max-width: none;
        color: rgba(0, 84, 166, 1);
        ${media.xs`
          width: 20px;
          height: 20px;
          right: -7px;
          top: -9.5px;
        `}
      }
    }
  }
`;

export default QbatchMakingWrapper;
