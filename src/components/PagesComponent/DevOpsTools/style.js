import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const DevOpsToolsWrapper = styled.div`
padding: 96px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
${media.sm`
    padding:30px 0;
  `}
.heading{
  text-align: center;
  margin-bottom: 72px;
}
.dev-ops-tools{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 72px;
  gap: 24px;
  justify-content: space-around;
  .tool-box{
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    text-align: center;
    max-width: 220px;
    width: 100%;
    margin-bottom: 72px;
    ${media.sm`
        margin-bottom: 12px;
  `}
    img{
      height: 60px;
      width: auto;
    }
    span{
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      color: ${({ theme }) => theme.colors.textMedium};;
    }
  }
}
`

export default DevOpsToolsWrapper;