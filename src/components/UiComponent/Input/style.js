import styled from "styled-components";
import Form from 'react-bootstrap/Form';

const Input = styled(Form)`
  .bottom-space {
    margin-bottom: ${(props) => (props.base ? `${props.base}` : "8px")};
  }
  .form-control {
    border: none;
    background-color: transparent;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-radius: 0px;
    padding-left: 0;
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    height: ${(props) => (props.height ? `${props.height}` : "65px")};
    &::placeholder {
      color: ${({ theme }) => theme.colors.bodyLight};
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    }
    &:focus {
      box-shadow: none;
    }
  }
`;
export default Input;