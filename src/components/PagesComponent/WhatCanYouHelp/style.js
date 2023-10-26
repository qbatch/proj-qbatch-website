import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const HelpWrapper = styled.div`
  padding: 73px 0 98px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 60px 0;
  `}
  .add-top-space {
    margin-top: 74px;
  }
  h2 {
    ${media.sm`
      text-align: center;
    `}
  }
`
const Card = styled.div`
  border-radius: 24px 24px 0px 24px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border: 1px solid ${({ theme }) => theme.colors.dividerColor};
  min-height: 534px;
  margin-bottom:24px;
  ${media.sm`
    min-height: auto;
    `}
  img {
    width: 100%;
  }
  .title-box {
    padding: 24px 47px;

    h3 {
      line-height: 32px;
      margin-bottom: 18px;
      min-height: 64px;
      ${media.sm`
        min-height: auto;
        line-height: 28px;
      `}
    }
    p {
      color: ${({ theme }) => theme.colors.textMedium};
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      line-height: 24px;
    }
  }
`
export { HelpWrapper, Card }