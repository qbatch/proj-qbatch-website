import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const StaticPageWrapper = styled.div`
  padding: 24px 0 120px;
  ${media.sm`
    padding: 24px 0 60px;
  `}

  h2, .text-h2 {
    margin-bottom: 24px;
    margin-top: 48px;
    ${media.sm`
    margin-top: 24px;
    `}
  }
  h4 {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
    margin-top: 24px;
    margin-bottom: 16px;
  }
  p{
    margin-bottom: 24px;
    strong{
      font-weight:600;
    }
  }
  p, li{
    font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
    line-height: 32px;
    color: #434343;
    ${media.sm`
    font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
    line-height: 20px;
    `}
  }
  ul{
    margin-top: 24px;
  }
  hr{
    opacity: 1;
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
