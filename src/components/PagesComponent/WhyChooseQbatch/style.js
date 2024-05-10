import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const WhyChooseQbatchWrapper = styled.div`
  padding: 120px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 56px 0;
  `}
  .heading {
    max-width: 820px;
    margin: auto;
    padding-bottom: 72px;
    ${media.sm`
    padding: 0 0 48px;
  `}
  }
  .wrapper {
    .row {
      --bs-gutter-y: 24px;
      --bs-gutter-x: 24px;
    }
    .achievements-col {
      text-align: center;
      padding: 24px 48px;
      .icon {
        display: block;
        margin: auto;
        padding-bottom: 24px;
      }
      .paragraph {
        line-height: 32px;
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        max-width: 320px;
        font-weight:600;
        margin: auto;
        color: ${({ theme }) => theme.colors.bodyTextVariant};
      }
      ${media.xs`
    padding: 24px 24px;
      .paragraph{
        line-height: 24px;
      }
    `}
    }
  }
`

export default WhyChooseQbatchWrapper;
