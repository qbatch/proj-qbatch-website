import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const NextDevOpsProjectWrapper = styled.div`
padding: 96px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
.heading{
  margin-bottom: 96px;
}
.boxes{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  ${media.md`
  gap: 24px;
  `}
  .box{
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 24px;
    margin-bottom: 72px;
    img{
      height: 114px;
    }
    span{
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      color: ${({ theme }) => theme.colors.textMedium};;
    }
  }
}
`

export default NextDevOpsProjectWrapper;