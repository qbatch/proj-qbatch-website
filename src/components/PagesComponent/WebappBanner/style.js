import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const WebappBanenrWrapper = styled.div`
background-color: ${({ theme }) => theme.colors.secondaryColor};
padding: 120px 0 70px;
.banner-content{
    max-width: 100%;
    ${media.sm`
     text-align: center;
    `}
    .sub-heading{
      color: ${({ theme }) => theme.colors.whiteColor};
      font-weight:  ${({ theme }) => theme.fontWeight.semiBold};
      letter-spacing: 0.64px;
      margin-bottom: 18px;
      ${media.md`
      font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
    `}
      ${media.sm`
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
    `}
    }
    .banner-inner-wrapper{
      display: flex;
      justify-content: left;
      .img-wrapper{
        width: 100%;
        margin-left: -184px;
        margin-top: 86px;
      }
      ${media.lg`
        display: block;
        .img-wrapper{
          margin-left: 0;
          margin-top: 0;
        }
      `}
    }
    .text-wrapper{
      min-width: 72%;
      
    }
  .heading{
    font-size: 96px;
    padding-bottom: 24px;
    ${media.lg`
      font-size: ${({ theme }) => theme.fonts.baseFontSizeH1};
    `};
    ${media.md`
      font-size: ${({ theme }) => theme.fonts.baseFontSizeH2};
    `}
    ${media.sm`
      font-size: ${({ theme }) => theme.fonts.baseFontSizeH2};
    `}
  }
  .paragraph{
    max-width: 608px;
    font-weight:  ${({ theme }) => theme.fontWeight.light};
    color: ${({ theme }) => theme.colors.bodyLight};
    letter-spacing: 0.7px;
    line-height: 32px;
    padding-bottom: 98px;
    font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
    ${media.lg`
        padding-bottom: 40px;
      `}
    ${media.sm`
      line-height: 28px;

    margin: auto;
    `}
  }
}
.secondary-btn {
  margin-right: 71px;
}
`;
export default WebappBanenrWrapper;

