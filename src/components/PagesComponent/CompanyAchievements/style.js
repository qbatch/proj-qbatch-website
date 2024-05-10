import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const AchievementsWrapper = styled.div`
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
padding: 96px 0;
h2{
  text-transform: none;
}
${media.sm`
    padding: 56px 0;
`}
  .counter-wrapper{
      padding-bottom: 10px;
    }
  .main-heading{
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 72px;
    font-weight:700;
    ${media.sm`
    margin-bottom: 24px;
    `}
    span {
      display: block;
      margin-bottom: 24px;
      font-weight:500;
    }
  }
  .achievements-col{
    text-align: center;
    padding: 44px 12px;
    border-right: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-bottom:  1px solid ${({ theme }) => theme.colors.dividerColor};
    ${media.sm`
    padding: 16px 12px;
    `}
    h1{
      margin-bottom: 0;
    }
    h3{
      font-weight:700;
    }
    p{
      max-width: 221px;
      margin: 0 auto;
      line-height: 32px;
      padding-top: 8px;
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      letter-spacing: 1.3px;
    }
    ${media.sm`
    &:nth-child(5) {
      border-bottom:1px solid ${({ theme }) => theme.colors.dividerColor} !important;
    }
    &:nth-child(6) {
      border-bottom:1px solid ${({ theme }) => theme.colors.dividerColor} !important;
    }
    &:nth-child(3) {
      border-right:none;
    }
    &:nth-child(8) {
      border-right:1px solid ${({ theme }) => theme.colors.dividerColor} !important;
    }
    &:nth-child(6) {
      border-right:none;
    }
    &:nth-child(4) {
      border-right: 1px solid ${({ theme }) => theme.colors.dividerColor} !important;
    }
    
    `}
    ${media.mobile`
    &:nth-child(3) {
      border-right:1px solid ${({ theme }) => theme.colors.dividerColor} !important;
    }
    &:nth-child(2) {
      border-right:none;
    }
    &:nth-child(4) {
      border-right:none !important;
    }
    &:nth-child(5) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor} !important;
    }
    &:nth-child(6) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor} !important;
    }
    &:nth-child(8) {
      border-right: none !important;
    }

    `}
    &:nth-child(4n){
      border-right: none;
    }
    &:nth-child(5) {
      border-bottom: none;
    }
    &:nth-child(6) {
      border-bottom: none;
    }
    &:nth-child(7) {
      border-bottom: none;
    }
    &:nth-child(8) {
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
