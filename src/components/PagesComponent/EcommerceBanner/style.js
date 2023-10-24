import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ECommerceBannerWrapper = styled.section`
  padding: 125px 0 100px;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  ${media.md`
    padding: 100px 0;
  `}
  .title-portion {
    max-width: 1170px;
    margin: auto;
    position: relative;
    z-index: 2;
    ${media.md`
     text-align: center;
    `}
  }
  .sub-heading {
    font-size: 24px;
    margin-left: 2px;
    letter-spacing: 0;
    margin-bottom: 38px;
    color: ${({ theme }) => theme.colors.whiteColor};
    ${media.md`
      margin-bottom: 0;
    `}
  }
  .bigger {
    color: white;
    font-size: 130px;
    margin-right: 12px;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: red;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    letter-spacing: 0;
    ${media.lg`
      display: block;
      margin-bottom: 24px;
    `}
    ${media.md`
    margin-bottom: 0;
      font-size: 120px;
      line-height: 120px;
      display: block;
    `}
    ${media.sm`
      font-size: 90px;
      line-height: 90px;
    `}
    ${media.xs`
      font-size: 64px;
      line-height: 64px;
    `}
  }
  .banner-img {
    margin: 2px 0 17px;
    width: 100%;
    ${media.lg`
      margin: 10px 0 0;
    `}
    ${media.md`

    min-height:84px;
    object-fit: cover
    `}
  }
  .overlay-text {
    top: -74px;
    font-weight: 700;
    position: absolute;
    right: 0;
    font-size: 47px;
    color: ${({ theme }) => theme.colors.primaryColor};
    ${media.lg`
      position: relative;
      top: 0;
      color: ${({ theme }) => theme.colors.whiteColor};
      font-size: 40px;
      display: flex;
      justify-content: end;
    `}
    ${media.md`
      justify-content: center;
      font-weight: 700;
    `}
  }
  .paragraph {
    font-size: 24px;
    letter-spacing: 0.22px;
    line-height: 32px;
    margin-bottom: 22px;
    max-width: 777px;
    color: ${({ theme }) => theme.colors.whiteColor};
    ${media.lg`
      margin-left: 4px;
    `}
    ${media.md`
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 35px;
      font-size: 16px;
      line-height: 24px; 
      margin-top: 12px;

    `}
    ${media.sm`
          max-width: 100%;
    `}
  }
  .button-wrapper{
    display: flex;
    justify-content: end;
    ${media.md`
      justify-content: center;
    `}
  }
`;

const H1 = styled.h1`
  font-size: 53px;
  margin-bottom: 0px;
  color: ${({ theme }) => theme.colors.whiteColor};
  line-height: 60px;
  &.color-change {
    color: ${({ theme }) => theme.colors.bodyLight};
  }
  ${media.md`
    font-size: 40px;
    line-height: 46px;
  `}
`;

export { ECommerceBannerWrapper, H1 };
