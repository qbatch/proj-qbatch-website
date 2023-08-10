import styled from "styled-components";
import { media } from "../../../theme/media-mixins";
const ValueSystemWrapper = styled.div  `
  padding: 96px 0;
  .underline-heading{
    color: ${({ theme }) => theme.colors.bodyText};
    font-weight: 700;
    position: relative;
    margin: 0;
    //text-transform: capitalize;
    &::before{
      content: "";
      position: absolute;
      height: 1px;
      width: 24px;
      bottom: -2px;
      background-color: #ED1C24;
    }
  }
  .heading-wrapper{
    padding-top: 4px;
  }
  .heading{
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    color: ${({ theme }) => theme.colors.gardientColor};
    padding-top: 12px;
    span{
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primaryColor};
    }
  }
  .col-wrapper{
    padding-top: 64px;
  }
  .value-col{
    padding: 36px 4.2% 16px;
    min-height: 246px; 
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
      padding-top: 14px;
      h3{
        margin-bottom: 16px;
      }
      p{
        line-height: 32px;
      }
    }
    &:nth-child(3),
    &:nth-child(6),
    &:nth-child(9){
      border-right: 0;
    }
    &:nth-child(7),
    &:nth-child(8),
    &:nth-child(9){
      border-bottom: 0;
    }
    ${media.md`
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
      min-height: 170px
    `}
  }
`

export default ValueSystemWrapper;