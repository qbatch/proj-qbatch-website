import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const QbatchMakingWrapper = styled.div`
  .container-padding {
    padding: 96px 0 64px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
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
  }
  .challenges-section {
    margin-top: 27px;
    p {
      margin-bottom: 0;
    }
    .challenges-box {
      margin-bottom: 32px;
    }
    .challenges-icons {
      svg {
        min-width: 30px;
        ${media.xs`
          min-width: 18px;
        `}
      }
      img {
        ${media.xs`
          min-width: 20px;
        `}
      }
    }
  }
`;

export default QbatchMakingWrapper;
