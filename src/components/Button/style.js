import styled from "styled-components";
import Button from 'react-bootstrap/Button';

const ButtonWrapper = styled(Button)`
  display: flex;
  align-items: center;
  gap: 11px;
  color: ${({ theme }) => theme.colors.primaryColor};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 0;
  position: relative;

  .button-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    padding: 4px;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.colors.dividerColor};
    transition: all 0.5s ease-in-out;

    div {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.whiteColor};
      transition: all 0.5s ease-in-out;

      svg {
        fill: ${({ theme }) => theme.colors.textMedium};
      }
    }
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
        }
      }
    }
  }
  &:hover:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 18px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.dangerColor};
    transition: all 0.5s ease-in-out;
  }
`;

export default ButtonWrapper;
