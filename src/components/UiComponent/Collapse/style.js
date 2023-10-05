import styled from "styled-components";

const CollpaseWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  margin-bottom: 19px;
  padding-bottom: 8px;
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
    margin-top: ${(props, theme) => (props.faqSection ? `35px` : "28px")};
    .title {
      color: ${(props, theme) => (props.faqSection ? `#2D2F31` : "#7C8EA1")};
      font-size: ${(props, theme) => (props.faqSection ? `24px` : "20px")};
      font-weight: ${(props, theme) => (props.faqSection ? `600` : "")};
      letter-spacing: ${(props, theme) => (props.faqSection ? `0.20px` : "")};
      max-width: ${(props, theme) => (props.faqSection ? `780px` : "")};
    }
  }
  .collpase-content {
    margin-top: 12px;
    margin-top: ${(props, theme) => (props.faqSection ? `25px` : "12px")};
  }
`;
export default CollpaseWrapper;
