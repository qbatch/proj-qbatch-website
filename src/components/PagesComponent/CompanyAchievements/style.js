import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const AchievementsWrapper = styled.div`
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
padding: 96px 0;
h2{
  text-transform: none;
}
${media.sm`
    padding: 40px 0;
`}
  .counter-wrapper{
      padding-bottom: 10px;
    }
  .main-heading{
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 72px;
    span {
      display: block;
      margin-bottom: 24px;
    }
  }
  .achievements-col{
    text-align: center;
    padding: 44px 12px;
    border-right: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-bottom:  1px solid ${({ theme }) => theme.colors.dividerColor};
    h1{
      margin-bottom: 0;
    }
    p{
      max-width: 221px;
      margin: 0 auto;
      line-height: 32px;
      padding-top: 8px;
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      letter-spacing: 1.3px;
      text-transform: capitalize;
    }
    &:nth-child(4n){
      border-right: none;
    }
    &:nth-last-child(-n+4) {
      border-bottom: none;
    }

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
    ${media.sm`
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

`

export default AchievementsWrapper;
