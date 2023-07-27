import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const QbatchMakingWrapper = styled.div`
  .container-padding {
    padding: 96px 0 64px;
    border-bottom: 1px solid ${({theme})=> theme.colors.dividerColor};
  }
  .section-heading {
    margin-bottom: 72px;
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
    .gradient-arrow {
      svg {
        min-width: 30px;
        ${media.xs`
        min-width: 18px;
    `}
      }
    }
  }
`;

export default QbatchMakingWrapper;
