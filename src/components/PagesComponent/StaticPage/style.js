import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const StaticPageWrapper = styled.div`
  padding: 120px 0;
  ${media.sm`
    padding: 60px 0;
  `}

  h3 {
    margin-bottom: 24px;
  }
  h4 {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
  }
  p {
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    line-height: 24px;
  }
  ul {
    list-style: disc;
    padding-left: 32px;
    color: ${({ theme }) => theme.colors.textMedium};
    margin-bottom: 24px;
    letter-spacing: 0.14px;
    line-height: 24px;
  }
`

export default StaticPageWrapper;
