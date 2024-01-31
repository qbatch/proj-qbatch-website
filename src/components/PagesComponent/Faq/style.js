import styled from "styled-components";
import { media } from "../../../theme/media-mixins";
const FaqWrapper = styled.div`
  padding: 120px 0;
  max-width: 929px;
  margin: auto;
  ${media.sm`
     padding: 60px 0px;
  `}
  .faq-section{
    margin-top:106px;
    ${media.sm `
     margin-top: 70px;
    `}
  }
  .faq-content {
    color: ${({ theme }) => theme.colors.textMedium};
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    padding-bottom: 20px;
    line-height: 24px;
    span {
      display: block;
      &:first-child {
        margin-bottom: 12px;
      }
      &:nth-child(2) {
        margin-bottom: 4px;
      }
    }
    ul {
      list-style: disc;
      padding-left: 24px;
    }
  }
`;
export default FaqWrapper;
