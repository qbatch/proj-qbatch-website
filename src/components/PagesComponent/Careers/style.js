import styled from "styled-components";
import { media } from "../../../theme/media-mixins" 

const CareerWrapper = styled.div`
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
  .heading{
    padding-top: 12px;
    padding-bottom: 28px;
  }
  .paragraph{
    line-height: 32px;
    padding-right: 24px;
  }
  .cards-wrapper{
    margin-top: 68px;
    .inner-card{
      padding-bottom: 16px;
    }
  }
  .wrapper{
    padding: 24px;
    border-radius: 16px 16px 0 16px;
    border: 1px solid  ${({ theme }) => theme.colors.dividerColor};
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
    margin-top: 24px;
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
  .bottom-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 30px;
    .time{
    font-size:  ${({ theme }) => theme.fonts.baseFontSizeXs};
    color: ${({ theme }) => theme.colors.bodyText};
  }
  }
`

export default CareerWrapper;