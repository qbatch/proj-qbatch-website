import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const WhatWeDoWrapper = styled.div`
  .base-space {
    padding: 96px 0;
    padding-bottom: 24px;
  }
  .do-heading {
    h1 {
      margin-bottom: 16px;
    }
    p {
      color: ${({ theme }) => theme.colors.textMedium};
      line-height: 32px;
      max-width: 820px;
    }
  }
  .services-btn {
    margin-top: 48px;
    padding-left: 4px;
  }
  .services-provided {
    margin-top: 57px;
    .service {
      margin-bottom: 71px;
      .do-title {
        margin-left: 40px;
        span {
          color: ${({ theme }) => theme.colors.textMedium};
          white-space: pre-line;
          line-height: 24px;
          ${media.sm`
             white-space: inherit;
            `}
        }
      }
    }
  }
`;

export default WhatWeDoWrapper;
