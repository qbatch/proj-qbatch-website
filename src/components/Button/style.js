import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  color: ${({ theme }) => theme.colors.primaryColor};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border: none;
  background-color: transparent;
  cursor: pointer;
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
    height: 1px;
    width: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dangerColor};
    transition: all 0.5s ease-in-out;
  }
`;

export default ButtonWrapper;
