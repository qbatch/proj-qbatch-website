import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const DataDriven = styled.div`
  padding: 95px 0px;
  ${media.sm `
  padding: 56px 0px;
  `}
  .heading-box {
    margin-bottom: 71px;
    ${media.sm `
    margin-bottom: 48px;
    `}
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
    p {
      margin: 24px 0 0;
    }
  }
  a {
    margin-top: 48px;
    display: block;
  }
`
export default DataDriven;