import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { media } from "../../../theme/media-mixins";

const ButtonWrapper = styled(Button)`
  background-color: ${({ theme }) => theme.colors.highlightColor};
  border-radius: 50px;
  font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
  min-width: 162px;
  display: flex;
  font-weight: 700;
  align-items: center;
  gap: 34px;
  padding: 4px 4px 4px 24px;
  ${media.sm`
  gap: 12px;
  font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
  `}
  .button-icon {
    background-color: ${({ theme }) => theme.colors.whiteColor};
    width: 44px;
    height: 44px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${media.sm`
    width: 24px;
    height: 24px;
  `}
  svg{
    ${media.sm`
    width: 12px;
  `} 
  }
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.highlightColor};
  }
`
export default ButtonWrapper;