import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const TechnicalExcellenceWrapper = styled.div`
  padding: 120px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
     padding: 60px 0px;
  `}
  .technical-heading {
    color: ${({ theme }) => theme.colors.primaryColor};
    max-width: 650px;
    line-height: 52px;
    ${media.sm`
      line-height: 32px;
      text-align: center;
    `}
  }
  .technical-paragraph {
    padding-top: 9px;
    max-width: 580px;
    ${media.md`
     max-width: 100%;
    `}
    ${media.sm`
      text-align: center;
    `}
    a {
      text-decoration: underline;
    }
    h4 {
      font-weight: ${({ theme }) => theme.fontWeight.normal};
      line-height: 32px;
      letter-spacing: 0.5px;
      margin-bottom: 24px;
      text-transform: none;
    }
    p {
      margin-bottom: 32px;
      line-height: 32px;
      &:last-child {
        margin-bottom: 0;
      }
      a {
        margin-left: 5px;
      }
    }
  }
  &.mobile-apps {
    .technical-paragraph {
      max-width: 650px;
      ${media.md`
        max-width: 100%;
     `}
    }
  }
`

export default TechnicalExcellenceWrapper;
