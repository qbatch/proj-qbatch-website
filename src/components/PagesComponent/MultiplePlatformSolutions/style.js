import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const MultiPlatformWrapper = styled.div`
  padding: 120px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 56px 0;
  `}
  .platform-heading {
    h2 {
      color: ${({ theme }) => theme.colors.primaryColor};
      line-height: 52px;
      margin-bottom: 24px;
      max-width: 450px;
      ${media.md`
        max-width: 100%;
      `}
      ${media.sm`
        line-height: 32px;
        margin-bottom:12px;
      `}
    }
    p {
      font-weight: ${({ theme }) => theme.fontWeight.normal};
      max-width: 420px;
      text-transform: none;
      line-height: 24px;
      font-size: 16px;
      color: #5F737C;
       ${media.md`
        max-width: 100%;
        margin-bottom: 72px;
      `};
      ${media.sm`
        margin-bottom: 48px;
        line-height:24px;
  `}
    }
  }
  .platform-list {
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    margin-bottom: 32px;
    &:last-child {
      margin-bottom: 0;
    }
    h4 {
      line-height: 32px;
      margin-bottom: 16px;
      letter-spacing: 0;
      ${media.sm`
      margin-bottom: 8px;
      line-height: 24px;
    `}
    }
    p {
      line-height: 24px;
      max-width: 690px;
      margin-bottom: 32px;
      letter-spacing: 0;
      ${media.sm`
        line-height:24px;
        `}  
    }
  }
`

export default MultiPlatformWrapper;
