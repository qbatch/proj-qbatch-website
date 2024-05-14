import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const IdeasWrapper = styled.div`
  background: url('/inner-banner-bg.svg');
  background-size: cover;
  padding: 120px 203px;
  background-position: right;
  ${media.md`
    padding: 96px 120px 120px;
  `}
  ${media.sm`
    padding: 56px 24px;
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
    margin-bottom: 16px;
    .inner-heading {
      color: ${({ theme }) => theme.colors.textColor};
    }
    ${media.sm`
      margin-bottom: 32px;
      `}
      ${media.sm`
      margin-bottom: 0px;
  `}
  }
  &.desired-result {
    background: url('/inner-banner-bg2.svg');
    background-size: cover;
    .heading {
      max-width: 850px;
      margin: 0 auto 72px;
      text-align: center;
    }
  }
  &.enterprise {
    .heading {
      max-width: 100%;
      margin-bottom: 48px;
    }
    .idea-btn {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
  }
`

export default IdeasWrapper;
