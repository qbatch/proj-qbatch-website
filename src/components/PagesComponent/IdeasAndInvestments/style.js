import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const IdeasWrapper = styled.div`
  background: url('/growing-bg.svg');
  background-size: cover;
  padding: 120px 203px;
  ${media.md`
    padding: 96px 120px 120px;
  `}
  ${media.sm`
    padding: 96px 40px;
  `}
  ${media.xs`
    padding: 96px 20px;
  `}
  .caption {
    color: ${({ theme }) => theme.colors.whiteColor};
    font-size: ${({ theme }) => theme.fonts.fsxs};
  }
  &.productDesign {
    .heading {
      max-width: 1170px;
    }
    button {
      margin-left: auto;
    }
  }
  .heading {
    color: ${({ theme }) => theme.colors.whiteColor};
    max-width: 1038px;
    text-transform: capitalize;
    margin-bottom:16px;
    .inner-heading {
      color: ${({ theme }) => theme.colors.dividerColor};
      display: block;
    }
    ${media.sm`
      margin-bottom: 32px;
    `}
  }
  .idea-btn {
    padding-top: 72px;
  }
  &.desired-result {
    .heading {
      max-width: 800px;
    }
  }
  &.enterprise {
    .heading {
      max-width: 100%;
    }
    .idea-btn {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
  }
`

export default IdeasWrapper;
