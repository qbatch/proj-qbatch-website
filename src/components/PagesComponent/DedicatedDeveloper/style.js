import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const DedicatedDeveloperWrapper = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  overflow: hidden;
  .home-banner-bg {
    position: absolute;
    right: 0;
    height: 100%;
  }
  .banner-h1 {
    font-size: 60px;
  }

  /* .image-portion {
    padding-top: 96px;
    padding-right: 12px;
    ${media.md`
     display: none;
  `}
  } */

  .title-portion {
    padding: 216px 0px 120px;
    max-width: 1170px;
    margin: auto;
    position: relative;
    z-index: 2;
    ${media.md`
     padding: 100px 0;
     text-align: center;
    `}
    ${media.sm`
     padding: 50px 0px;
  `}
  }

  .hire {
    color: white;
    font-size: 172px;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: red;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    letter-spacing: 0;
    margin-right: -15px;
    ${media.md`
      font-size: 120px;
      line-height: 120px;
      display: block;
    `}
    ${media.sm`
      font-size: 90px;
      line-height: 90px;
    `}
  }
  .for-furture {
    margin-left: 82px;
    margin-right: -4px;
    color: ${({ theme }) => theme.colors.whiteColor};
    text-transform: capitalize;
    letter-spacing: 0.3px;
    @media (min-width: 1200px){
      display: block;
    }
    ${media.lg`
       margin-left: 0;
    `}
    ${media.sm`
        flex-direction: column;
    `}
  }
  .you-deserve {
    position: relative;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.bodyLight};
    text-transform: capitalize;
    ${media.sm`
        margin-left: 0;
    `}
  }
  .dedicated-row {
    margin-bottom: 118px;
    ${media.sm`
        margin-bottom: 50px;
    `}
  }
  .paragraph {
    margin-left: 82px;
    font-size: 24px;
    margin-top: 27px;
    letter-spacing: 0.22px;
    line-height: 31px;
    margin-bottom: 73px;
    max-width: 924px;
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
  .add-space {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 50px;
    ${media.md`
      margin-top: 0;
    `}
    ${media.sm`
          flex-direction: column;
  `}
    .divider-heading {
      position: relative;
      color: ${({ theme }) => theme.colors.dividerColor};
      font-weight: 300;
      margin: 0 36px 22px;
      ${media.md`
        margin: 0 16px 22px;
  `}

      &::after {
        content: "";
        position: absolute;
        height: 6px;
        width: 6px;
        bottom: 0;
        right: -40px;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.colors.dangerColor} ;
        top: 11px;
        ${media.md`
          right: -15px;
  `}
        ${media.sm`
        display:none ;
         `}
      }
      &:last-child {
        &::after {
          display: none;
        }
      }
    }
  }
`;

const H1 = styled.h1`
  font-size: 60px;
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

export { DedicatedDeveloperWrapper, H1 };
