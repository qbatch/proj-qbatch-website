import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const CollapseWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  margin-bottom: 19px;
  padding-bottom: 8px;
  &:last-child {
    margin-bottom: -2px;
  }
  &:has(.show) {
    .collapse-select {
      .title {
        color: ${({ theme }) => theme.colors.primaryColor};
      }
    }
  }
  .collapse-select {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
    .title {
      color: ${(props, theme) => (props.faqSection ? `#2D2F31` : '#7C8EA1')};
      font-weight: ${(props, theme) => (props.faqSection ? `600` : '')};
      letter-spacing: ${(props, theme) => (props.faqSection ? `0.20px` : '')};
      max-width: ${(props, theme) => (props.faqSection ? `800px` : '')};
      padding-right: 20px;
      line-height: 32px;
      margin-bottom: 8px;
    }
  }
  .collapse-content {
    margin-top: 16px;
  }
`
export default CollapseWrapper
