import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const PeopleFirstWrapper = styled.div`
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
padding: 120px 0 112px;
${media.sm`
    padding: 40px 0;
`}
  .counter-wrapper{
      padding-top: 58px;
      padding-bottom: 10px;
    }
  .main-heading{
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 24px;
    line-height: 52px;
  }
  .paragraph{
    max-width: 720px;
    line-height: 32px;
    letter-spacing: 0;
  }
  .achievements-col{
    text-align: center;
    padding: 32px 12px;
    border-right: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-bottom:  1px solid ${({ theme }) => theme.colors.dividerColor};
    img{
      height: 114px;
      width: 114px;
      margin-bottom: 18px;
    }
    p{
      margin: 0 auto;
      font-weight: 700;
      padding-top: 8px;
    }
    &:nth-child(4n){
      border-right: none;
    }
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7),
    &:nth-child(8){
      border-bottom: none;
    }
    ${media.md`
     &:nth-child(3){
      border-right: 0;
     }
     &:nth-child(4n){
      border-right: 1px solid ${({ theme }) => theme.colors.dividerColor};
     }
     &:nth-child(5){
      border-bottom:  1px solid ${({ theme }) => theme.colors.dividerColor};
     }
     &:nth-child(6){
      border-right: 0;
      border-bottom:  1px solid ${({ theme }) => theme.colors.dividerColor};
    }
    `}
    @media (max-width: 767px){
      &:nth-child(even){
      border-right: 0;
     }
      &:nth-child(odd){
      border-right: 1px solid ${({ theme }) => theme.colors.dividerColor};
     }
    }
    ${media.xs`
    p{
      line-height: 20px;
    }
    `}

    
  }
`

export default PeopleFirstWrapper;
