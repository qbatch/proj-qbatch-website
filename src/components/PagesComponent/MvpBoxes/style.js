import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const MvpBoxesWrapper = styled.div`
padding: 96px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
${media.lg`
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
  ${media.lg`
    padding-bottom: 32px;
  `}
}
.inner-box{
  padding: 32px;
  border-bottom: 1px solid #D2D9DC;
  height: 100%;
  ${media.lg`
    padding: 16px 0;
  `}
  .inner-heading{
    text-transform: none;
  }
}
`

export default MvpBoxesWrapper;
