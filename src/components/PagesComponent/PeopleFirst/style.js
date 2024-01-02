import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const PeopleFirstWrapper = styled.div`
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
padding: 120px 0 112px;
${media.sm`
    padding: 40px 0;
`}
.section-btn{
  display: none;
}
&.productDesignPage{
  .section-btn{
    margin-top: 74px !important;
    display: flex;
    margin: auto;
  }
  .sub-heading{
    max-width: 811px;
    font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
    font-weight: ${({ theme }) => theme.fontWeight.light}
  }
}
.row > .achievements-col:nth-last-child(-n+4) {
  border-bottom: none;
}
  .counter-wrapper{
      padding-top: 58px;
      padding-bottom: 10px;
    }
  .main-heading{
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 24px;
    line-height: 52px;
    ${media.sm`
      line-height: 32px;
    `}
  }
  .paragraph{
    max-width: 720px;
    color:#2D2F31;
    line-height: 32px;
    font-weight:600;
    letter-spacing: 0;
    ${media.sm`
      line-height: 24px;
    `}
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
      max-width: 270px;
    }
    &:nth-child(4n){
      border-right: none;
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
