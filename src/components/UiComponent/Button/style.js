import styled from "styled-components";
import Button from "react-bootstrap/Button";

const ButtonWrapper = styled(Button)`
  display: flex;
  align-items: center;
  gap: 11px;
  color: ${({ theme }) => theme.colors.primaryColor};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 0;
  position: relative;
  white-space: nowrap;

  .button-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    padding: 4px;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.colors.dividerColor};
    transition: all 0.3s ease-in-out;

    div {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.whiteColor};
      transition: left 0.3s ease-in-out;
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
`;

export default ButtonWrapper;
