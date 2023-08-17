import styled from "styled-components";
import {Button} from 'react-bootstrap'
import { media } from "../../../theme/media-mixins";

const PrimaryButtonWrapper = styled(Button)`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  background-color: transparent;
  padding: 0;
  border: 0;
  color: ${(props, theme) => (props.color ? `${props.color}` : theme.colors.whiteColor)};
  &:hover {
    background-color: transparent;
    border: none;
  }
  &.btn:active {
    background-color: transparent;
    border: none;
  }
  .button-text {
    color: ${(props, theme) => (props.color ? `${props.color}` : theme.colors.whiteColor)};
    white-space: nowrap;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    transition: color 0.5s ease-out;
    ${media.lg`
              display: none;
            `}
    ${media.sm`
              display: block;
            `}
            ${media.xs`
              display: none;
            `}
  }
  img {
    transition: transform 0.5s ease-out;
    max-width: none;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.dangerColor};
    transition: all 0.5s ease-out;
    color: ${(props) => (props.color ? `${props.color}` : "#fff")};
  }
  &:hover {
    span {
      color: ${(props, theme) => (props.color ? `${props.color}` : theme.colors.whiteColor)};
    }
    &::before {
      width: ${(props) => (props.borderBottom ? `${props.borderBottom}` : "18px")};
    }
    img {
      transform: rotate(-45deg);
    }
  }
`;
export default PrimaryButtonWrapper;
