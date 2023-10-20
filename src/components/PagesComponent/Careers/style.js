import styled from "styled-components";
import { media } from "../../../theme/media-mixins" 

const CareerWrapper = styled.div`
 padding: 120px 0;
 ${media.sm`
  padding: 40px 0;
 `}
  .heading{
    span {
      display: block;
      margin-bottom: 20px;
    }
  }
  .paragraph{
    line-height: 32px;
    padding-top: 32px;
    padding-right: 32px;
    margin-bottom: 4px;
  }
  .cards-wrapper{
    padding-top: 20px;
  }
  .inner-card{
    margin-top: 70px;
    ${media.sm`
     margin-top: 24px;
    `}
  }
  .wrapper{
    padding: 24px 24px 20px;
    border-radius: 16px 16px 0 16px;
    border: 1px solid  ${({ theme }) => theme.colors.dividerColor};
    .card-heading{
      margin-bottom: 12px;
    }
    .location-wrapper{
      display: flex;
      align-items: center;
      img{  
        height: 16px;
        width: 16px;
        margin-right: 8px;
      }
      .location{
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        color: ${({ theme }) => theme.colors.bodyText};
      }
    }
  }
  .project-tags {
    margin-top: 18px;
    gap: 8px;
    div {
      padding: 3px 7px;
      border: 1px solid ${({ theme }) => theme.colors.bodyLight};
      color: ${({ theme }) => theme.colors.textMedium};
      border-radius: 2px;
      font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
      white-space: nowrap;
    }
  }
  .card-button{
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color:  ${({ theme }) => theme.colors.primaryColor};
    padding: 0;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    .arrow-icon{
      margin-left: 8px;
      height: 12px;
      width: 16px;
      object-fit: contain
    }
  }
  .bottom-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 32px;
    .time{
    font-size:  ${({ theme }) => theme.fonts.baseFontSizeXs};
    color: ${({ theme }) => theme.colors.bodyText};
  }
  }
`

export default CareerWrapper;
