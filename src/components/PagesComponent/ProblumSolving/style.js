import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ProblumSolvingWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 167px 0 155px;
  overflow:hidden;
  h2 {
    color: ${({ theme }) => theme.colors.whiteColor};
    font-weight: 400;
    line-height: 52px;
    position:relative;
    z-index: 2;
  }
  ${media.sm`
        .box-center{
            display:flex;
            justify-content: center;
        }
           
    `}
    .circle-bg{
      position:relative;
      z-index: 1;
      margin-left: 154px;
      width: 163px;
    height: 163px;
    ${media.md`
       margin-left: 0;
    `}
      &:after{
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
      transition: transform 2s ease-out 100ms;
      text {
        font-size: 7px;
      }
    }
    .red-arrow {
      font-size: 81px;
      color: ${({ theme }) => theme.colors.dangerColor};
      position: absolute;
      top: 40px;
      left: 36px;
      transition: transform 2s ease-out 100ms;
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.whiteColor};
      .text-svg {
        fill: ${({ theme }) => theme.colors.dangerColor};
        transform: rotateZ(82deg);
      }
      .red-arrow {
        transform: rotate(-56deg);
      }
    }
  }
`;
export default ProblumSolvingWrapper;