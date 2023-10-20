import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const BannerWrapper = styled.div`
  background-image: url("/abouUs-banner.svg");
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  background-position: 100% 0;
  background-repeat: no-repeat;
  padding: 132px 0 98px 0;

  ${media.sm`
    padding: 40px 0;
    background-position: bottom left;
  `}
  p{
  color: ${({ theme }) => theme.colors.whiteColor};
  font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
  line-height:32px; 
  max-width: 929px;
  margin-top: 24px; 
  letter-spacing: 0.2px;
  }
  .banner-headings{
    ${media.md`
      text-align: center;
    `}
    span {
      display: block;
    }
  }
  .banner-button{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button{
          margin-right: 116px;
          margin-top: 37px;
    }
    ${media.md`
      justify-content: center;
      button{
        margin-top: 20px;
        margin-right: 0;
      }
    `}
  }
`;
const H1 = styled.h1`
  font-size:96px;
  color: ${({ theme }) => theme.colors.whiteColor};
  line-height: 102px;
  margin-bottom: 0px;
  .color-change{
      color: ${({ theme }) => theme.colors.bodyLight};
  }
  ${media.lg`
    font-size: 80px;
    line-height: 86px;
  `}
  ${media.sm`
  font-size: 60px;
    line-height: 68px;
  `}
  ${media.xs`
  font-size: 48px;
    line-height: 52px;
  `}
`

export { BannerWrapper, H1 };
