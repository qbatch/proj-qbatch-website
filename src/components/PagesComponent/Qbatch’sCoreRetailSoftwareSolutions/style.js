import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const QbatchCoreRetailSoftwareSolutionsWrapper = styled.div`
padding: 96px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
${media.sm`
padding: 40px 0;
`}
h2{
  color: #0054A6;
  text-align: center;
  margin:0;
  margin-bottom:24px;
  ${media.sm`
  text-align:left;
    `}
}
p{
font-size: 20px;
font-weight: 400;
line-height: 32px;
text-align: center;
margin:0;
color: #5F737C;
${media.sm`
  text-align:left;
  font-size: 14px;
  line-height: 24px;
    `}
}
.mobile-responsive{
  display: none;
  ${media.mobile`
  display:block;
  margin-top:32px;
  padding-bottom: 16px;
    `}
  .card-item{
    border: 1px solid #D2D9DC;
    background-color: #fff;
    border-radius: 24px 24px 0px 24px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    grid-row-gap: 24px;
    ${media.sm`
      padding: 16px;
      `}
    h3{
      color: #0054A6;
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      text-align: left;
      margin: 0px;
      margin-bottom:12px;
      ${media.mobile`
          font-size: 16px;
        line-height: 24px;
          `}
    }
    .custom-h3{
      color: #0054A6;
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      text-align: left;
      margin: 0px;
      margin-bottom:12px;
      ${media.mobile`
          font-size: 16px;
        line-height: 24px;
          `}
    }
    ul{
      display: flex;
      flex-direction: column;
      grid-row-gap: 8px;
      padding-left: 16px;
      li{
        list-style: disc;
        font-size: 16px;
        font-weight: 500;
        line-height: 32px;
        text-align: left;
        color: #2D2F31;
        ${media.mobile`
          font-size: 12px;
        font-weight: 500;
        line-height: 16px;
          `}
      }
    }
  }
}
.cards-wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px 24px;
  margin-top: 72px;
  ${media.lg`
    grid-template-columns: 1fr 1fr;
    `}
  ${media.sm`
    grid-template-columns: 1fr;
    `}
    display: grid;
  ${media.mobile`
  display:none;
    `}
  .card-item{
    border: 1px solid #D2D9DC;
    background-color: #fff;
    border-radius: 24px 24px 0px 24px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    grid-row-gap: 24px;
    ${media.sm`
      padding: 16px;
      `}
    h3{
      color: ${({ theme }) => theme.colors.primaryColor};
      font-weight: 700;
      text-align: left;
      margin: 0px;
    }
    ul{
      display: flex;
      flex-direction: column;
      grid-row-gap: 8px;
      padding-left: 16px;
      li{
        list-style: disc;
        font-size: 16px;
        font-weight: 500;
        line-height: 32px;
        text-align: left;
        color: #2D2F31;
      }
    }
  }
}
.button-wrapper{
  margin:auto;
  margin-top:73px;
  ${media.mobile`
  margin-top:36px;
    `}
}
.slick-dots {
  bottom:-40px;
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

export { QbatchCoreRetailSoftwareSolutionsWrapper }
