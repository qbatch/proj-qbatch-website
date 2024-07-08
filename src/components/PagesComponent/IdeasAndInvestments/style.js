import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const IdeasWrapper = styled.div`
  background: url('/inner-banner-bg.svg');
  background-size: cover;
  padding: 96px 203px;
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
      max-width: 1140px;
      margin-bottom: 72px;
    }
    button {
      margin-right: auto;
    }
  }
  .heading {
    color: ${({ theme }) => theme.colors.whiteColor};
    max-width: 1038px;
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
      text-transform: capitalize;
      ${media.sm`
        margin-bottom: 32px;
      `}
    }
  }
  &.desire-result-wrapper{
    padding:109px 96px;
    ${media.sm`
    padding: 56px 24px;
    `}
    .container{
      max-width:100%;
    }
    .heading{
      margin:0;
      max-width:988px;
      text-align:left;
      margin-bottom:48px;
    }
    .idea-btn.d-flex.justify-content-end{
      justify-content:flex-start !important;
    }
  }
  &.enterprise {
    .heading {
      max-width: 100%;
      margin-bottom: 48px;
      text-transform:capitalize;
      max-width: 986px;
      line-height: 68px;
      ${media.md`
        line-height: 40px;
      `}
      ${media.sm`
        line-height: 32px;
      `}
    }
    .idea-btn {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
  }
  &.data-scraping-component {
    padding: 96px 203px;
    ${media.md`
      padding: 96px 120px;
    `}
    ${media.sm`
      padding: 96px 40px;
    `}
    ${media.xs`
      padding: 96px 20px;
    `}
    .heading {
      max-width: 1170px;
    }
    button {
      margin-top: 72px;
    }
  }

  &.edu-dev-component{
    .heading{
      margin-bottom: 24px;
    }
    span.caption{
      margin-bottom: 72px;
      display: block;
       font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    }
  }
`

export default IdeasWrapper;
