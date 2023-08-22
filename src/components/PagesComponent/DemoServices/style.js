import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const DemoServiceWrapper = styled.div`
.wrapper{
  display: flex;
  transition: transform 0.3s;
  .column{
  min-width: 33.33%;
  padding: 10px;
  position: relative;
  transition: 0.3s;
  &:hover{
    min-width: 66.66%;
  }
  .column-inner{
    background-color: silver;
    padding: 10px;
  }
}
}
`

export default DemoServiceWrapper
