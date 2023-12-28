import styled from "styled-components";
import Button from "react-bootstrap/Button";

const ButtonWrapper = styled(Button)`
  background-color: ${({ theme }) => theme.colors.highlightColor};
  border-radius: 50px;
  font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
  min-width: 162px;
  display: flex;
  font-weight: 600;
  align-items: center;
  gap: 34px;
  padding: 4px 4px 4px 24px;
  .button-icon {
    background-color: ${({ theme }) => theme.colors.whiteColor};
    width: 44px;
    height: 44px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.highlightColor};
  }
`
export default ButtonWrapper;