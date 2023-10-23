import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const HelpWrapper = styled.div`
  padding: 73px 0 98px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  .add-top-space {
    margin-top: 74px;
  }
`
const Card = styled.div`
  border-radius: 24px 24px 0px 24px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border: 1px solid ${({ theme }) => theme.colors.dividerColor};
  min-height: 534px;
  margin-bottom:24px;
  img {
    width: 100%;
  }
  .title-box {
    padding: 24px 47px;

    h3 {
      line-height: 32px;
      margin-bottom: 18px;
      min-height: 64px;
    }
    p {
      color: ${({ theme }) => theme.colors.textMedium};
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      line-height: 24px;
    }
  }
`
export { HelpWrapper, Card }