import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const MultiPlatformWrapper = styled.div`
  padding: 96px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 40px 0;
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
    h3 {
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
  .sub-text {
    color: ${({ theme }) => theme.colors.primaryColor};
    line-height: 24px;
    margin-bottom: 0;
    margin-top: -8px;
    span {
      color: ${({ theme }) => theme.colors.dangerColor};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
  }
  &.multiple-platforms{
    .platform-list{
      h3{
        margin: 8px  0 16px;
      }
    }
  }
  &.technology-thrives {
    .platform-list {
      margin-bottom: 24px;
      &:last-child {
        margin-bottom: 16px;
      }
    }
    .platform-heading {
      p {
        max-width: 600px;
      }
    }
  }
`

export default MultiPlatformWrapper;
