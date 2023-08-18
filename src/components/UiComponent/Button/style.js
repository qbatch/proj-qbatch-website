import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { media } from "../../../theme/media-mixins";

const ButtonWrapper = styled(Button)`
  display: flex;
  align-items: center;
  gap: 11px;
  color: ${({ theme }) => theme.colors.primaryColor};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 0;
  position: relative;
  white-space: nowrap;
  border: none;
  ${media.xs`
    font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
  `}
  &.header-btn {
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.whiteColor};
    background-color: ${({ theme }) => theme.colors.primaryColor};
    padding: 3px 3px 3px 16px;
    border-radius: 22px;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    gap: 16px;
    .button-icon {
      width: 24px;
      height: 24px;
      padding: 0;
      svg {
        fill: ${({ theme }) => theme.colors.dangerColor};
        left: 2px;
      }
    }
    &:hover {
      color: ${({ theme }) => theme.colors.whiteColor};
      &::after {
        width: 0;
      }
      .button-icon {
        border: 1px solid ${({ theme }) => theme.colors.whiteColor};
      }
    }
  }

  .button-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    padding: 4px;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.colors.dividerColor};
    transition: all 0.3s ease-in-out;

    div {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: flex;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.whiteColor};
      transition: left 0.3s ease-in-out, background-color 0.3s ease-in-out;
      position: relative;

      svg {
        fill: ${({ theme }) => theme.colors.textMedium};
        position: absolute;
        transition: left 0.3s ease-in-out;
        left: 2px;
      }
    }
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0px;
    background-color: ${({ theme }) => theme.colors.dangerColor};
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primaryColor};
    .button-icon {
      border: 1px solid ${({ theme }) => theme.colors.primaryColor};

      div {
        background-color: ${({ theme }) => theme.colors.dangerColor};
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          fill: ${({ theme }) => theme.colors.whiteColor};
          left: 7px;
        }
      }
    }
    &::after {
      width: 22px;
    }
  }
  &.secondary-btn {
      color:${({ theme }) => theme.colors.whiteColor};
      .button-icon {
        border-color: ${({ theme }) => theme.colors.dangerColor};
      }
      &:hover {
        .button-icon {
          border-color: ${({ theme }) => theme.colors.primaryColor};
        }
      }
    }
  
`;

export default ButtonWrapper;
