import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ITSolutionsWrapper = styled.div`
  padding: 96px 0 56px;
  border-bottom:1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.md`
    padding: 96px 0 120px;
  `}
  ${media.sm`
    padding: 40px 0 80px;
  `}
  .solutions-heading {
    text-align: center;
    ${media.mobile`
      text-align: left;
    `}
    h2 {
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 24px;
      ${media.mobile`
        margin-bottom: 12px;
      `}
    }
    p {
      max-width: 850px;
      margin: 0 auto;
      margin-bottom: 72px;
      ${media.mobile`
        margin-bottom: 32px;
      `}
    }
  }
  .solutions-col {
    display: flex !important;
    flex-direction: column;
    justify-content: stretch;
    margin-bottom: 40px;
    ${media.md`
      margin-bottom: 0;
    `}
  }
  .solutions-box {
    border: 1px solid ${({ theme }) => theme.colors.dividerColor};
    background-color: ${({ theme }) => theme.colors.whiteColor};
    border-radius: 24px 24px 0 24px;
    padding: 24px;
    display: flex; 
    align-items: flex-start;
    gap: 24px;
    flex: 1;
    ${media.md`
      min-height: 266px;
    `}
    ${media.xs`
      min-height: 232px;
    `}
    img {
      width: 64px;
      height: 64px;
      max-width: max-content;
    }
    .text-h4 {
      color: ${({ theme }) => theme.colors.primaryColor};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      margin-bottom: 24px;
      ${media.xs`
        margin-bottom: 16px;
      `}
    }
    ul {
      list-style: disc;
      padding-left: 24px;
      li {
        color: ${({ theme }) => theme.colors.bodyTextVariant};
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        line-height: 32px;
        ${media.xs`
          font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
          line-height: 24px;
        `}
      }
    }
  }
  .btn-margin {
    margin-top: 32px;
    margin-bottom: 40px;
    ${media.md`
      margin-top: 72px;
      margin-bottom: 0;
    `}
  }
  &.logistics-supply {
    .solutions-box {
      ${media.md`
        min-height: 310px;
      `}
      ${media.mobile`
        min-height: 352px;
      `}
    }
  }
`

export default ITSolutionsWrapper;
