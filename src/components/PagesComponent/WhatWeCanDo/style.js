import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const WhatWeDoWrapper = styled.div`
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
  .do-row {
    margin-top: 74px;
    .do-column {
      margin-bottom: 72px;
      position: relative;
      .do-title {
        margin-left: 40px;
        span {
          color: ${({ theme }) => theme.colors.textMedium};
          white-space: pre-line;
          line-height: 24px;
        }
      }
      .services-btn {
        position: absolute;
        bottom: 0;
      }
    }
  }
`;

export default WhatWeDoWrapper;
