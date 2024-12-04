import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const SolveLogisticsWrapper = styled.div`
  padding: 96px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor} ;
  .heading{
    margin-bottom: 24px;
  }
  .paragraph{
    margin-bottom: 32px;
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    line-height: 32px;
    &:nth-child(3) {
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    }
  }
  ${media.md`
    padding: 56px 0;
    .paragraph{
      font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
      line-height: 24px;
    }
  `}
  img {
    ${media.sm`
      height: auto;
    `}
  }
`

export default SolveLogisticsWrapper;
