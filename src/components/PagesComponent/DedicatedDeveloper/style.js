import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const DedicatedDeveloperWrapper = styled.section`
  padding: 96px 96px 52px;
  ${media.sm`
    padding: 72px 72px 52px;
  `}
  ${media.sm`
    padding: 52px 52px 30px;
  `}
  .image-portion {
    padding-left: 120px;
    ${media.sm`
     padding: 30px 0px;
     text-align: center;
     display: none;
  `}
  }

  .title-portion {
    padding: 62px 0px;
    ${media.sm`
     padding: 32px 0px;
  `}
  }
  .hire {
    color: ${({ theme }) => theme.colors.textMedium};
    position: relative;
    margin-bottom: 6px;
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
    margin-top: 36px;
    line-height: 24px;
    margin-bottom: 48px;
  }
  .add-space {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .divider-heading {
      position: relative;
      color: ${({ theme }) => theme.colors.bodyLight};
      font-weight: 400;
      margin: 0 33px 24px;
      &::after {
        content: "";
        position: absolute;
        height: 27px;
        width: 1px;
        bottom: 1px;
        right: -35px;
        background-color: ${({ theme }) => theme.colors.dividerColor};
        ${media.xs`
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
