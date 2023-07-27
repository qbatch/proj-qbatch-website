import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ProblumSolvingWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 164px 0;
  padding-bottom: 157px;
  background-image: url("/problum-background.svg");
  background-repeat: no-repeat;
  background-position: 100% 0;
  h2 {
    color: ${({ theme }) => theme.colors.whiteColor};
    font-weight: 400;
    line-height: 52px;
  }
  ${media.sm`
        .box-center{
            display:flex;
            justify-content: center;
        }
           
    `}
  .circle-box {
    border: 1px solid ${({ theme }) => theme.colors.whiteColor};
    width: 163px;
    height: 163px;
    border-radius: 50%;
    margin-left: 154px;
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