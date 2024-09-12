import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const HealthcareAppDevelopmentWrapper = styled.div`
padding: 96px 0;
border-bottom:1px solid ${({ theme }) => theme.colors.dividerColor};
${media.sm`
  padding: 40px 0px;
`}
h2{
font-size: 40px;
font-weight: 700;
line-height: 52px;
text-align: center;
color: ${({ theme }) => theme.colors.primaryColor};
margin: 0;
margin-bottom: 24px;
${media.lg`
    font-size: 32px;
    font-weight: 700;
      `}
      ${media.sm`
        font-size: 24px;
        line-height: 32px;
      `}
      ${media.mobile`
            text-align:left;
            `}
}
p{
font-size: 20px;
font-weight: 400;
line-height: 32px;
text-align: center;
color: #5F737C;
margin: 0;
${media.lg`
    font-size: 16px;
    line-height: 24px;

      `}
      ${media.sm`
        font-size: 14px;
        line-height: 20px;
      `}
      ${media.mobile`
            text-align:left;
            `}
}
.cards{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  margin-top: 72px;
  ${media.lg`
    grid-gap: 16px;
      `}
      ${media.md`
        grid-template-columns: 1fr 1fr;
      `}
      ${media.sm`
        margin-top: 32px;
      `}
      ${media.mobile`
        grid-template-columns: 1fr;
        display: none;
      `}
}
.card-for-mobile{
  display:none;
  ${media.mobile`
    margin-top: 32px;
        display: block;
        margin-bottom: 32px;
      `}
.card{
  ${media.mobile`
  min-height: 370px;
      `}
}

}
.card{
  width: 100%;
  border: 1px solid #D2D9DC;
  border-radius: 24px 24px 0px 24px;
  background-color: #fff;
  padding: 32px;
  ${media.lg`
    padding: 24px;
      `}
      ${media.md`
        padding: 16px;
      `}
  img{
    width: 64px;
  }
  h3{
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  text-align: left;
  color: ${({ theme }) => theme.colors.primaryColor};
  margin: 0;
  margin-top: 24px;
  ${media.lg`
    font-size: 20px;
      `}
  }
  ul{
    padding: 0;
    display: flex;
    flex-direction: column;
    grid-row-gap:8px;
    margin-top: 16px;
    li{
      display: flex;
      grid-gap: 6px;
      img{
       width: 24px;
      } 
      p{
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      text-align: left;
      color: #2D2F31;
      margin: 0;
      ${media.lg`
        font-size: 14px;
      `}
      }
    }
  }
}
.slick-dots {
  bottom: -44px;
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
export { HealthcareAppDevelopmentWrapper }