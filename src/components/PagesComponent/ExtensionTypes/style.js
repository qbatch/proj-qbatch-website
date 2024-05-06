import styled from "styled-components";
import { media } from "../../../theme/media-mixins";


const ExtensionTypeWrapper = styled.div`
padding: 96px 0;
${media.md`
  padding: 56px 0;
`}
.heading{
  padding-bottom: 24px;
  text-align: center;
  max-width: 768px;
  margin: auto;
  text-transform: none;
}
.paragraph{
  padding-bottom: 56px;
  text-align: center;
  max-width: 930px;
  margin: auto;
  ${media.md`
    padding-bottom: 20px;
  `}
}
.inner-box{
  padding: 32px;
  border-bottom: 1px solid #D2D9DC;
  height: 100%;
  ${media.md`
    padding: 24px 0;
  `}
  .inner-heading{
    text-transform: none;
  }
}
`

export default ExtensionTypeWrapper;