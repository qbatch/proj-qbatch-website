import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const DevelopmentServicesWrapper = styled.div `
padding: 96px 0;
  ${media.sm`
    padding: 56px 0px;
  `}
.section-main-heading{
  max-width: 340px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  ${media.sm`
    margin-bottom:24px;
  `}
  i{
    color: ${({ theme }) => theme.colors.primaryColor};
  }
  span{
    color: ${({theme}) =>  theme.colors.primaryColor}
  }
}
.row{
  --bs-gutter-y: 1.5rem;
}
.dev-service-box{
    padding: 48px;
    border: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-radius: 24px 24px 0 24px;
    background-color: #FFF;
    position: relative;
    height: 100%;
    transition: background-color 0.5s, color 0.5s;
    ${media.sm`
      padding: 24px;
      padding-bottom: 48px;
    `}
    .box-header{
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 20px;
      ${media.sm`
      margin-bottom: 12px;
      `}
      .heading{
        font-weight: ${({ theme }) => theme.fontWeight.bold};
      }
    }
    .box-body{
      .paragraph{
        line-height: 24px;
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        margin-bottom: 48px;
      }
      button{
        display: flex;
        margin-left: auto;
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        position: absolute;
        bottom: 48px;
        right: 48px;
      }
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondaryColor};
      .box-heading, .paragraph {
        color: ${({ theme }) => theme.colors.whiteColor};
      }
      button{
        .btn-text {
          color: ${({ theme }) => theme.colors.highlightColor};
        }
      }
    }
  }
`

export default DevelopmentServicesWrapper;