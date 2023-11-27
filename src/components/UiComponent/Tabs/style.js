import styled from "styled-components";

const TabsWrapper = styled.div`
  .nav-tabs {
    border-bottom: none;
    display: flex;
    gap: 7px;
    margin-right: 72px;
    .nav-item {
      .nav-link {
        border: 1px solid ${({ theme }) => theme.colors.dividerColor};
        border-radius: 32px;
        background-color: ${({ theme }) => theme.colors.whiteColor};
        color: ${({ theme }) => theme.colors.textMedium};
        padding: 12px 20px;
        height: 48px;
        &.active {
          background-color: ${({ theme }) => theme.colors.primaryColor};
          color: ${({ theme }) => theme.colors.whiteColor};
          border-radius: 32px;
          border: 1px solid ${({ theme }) => theme.colors.primaryColor};
        }
      }
    }
  }
`;

export default TabsWrapper;
