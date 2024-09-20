import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const PressReleaseWrapper = styled.div`
  padding: 96px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 40px 0;
  `}
  .press-heading {
    h2 {
      margin-bottom: 16px;
    }
    p {
      color: ${({ theme }) => theme.colors.textMedium};
      margin-bottom: 32px;
    }
  }
  .press-box {
    border: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-radius: 16px 16px 0 16px;
    padding: 32px;
    h3 {
      margin-bottom: 32px;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
  }
`

export default PressReleaseWrapper;
