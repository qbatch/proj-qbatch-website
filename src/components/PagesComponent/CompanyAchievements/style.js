import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const AchievementsWrapper = styled.div`
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
padding: 96px 0 74px;
.underline-heading{
    color: ${({ theme }) => theme.colors.bodyText};
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 30px;
    position: relative;
    text-transform: capitalize;
    &::before{
      content: "";
      position: absolute;
      height: 1px;
      width: 24px;
      bottom: -2px;
      background-color: #ED1C24;
    }
  }

  .counter-wrapper{
      padding-top: 34px;
      padding-bottom: 10px;
    }
  .main-heading{
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 28px;
    margin-top: 16px;
  }
  .achievements-col{
    text-align: center;
    padding: 44px 8px;
    border-right: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-bottom:  1px solid ${({ theme }) => theme.colors.dividerColor};
    h1{
      margin-bottom: 0;
    }
    p{
      max-width: 221px;
      margin: 0 auto;
      line-height: 30px;
      padding-top: 16px;
      letter-spacing: 1.3px;
    }
    &:nth-child(4),
    &:nth-child(8){
      border-right: none;
    }
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7),
    &:nth-child(8){
      border-bottom: none;
    }
    ${media.sm`
     &:nth-child(3){
      border-right: 0;
     }
     &:nth-child(4),
     &:nth-child(8){
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
    @media (max-width: 575px){
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

export default AchievementsWrapper;