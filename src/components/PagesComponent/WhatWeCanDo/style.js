import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const WhatWeDoWrapper = styled.div`
  .base-space {
    padding: 96px 0 96px;
    ${media.sm`
      padding: 40px 0;
    `}
  }
  .section-heading {
    .heading {
      line-height: 84px;
      margin-bottom: 22px;
    }
    p {
      max-width: 830px;
    }
  }
  .services-btn {
    margin-top: 48px;
    padding-top: 58px;
    padding-left: 4px;
    ${media.sm`
      margin-top: 0;
      padding-left: 0;
    `}
  }
  .services-provided {
    .service {
      margin-top: 58px;
      img {
        max-width: 60px;
      }
      .do-title {
        margin-left: 40px;
        ${media.sm`
          margin-left: 30px;
        `}
        .heading {
          margin-bottom: 18px;
          color: ${({ theme }) => theme.colors.bodyTextVariant};
          letter-spacing: 0;
        }
        .paragraph {
          color: ${({ theme }) => theme.colors.textMedium};
          white-space: pre-line;
          text-transform: capitalize;
          line-height: 24px;
          font-size: 16px;
          ${media.sm`
             white-space: inherit;
            `}
        }
      }
    }
  }
`

export default WhatWeDoWrapper;
