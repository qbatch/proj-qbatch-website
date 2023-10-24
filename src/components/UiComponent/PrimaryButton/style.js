import styled from "styled-components";
import {Button} from 'react-bootstrap'

const PrimaryButtonWrapper = styled(Button)`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  background-color: transparent;
  padding: 0;
  border: 0;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  min-width: auto;
  .btn-text {
    color: ${({ theme }) =>
      (props) =>
        props.color ? `${props.color}` : theme.colors.primaryColor};
    white-space: nowrap;
  }
  &:hover {
    color: ${({ theme }) =>
      (props) =>
        props.color ? `${props.color}` : theme.colors.primaryColor};
    background-color: transparent;
    border: none;
  }
  &.btn:active {
    background-color: transparent;
    border: none;
    color: ${({ theme }) =>
      (props) =>
        props.color ? `${props.color}` : theme.colors.primaryColor};
  }
  img {
    transition: transform 0.5s ease-out;
    max-width: none;
  }
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.dangerColor};
    transition: all 0.5s ease-out;
  }
  &:hover {
    &::before {
      width: ${({ theme }) =>
        (props) =>
          props.borderBottom ? `${props.borderBottom}` : '0px'};
    }
    img {
      transform: rotate(-45deg);
    }
  }
`
export default PrimaryButtonWrapper;
