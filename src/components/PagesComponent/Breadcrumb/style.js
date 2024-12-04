import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const BreadcrumbWrapper = styled.div`
  margin: auto;
  position: absolute;
  z-index: 99;
  width: 100%;
    top: 0;
    left: 0;
    background: #001A33;
    padding: 0;
    &.inner-page{
      position: relative;
    }
    .current-breadcrumb {
      background: #FFFFFF33;
      padding: 4px;
      border-radius: 4px;
      span{
        color:  ${({ theme }) => theme.colors.whiteColor};
      }
    }

  .breadcrumb {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
    color: ${({ theme }) => theme.colors.whiteColor};
    margin: 0 0 12px 0;
    padding: 16px 96px;
    max-width: 1600px;
    margin: auto;
    ul{
      align-items: center !important;
      grid-gap: 12px;
      li{
        svg{
          font-size: 14px;
        }
      }
    }
    a {
      color: ${({ theme }) => theme.colors.bodyLight};
      white-space: nowrap;
      display: flex;
      align-items: center;
      grid-gap: 12px;
    }
    ${media.lg`
      padding: 16px 80px;
    `}
    ${media.md`
      padding: 16px 60px;
    `}
    ${media.sm`
      padding: 16px 40px;
      overflow-x: scroll;
    `}
    ${media.xs`
      padding: 16px 24px;
    `}
  }
`

export default BreadcrumbWrapper;
