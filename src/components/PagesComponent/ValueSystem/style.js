import styled from "styled-components";
import { media } from "../../../theme/media-mixins";
const ValueSystemWrapper = styled.div  `
  padding: 96px 0;
  ${media.sm`
    padding: 40px 0;
  `}
  .heading-wrapper{
    padding-top: 4px;
  }
  .heading{
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    color: ${({ theme }) => theme.colors.gardientColor};
    padding-top: 10px;
    span{
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primaryColor};
    }
  }
  .col-wrapper{
    padding-top: 76px;
    ${media.sm`
     padding-top: 26px;
    `}
  }
  .value-col{
    padding: 36px 4.2% 20px;
    min-height: 238px; 
    display: flex;
    align-items: flex-start;
    border-right: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-bottom:  1px solid ${({ theme }) => theme.colors.dividerColor};
    .value-icon{
      height: 60px;
      width: 60px;
    }
    .col-inner{
      padding-left: 16px;
      padding-top: 12px;
      h3{
        margin-bottom: 18px;
      }
      p{
        line-height: 32px;
      }
    }
    &:nth-child(3n){
      border-right: 0;
    }
    &:nth-child(7),
    &:nth-child(8),
    &:nth-child(9){
      border-bottom: 0;
    }
    ${media.lg`
    &:nth-child(even){
      border-right: 0;
     }
     &:nth-child(odd){
      border-right: 1px solid ${({ theme }) => theme.colors.dividerColor};
     }
     &:nth-child(7),
     &:nth-child(8) {
      border-bottom:  1px solid ${({ theme }) => theme.colors.dividerColor};
     }
    `}
    ${media.md`
    min-height: 170px;
    
    `}
    ${media.sm`
    min-height: auto;
    padding: 26px;
      border-right: 0 !important;
    `}
  }
`

export default ValueSystemWrapper;
