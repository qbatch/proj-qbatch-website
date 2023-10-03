import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const DedicatedDeveloperWrapper = styled.section`
  .image-portion {
    padding-top: 94px;
    padding-right: 12px;
    ${media.md`
     display: none;
  `}
  }

  .title-portion {
    padding: 158px 0px;
    ${media.md`
     padding: 100px 0;
     text-align: center;
    `}
    ${media.sm`
     padding: 50px 0px;
  `}
  }
  
  .hire {
    color: ${({ theme }) => theme.colors.textMedium};
    position: relative;
    margin-bottom: 6px;
    display: block;
    &::before {
      content: "";
      position: absolute;
      height: 1px;
      width: 24px;
      bottom: 1px;
      background-color: ${({ theme }) => theme.colors.dangerColor};
    }
  }
  .add-bottom-space {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.bodyTextVariant};
  }
  .for-furture {
    margin-right: -4px;
    color: ${({ theme }) => theme.colors.textMedium};
    ${media.sm`
        flex-direction: column;
    `}
  }
  .you-deserve {
    position: relative;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-left: -4px;
    ${media.sm`
        margin-left: 0;
    `}
    cursor: pointer;
    &::before {
      content: "";
      position: absolute;
      height: 1px;
      width: 0;
      bottom: 1px;
      left: 0px;
      background-color: ${({ theme }) => theme.colors.dangerColor};
      animation: animate 1s linear 1s 1 normal forwards;
    }
    @keyframes animate {
      from {
        width: 0px;
      }
      to {
        width: 100%;
      }
    }
  }
  .dedicated-row {
    margin-bottom: 118px;
    ${media.sm`
        margin-bottom: 50px;
    `}
  }
  .paragraph {
    color: ${({ theme }) => theme.colors.bodyLight};
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    margin-top: 35px;
    line-height: 24px;
    margin-bottom: 50px;
    max-width: 557px;
    ${media.md`
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 35px; 
    `}
    ${media.sm`
          max-width: 100%;
    `}
  }
  .add-space {
    display: flex;
    justify-content: center;
    margin-top: 37px;
    margin-bottom: 50px;
    ${media.md`
      margin-top: 0;
    `}
    ${media.sm`
          flex-direction: column;
  `}
    .divider-heading {
      position: relative;
      color: ${({ theme }) => theme.colors.bodyLight};
      font-weight: 400;
      margin: 0 33px 24px;
      ${media.md`
        margin: 0 16px 24px;
  `}

      &::after {
        content: "";
        position: absolute;
        height: 27px;
        width: 1px;
        bottom: 1px;
        right: -35px;
        background-color: ${({ theme }) => theme.colors.dividerColor};
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
export default DedicatedDeveloperWrapper;
