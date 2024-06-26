import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const NextDevOpsProjectWrapper = styled.div`
padding: 96px 0 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
${media.sm`
    padding:56px 0;
  `}
.heading{
  margin-bottom: 96px;
  ${media.sm`
     margin-bottom:48px;
  `}
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
    ${media.sm`
    margin-bottom: 0px;
    width: 40%;
    img{
      height: 72px;
    }
  `}
    span{
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      color: ${({ theme }) => theme.colors.textMedium};
      min-height:50px;
      ${media.sm`
   font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
  `}
    }
  }
}
`

export default NextDevOpsProjectWrapper;