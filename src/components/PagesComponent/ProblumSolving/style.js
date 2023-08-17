import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ProblumSolvingWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 167px 0 155px;
  overflow: hidden;
  ${media.md`
   padding: 100px 0;
  `}

  h2 {
    color: ${({ theme }) => theme.colors.dividerColor};
    font-weight: 400;
    line-height: 52px;
    position: relative;
    z-index: 2;
    b {
      color: ${({ theme }) => theme.colors.whiteColor};
    }
  }
  ${media.sm`
        .box-center{
            display:flex;
            justify-content: center;
        }
           
    `}
  .circle-bg {
    position: relative;
    z-index: 1;
    margin-left: 154px;
    width: 163px;
    height: 163px;
    ${media.md`
       margin: auto;
    `}
    &:after {
      content: url("/problum-background.svg");
      position: absolute;
      right: -144%;
      bottom: -121%;
      z-index: -1;
      ${media.sm`
    bottom: -133%;
    `}
    }
  }
  .circle-box {
    border: 1px solid ${({ theme }) => theme.colors.whiteColor};
    width: 163px;
    height: 163px;
    border-radius: 50%;
    margin-top: 20px;
    ${media.md`
       margin-left: 0;
    `}

    cursor: pointer;
    transition: background-color 0.5s ease-out 100ms;
    position: relative;
    .text-svg {
      fill: ${({ theme }) => theme.colors.whiteColor};
      height: auto;
      max-width: 66vmin;
      transform-origin: center;
      width: 100%;
      transition: transform 0.5s ease-out 100ms;
      pointer-events: none;
      text {
        font-size: 7px;
      }
    }
    .red-arrow {
      font-size: 81px;
      color: ${({ theme }) => theme.colors.dangerColor};
      height: 50px;
      width: 62px;
      position: absolute;
      top: 55px;
      left: 48px;
      transition: transform 0.5s ease-out 100ms;
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.whiteColor};
      .text-svg {
        fill: ${({ theme }) => theme.colors.dangerColor};
        transform: rotateZ(82deg);
      }
      .red-arrow {
        transform: rotate(-45deg);
        filter: invert(18%) sepia(84%) saturate(2395%) hue-rotate(196deg) brightness(98%) contrast(101%);
      }
    }
  }
  &.contact-project-cost{
    background-color: #F2F3F5;
    padding: 188px 0;
    ${media.md`
   padding: 100px 0;
  `}
    .heading-break{
    max-width:90%;
    margin: 0;
  }
  .circle-bg {
    margin-left: 145px;
  }
  .circle-box {
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    margin-top: 0;
    .text-svg {
      fill: ${({ theme }) => theme.colors.primaryColor};
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryColor};
      .text-svg {
        fill: ${({ theme }) => theme.colors.whiteColor};
      }
      .red-arrow {
        filter:none;
      }
    }
  }
  }
`;
export default ProblumSolvingWrapper;
