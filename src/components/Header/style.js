import styled from "styled-components";

const HeaderWrapper = styled.div`
  .header {
    height: 81px;
    .header-main {
      width: 100%;
      padding: 24px 96px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
      background-color: ${({ theme }) => theme.colors.backgroundColor};
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: fixed;
      top: 0;
      z-index: 99;
      box-sizing: border-box;

      .header-menu {
        ul {
          display: flex;
          align-items: center;
          margin-bottom: 0;
          li {
            display: flex;
            gap: 8px;
            padding: 0 24px;
            color: ${({ theme }) => theme.colors.textMedium};
            cursor: pointer;
            position: relative;
            transition: all 0.5s ease-in-out;
            &::after {
              position: absolute;
              content: "";
              width: 1px;
              height: 16px;
              background-color: ${({ theme }) => theme.colors.dividerColor};
              right: 0;
            }
            &:last-child::after {
              width: 0px;
            }
            &:hover:before {
              content: "";
              position: absolute;
              left: 24px;
              bottom: 0;
              height: 1px;
              width: 20px;
              border-bottom: 1px solid
                ${({ theme }) => theme.colors.dangerColor};
              transition: all 0.5s ease-in-out;
            }
            &:hover {
              color: ${({ theme }) => theme.colors.primaryColor};
              font-weight: ${({ theme }) => theme.fontWeight.bold};
            }
          }
        }
      }
    }
    .menu-items {
      display: flex;
      align-items: center;
      gap: 48px;

      .burger-icon {
        width: 32px;
        height: 32px;
        position: relative;
        cursor: pointer;

        span {
          display: block;
          width: 100%;
          height: 2px;
          background-color: ${({ theme }) => theme.colors.textMedium};
          position: absolute;
          right: 0;
          transition: transform 0.3s ease;

          &:first-child {
            top: 5px;
          }
          &:nth-child(2) {
            top: 42%;
            transform: translateY(-50%);
          }
          &:last-child {
            bottom: 10px;
            width: 20px;
          }
        }
        &:hover {
          span {
            &:first-child {
              transform: translateY(0px);
              background-color: ${({ theme }) => theme.colors.primaryColor};
            }
            &:nth-child(2) {
              transform: translateY(6px);
              width: 20px;
              background-color: ${({ theme }) => theme.colors.dangerColor};
            }
            &:last-child {
              transform: translateY(-8px);
              width: 100%;
              background-color: ${({ theme }) => theme.colors.primaryColor};
            }
          }
        }
      }
    }
  }
`;

export default HeaderWrapper;
