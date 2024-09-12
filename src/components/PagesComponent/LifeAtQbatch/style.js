import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const LifeAtQbatchWrapper = styled.div`
padding: 96px 0px;
border-bottom:1px solid ${({ theme }) => theme.colors.dividerColor};
${media.sm`
  padding: 40px 0px;
`}
h2{
font-size: 40px;
font-weight: 700;
line-height: 52px;
text-align: center;
color: ${({ theme }) => theme.colors.primaryColor};;
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
color: #667176;
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
.slider-wrapper{
  margin-top:72px;
  &.web-base{
    display: block;
    ${media.sm`
      display: none;
    `}
  }
  &.mobile-base{
    display: none;
    ${media.sm`
      display: block;
    `}
  }
  ${media.sm`
    margin-top:32px;
    margin-bottom:40px ;
    `}

}
.slick-dots {
  bottom: -48px;
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
export { LifeAtQbatchWrapper }
