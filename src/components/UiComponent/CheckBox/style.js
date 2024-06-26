import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const CheckBoxWrapper = styled.div`
  .form-check-label {
    color: ${({ theme }) => theme.colors.bodyText};
    font-size: ${(props, theme) => (props.fontSize ? `${props.fontSize}` : "16px")};
    margin-left: ${(props) => (props.margin ? `${props.margin}` : "8px")};
    letter-spacing: 0.1px;
    text-align: left;
  }
  .form-check {
    margin-bottom: ${(props) => (props.base ? `${props.base}` : "11px")};
    ${media.xs`
      margin-bottom: 0;
    `}
  }
  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--form-background);
    width: ${(props) => (props.width ? `${props.width}` : "16px")};
    height: ${(props) => (props.height ? `${props.height}` : "16px")};
    border: 1px solid #ccc;
    border-radius: 0;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
    margin-top: 6px;
  }
  .form-check-input:focus {
    box-shadow: none;
  }
  .form-check-input:checked {
    border: 1px solid #0054a6;
  }
  input[type="checkbox"]::before {
    content: "";
    width: 8px;
    height: 6px;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    background-color: #0054a6;
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
    border: 1px solid #0054a6;
  }
`;
export default CheckBoxWrapper;
