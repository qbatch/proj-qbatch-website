import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const DevOpsBoxesWrapper = styled.div`
padding: 96px 0;
background: url('/devOps-boxes-bg.svg');
border-bottom: 2px solid ${({ theme }) => theme.colors.dividerColor};
& > div{
  max-width: 80%;
  margin: auto;
  ${media.xl`
    max-width: 100%;
  `}
}
.box{
  border-radius: 24px 24px 0 24px;
  border: 1px solid  ${({ theme }) => theme.colors.dividerColor};
  padding: 32px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  box-shadow: 2px 2px 12px 0px #00000029;
  .box-text{
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    text-align: center;
    font-size: 48px;
    span{
      font-size:  ${({ theme }) => theme.fonts.baseFontSizeSm};
      font-weight:  ${({ theme }) => theme.fontWeight.normal};
      max-width: 270px;
      margin: auto;
    }
  }
}
`

export default DevOpsBoxesWrapper;