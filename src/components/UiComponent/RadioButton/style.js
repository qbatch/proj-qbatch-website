import styled from "styled-components";

const RadioWrapper = styled.div`
  .form-check-label {
    color: ${({ theme }) => theme.colors.textMedium};
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
  }
  .form-check-input {
    &:checked {
      background-color: ${({ theme }) => theme.colors.primaryColor};
      border-color: ${({ theme }) => theme.colors.primaryColor};
    };
    &:valid:checked {
      background-color: ${({ theme }) => theme.colors.primaryColor};
      border-color: ${({ theme }) => theme.colors.primaryColor};
    }
    &:focus{
      box-shadow:none;
    }
  }
`;
export default RadioWrapper;