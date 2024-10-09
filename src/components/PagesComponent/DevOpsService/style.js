import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const DeveOpsServiceWrapper = styled.div `
padding: 96px 0;
 ${media.sm`
    padding:56px 0;
  `}
.section-main{
  max-width: 690px;
}
.section-main-heading{
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primaryColor};
  margin-bottom: 24px;
}
.section-main-subtitle{
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
  margin: 0 0 16px;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.bodyTextVariant};
}
.section-main-paragraph{
  color: ${({ theme }) => theme.colors.textMedium};
  font-size: ${({ theme }) => theme.fonts.baseFontSize};
  ${media.sm`
    margin-bottom: 32px;
  `}
  ${media.mobile`
    margin-bottom: 20px;
  `}
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
    cursor:pointer;
    transition: background-color 0.5s ease-in-out;
    ${media.sm`
      padding: 24px;
      padding-bottom: 48px;
    `}
    .box-header{
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 20px;
      .heading{
        font-weight: ${({ theme }) => theme.fontWeight.bold};
      }
    }
    .box-body{
      .paragraph{
        line-height: 24px;
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        margin-bottom: 0;
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
    &:hover{
       background-color: ${({ theme }) => theme.colors.secondaryColor};
       .text-h4,.paragraph{
         color: ${({ theme }) => theme.colors.whiteColor};
       }
    }
  }
  &.innovations-wrapper {
    .dev-service-box{
      cursor: auto;
      .box-header {
        display: block;
        margin-bottom: 16px;
        ${media.sm`
          display: flex;
        `}
        img {
          margin-bottom: 32px;
          ${media.sm`
            margin-bottom: 0;
          `}
        }
        h3 {
          ${media.sm`
            margin-bottom: 0;
          `}
        }
      }
      &:hover{
       background-color: ${({ theme }) => theme.colors.whiteColor};
       .text-h4{
         color: ${({ theme }) => theme.colors.bodyTextVariant};
       }
       .paragraph {
          color: ${({ theme }) => theme.colors.textMedium};
       }
      }
    }
  }
`

export default DeveOpsServiceWrapper;