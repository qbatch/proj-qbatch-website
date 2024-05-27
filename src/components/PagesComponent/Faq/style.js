import styled from "styled-components";
import { media } from "../../../theme/media-mixins";
const FaqWrapper = styled.div`
  padding: 96px 0;
  max-width: 929px;
  margin: auto;

.load-more-btn{
  margin-top: 72px;
}
  ${media.sm`
     padding: 56px 0px;
  `}
  .faq-section{
    margin-top:96px;
    ${media.sm`
     margin-top: 48px;
    `}
  }
  .hire-developer-faq p {
    font-size: 16px;
    margin-top: 8px;
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
      margin-bottom: 12px;
    }
  }
`;
export default FaqWrapper;
