import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const SaasDevProcessWrapper = styled.div`
position: relative;
padding: 96px 0;
overflow: hidden;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor} ;

.heading{
  max-width: 502px;
  .underline{
    position: relative;
    &::after{
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.highlightColor};
      height: 4px;
      left: 0;
    }
  }
}
.diagram-img{
  width: 100%;
  position: relative;
  margin-top: -96px;
}
.diagram-bg{
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: auto;
  z-index: -1;
  padding-top: 96px;
}
${media.lg`
.heading{
  max-width: 330px;
}
  .diagram-img{
    margin-top: -56px;
  }
`}
${media.md`
  .diagram-img{
    padding-top: 48px;
    margin-top: 0;
    max-width: 576px;
    margin: auto;
  }
  .diagram-bg{
    width: 100%;
    height: auto;
    top: 50%;
  }
`}
`

export default SaasDevProcessWrapper;
