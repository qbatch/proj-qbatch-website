import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const WhyChooseQbatchWrapper = styled.div`
  padding: 96px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 56px 0;
  `}
  .heading {
    max-width: 820px;
    margin: auto;
    padding-bottom: 48px;
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
        max-width: 320px;
        margin: auto;
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
