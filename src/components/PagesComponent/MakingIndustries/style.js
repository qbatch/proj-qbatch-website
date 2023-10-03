import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const MakingIndustriesWrapper = styled.div`
  padding: 97px 0 73px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  background-image: url("/happily-making-bg.svg");
  background-size: cover;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: block;
    height: 100%;
    width: 100%;
    background: linear-gradient(180deg, rgba(246, 247, 250, 0.7) 0%, rgba(246, 247, 250, 0.6) 100%);
  }
  .industries-inner-wrapper {
    position: relative;
    z-index: 2;
  }
  ${media.sm`
    padding: 40px 0;
  `}
  h1 {
    margin-bottom: 24px;
  }
  p {
    color: ${({ theme }) => theme.colors.textMedium};
    line-height: 32px;
    max-width: 771px;
    margin: 0 auto;
  }
  .arrow-section {
    margin-top: 72px;
    margin-bottom: 23px;
    h4 {
      margin-top: 4px;
    }
    .arrow-box {
      width: 34px;
      height: 34px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background-color 0.3s ease-out 100ms;
      svg {
        color: ${({ theme }) => theme.colors.dangerColor};
        width: 24px;
        pointer-events: none;
        transition: width 0.3s ease-out 100ms, color 0.3s ease-out 100ms;
      }
      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryColor};
        svg {
          width: 18px;
          color: ${({ theme }) => theme.colors.whiteColor};
        }
      }
    }
    .arrow-box-section {
      border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
      margin-bottom: 23px;
    }
  }
`;
export default MakingIndustriesWrapper;
