import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const TravelAppSolutionsForYourPurposesWrapper = styled.div`
padding: 96px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
${media.sm`
  padding: 40px 0;
`}
h2{
  color:#0054A6;
  margin:0;
  text-align:center;
  ${media.sm`
    text-align:left;
    `}
}
p{
font-size: 20px;
font-weight: 400;
line-height: 32px;
text-align: center;
color:#5F737C;
margin:0;
margin-top:24px;
margin-bottom: 72px;
${media.sm`
    text-align:left;
    font-size:14px;
    line-height:24px;
    margin-bottom: 32px;
    `}
}
section{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px 24px;
  .card-item {
    padding: 24px;
    background: #fff;
    border: 1px solid #D2D9DC;
    border-radius: 24px 24px 0px;
    position: relative;
    h3{
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    text-align: left;
    color: #2D2F31;
    }
    .card-child {
    display: flex;
    img{
      position: absolute;
      right: 0;
      bottom: 0;
    }
    ul{
      display: flex;
      flex-direction: column;
      grid-row-gap: 8px;
      padding-left: 16px;
      max-width: 440px;
      li{
        font-size: 16px;
        font-weight: 500;
        line-height: 32px;
        text-align: left;
        color: #5F737C;
        list-style: disc;
      }
    }
  }
}
}
.card-item {
    padding: 24px;
    background: #fff;
    border: 1px solid #D2D9DC;
    border-radius: 24px 24px 0px;
    position: relative;
    ${media.sm`
    padding: 16px;
      `}
    h3{
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    text-align: left;
    color: #2D2F31;
    ${media.sm`
    line-height: 24px;
    font-size: 16px;
      color: #0054A6;
      `}
    }
    .card-child {
    display: flex;
    img{
      position: absolute;
      right: 0;
      bottom: 0;
      ${media.customBrakePoint`
          display: none;
          `}
    }
    ul{
      display: flex;
      flex-direction: column;
      grid-row-gap: 8px;
      padding-left: 16px;
      max-width: 440px;
      ${media.sm`
        grid-row-gap: 4px;
      `}
      li{
        font-size: 16px;
        font-weight: 500;
        line-height: 32px;
        text-align: left;
        color: #5F737C;
        list-style: disc;
        @media (max-width: 1476px) {
          max-width: 300px;
        }
        ${media.customBrakePoint`
          max-width: 100%;
          `}
        ${media.sm`
        line-height: 16px;
        font-size: 12px;
      `}
      }
    }
  }
}
.web-base{
  display:block;
  ${media.sm`
  display:none;
    `}
}
.mobile-base{
  display:none;
  ${media.sm`
  display:block;
    `}
}
.slick-dots {
    li {
      margin: 0px;
      &.slick-active {
        margin-right: 24px;
        button {
          &::before {
            background-color: ${({ theme }) => theme.colors.primaryColor};
            width: 32px;
            height: 8px;
            border-radius: 50px;
            opacity: 1;
            color:transparent;
          }
        }
      }
      button {
        &::before {
          background-color: ${({ theme }) => theme.colors.dividerColor};
          height: 8px;
          width: 8px;
          border-radius: 50px;
          opacity: 1;
          color: transparent;
        }
      }
    }
  }
`;

export { TravelAppSolutionsForYourPurposesWrapper }