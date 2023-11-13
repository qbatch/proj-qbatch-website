import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const MultiPlatformWrapper = styled.div`
  padding: 120px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 60px 0;
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
        line-height: 38px;
      `}
    }
    h3 {
      font-weight: ${({ theme }) => theme.fontWeight.light};
      max-width: 420px;
      text-transform: none;
      line-height: 32px;
      letter-spacing: 0.7px;
      ${media.md`
        max-width: 100%;
        margin-bottom: 72px;
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
      line-height: 48px;
      margin-bottom: 16px;
      letter-spacing: 0;
    }
    p {
      line-height: 32px;
      max-width: 690px;
      margin-bottom: 32px;
      letter-spacing: 0;
    }
  }
`

export default MultiPlatformWrapper;
