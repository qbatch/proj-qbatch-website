import styled from "styled-components";
// import Form from 'react-bootstrap/Form';
import { media } from "../../../theme/media-mixins";

const Input = styled.div`
  .bottom-space {
    margin-bottom: ${(props) => (props.base ? `${props.base}` : "8px")};
  }
  .form-control {
    border: none;
    background-color: transparent;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-radius: 0px;
    padding-left: 0;
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    height: ${(props) => (props.height ? `${props.height}` : "60px")};
    letter-spacing: 0.19px;
    &::placeholder {
      color: ${({ theme }) => theme.colors.bodyLight};
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      text-transform:capitalize;
    }
    &:focus {
      box-shadow: none;
    }
    ${media.sm`
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    &::placeholder{
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
          text-transform:capitalize;
    }
    `}
  }
  .form-control:valid {
    background-image: none;
    border-color: ${({ theme }) => theme.colors.dividerColor};
    &:focus {
      box-shadow: none;
      border-color: ${({ theme }) => theme.colors.dividerColor};
    }
  }
  .error-text {
    color: ${({ theme }) => theme.colors.dangerColor};
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    text-align: left;
    line-height:24px;
}
   
`;
export default Input;
