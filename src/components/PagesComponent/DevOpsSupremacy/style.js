import styled from "styled-components";
import { media } from "../../../theme/media-mixins";
const DevOpsSupremacyWrapper = styled.div`
padding: 96px 0;
border-bottom: 1px solid  ${({ theme }) => theme.colors.dividerColor};
 ${media.sm`
    padding-bottom:0px;
  `}
.wrapper{
  max-width: 450px;
}
.heading{
  color:  ${({ theme }) => theme.colors.primaryColor};
  margin-bottom: 24px;
}
.paragraph{
  font-size: ${({ theme }) => theme.fonts.baseFontSize};
  line-height: 24px;
}
.counter-text-wrapper{
  display: flex;
  align-items: start;
  gap: 16px;
  padding-bottom: 32px;
  .counter-text{
    font-size: 48px;
    line-height: 68px;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    display: flex;
    align-items: end;
    gap: 8px;
    span:first-child{
      min-width:50px; 
      display: inline-block;
    }
    .counter-symbol{
      color: ${({ theme }) => theme.colors.dangerColor};
      font-weight: ${({ theme }) => theme.fontWeight.light};
      font-size: 36px;
      line-height: 68px;
    }
  }
  .counter-paragraph{
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    line-height: 32px;
    max-width: 450px;
  }
}
`

export default DevOpsSupremacyWrapper;