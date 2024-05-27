import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const CollpaseWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  margin-bottom: 19px;
  padding-bottom: 8px;
  &:last-child{
    margin-bottom: -2px;
  }
  &:has(.show) {
    .collpase-select {
      .title {
        color: ${({ theme }) => theme.colors.primaryColor};
      }
    }
  }
  .collpase-select {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
    .title {
      color: ${(props, theme) => (props.faqSection ? `#2D2F31` : "#667176")};
      font-weight: ${(props, theme) => (props.faqSection ? `700` : "")};
      max-width: ${(props, theme) => (props.faqSection ? `850px` : "")};
      font-size: ${(props, theme) => (props.faqSection ? "20px" : "")};
      padding-right: 20px;
      cursor: pointer;
      line-height: 32px;
      margin-bottom: 8px;
      text-transform:none;
      ${media.sm`
        font-size: ${(props, theme) => (props.faqSection ? "16px" : "")};
        line-height:24px;
      `}
    }
    svg {
      min-width: 24px;
    }
  }
  .collpase-content {
    margin-top: 16px;
  }
`;
export default CollpaseWrapper;
