import styled from "styled-components";

const CollpaseWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  margin-bottom: 20px;
  padding-bottom: 12px;
  .collpase-select {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 28px;
    .title {
      color: ${({ theme }) => theme.colors.bodyLight};
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    }
  }
`;
export default CollpaseWrapper;