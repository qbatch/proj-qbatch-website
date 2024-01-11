import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const DataDriven = styled.div`
  padding: 95px 0px;
  .heading-box {
    margin-bottom: 71px;
  }
  .images-box {
    .d-flex {
      padding: 0 60px;
      margin-bottom: 24px;
      ${media.lg`
             padding: 0 20px;
      `}
      ${media.md`
            padding: 0  ;
      `}
    }
    h4 {
      margin-top: 26px;
      text-align: center;
    }
  }
  a {
    margin-top: 50px;
    text-decoration: underline;
    font-size: 20px;
    font-style: italic;
  }
`
export default DataDriven;