import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const TechnicalExcellenceWrapper = styled.div`
  padding: 96px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
     padding: 60px 0px;
  `}
  ${media.xs`
     padding: 56px 0px;
  `}
  .technical-heading {
    color: ${({ theme }) => theme.colors.primaryColor};
    max-width: 650px;
    line-height: 52px;
    text-transform:none;
    ${media.sm`
      line-height: 32px;
      text-align: center;
    `}
  }
  .technical-paragraph {
    padding-top: 9px;
    max-width: 580px;
    line-height:24px;
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    ${media.md`
     max-width: 100%;
    `}
    ${media.sm`
      text-align: center;
    `}
    a {
      text-decoration: underline;
      &.label-text-ancer{
        font-weight: 600;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primaryColor};
      }
    }
    h3 {
      font-weight:300;
      line-height: 32px;
      letter-spacing: 0.5px;
      margin-bottom: 24px;
      text-transform: none;
      color:${({ theme }) => theme.colors.bodyTextVariant};
      font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
      ${media.xs`
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      line-height:24px;
      `}
    }
    p {
      margin-bottom: 32px;
      line-height:24px;
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
