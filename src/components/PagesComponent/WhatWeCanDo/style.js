import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const WhatWeDoWrapper = styled.div`
  .base-space {
    padding: 96px 0 22px;
    ${media.sm`
      padding: 40px 0;
    `}
  }
  .section-heading {
    p {
      max-width: 820px;
    }
  }
  .services-btn {
    margin-top: 48px;
    padding-left: 4px;
    ${media.sm`
      margin-top: 0;
      padding-left: 0;
    `}
  }
  .services-provided {
    margin-top: 58px;
    .service {
      margin-bottom: 73px;
      img{
        max-width: 60px;
      }
      .do-title {
        margin-left: 40px;
        ${media.sm `
          margin-left: 30px;
        `}
        h4{
          margin-bottom:6px;
        }
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
