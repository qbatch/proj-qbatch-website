import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const TechnicalExcellenceWrapper = styled.div`
  padding: 96px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  .technical-heading {
    color: ${({ theme }) => theme.colors.primaryColor};
    max-width: 650px;
    line-height: 52px;
    ${media.md`
      line-height: 32px;
    `}
  }
  .technical-paragraph {
    padding-top: 8px;
    max-width: 580px;
    h4 {
      font-weight: ${({ theme }) => theme.fontWeight.normal};
      line-height: 32px;
      letter-spacing: 0.5px;
      margin-bottom: 24px;
      
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
`;

export default TechnicalExcellenceWrapper;
