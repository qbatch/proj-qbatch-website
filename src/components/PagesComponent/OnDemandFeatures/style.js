import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const OnDemandWrapper = styled.div`
  padding: 96px 0 72px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 56px 0 32px;
  `}
  h2 {
    text-align: center;
    max-width: 1040px;
    color: ${({ theme }) => theme.colors.primaryColor};
    margin: 0 auto 72px;
    ${media.sm`
      margin-bottom: 56px;
    `}
    ${media.mobile`
      text-align: left;
    `}
  }
  .features-col {
    padding-bottom: 40px;
    margin-bottom: 40px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    flex: 1;
    ${media.mobile`
      padding-bottom: 24px;
      margin-bottom: 24px;
    `}
    img {
      margin-bottom: 24px;
      ${media.mobile`
        width: 57px;
        height: 57px;
      `}
    }
    p {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      line-height: 32px;
      margin-bottom: 0;
      ${media.mobile`
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        line-height: 24px;
      `}
    }
  }
`

export default OnDemandWrapper;
