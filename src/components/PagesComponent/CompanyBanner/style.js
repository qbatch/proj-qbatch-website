import styled from "styled-components";
import { media } from "../../../theme/media-mixins";
const BannerWrapper = styled.div`
  background-image: url('/company-banner-img.png');
  background-size: cover;
  background-position: bottom;
  padding-top: 98px;
  padding-bottom: 105px;
   .banner-headings{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    .banner-heading{
      text-align: center;
      text-transform: uppercase;
      color: #fff;
      display: flex;
      align-items: center;
      margin: 0;
      &::before{
        content: '';
        height: 12px;
        width: 12px;
        display: block;
        background-color: ${({ theme }) => theme.colors.dangerColor};
        border-radius: 20px;
        margin: 0 16px;
      }
      &:first-child::before{
        display: none;
      }
    }
   }
   .banner-subheading{
    letter-spacing: 0.65px;
    padding-top: 23px;
    padding-bottom: 32px;
    max-width: 811px;
    text-align: center;
    margin: auto;
    h3{
      color: #fff;
      font-weight: 600;
      line-height: 40px;
      margin-bottom: 0;
      ${media.md`
      line-height: 32px;
      `}
    }
   }
   .banner-paragraph{
    text-align: center;
    margin: auto;
    max-width: 931px;
    h4{
      line-height: 32px;
      font-weight: 400;
      letter-spacing: 0.5px;
      color: ${({ theme }) => theme.colors.dividerColor};
    }
   }
   .banner-button{
    padding-top: 40px;
    display: flex;
    justify-content: center;
    button{
      color: #fff;
      .button-icon{
        border-color: ${({ theme }) => theme.colors.dangerColor};
      }
      &:hover{
        .button-icon{
          border-color: ${({ theme }) => theme.colors.primaryColor};
        }
      }
    }
   }
`

export default BannerWrapper;