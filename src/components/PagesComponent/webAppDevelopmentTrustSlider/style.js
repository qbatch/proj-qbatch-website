import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const SliderComponentWrapper = styled.div`
button{
  margin: auto;
  margin-bottom: 96px;
  ${media.sm`
  margin-bottom: 56px;
  `}
}

`;
export { SliderComponentWrapper }