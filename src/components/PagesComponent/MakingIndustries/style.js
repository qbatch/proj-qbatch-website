import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const MakingIndustriesWrapper = styled.div`
  padding: 121px 0 120px;
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
    background: linear-gradient(
      180deg,
      rgba(246, 247, 250, 0.7) 0%,
      rgba(246, 247, 250, 0.6) 100%
    );
  }
  .industries-inner-wrapper {
    position: relative;
    z-index: 2;
  }
  ${media.sm`
    padding: 40px 0;
  `}
  .heading {
    margin-bottom: 24px;
  }
  p {
    color: ${({ theme }) => theme.colors.textMedium};
    max-width: 771px;
    margin: 0 auto;
    letter-spacing: 0.19px;
  }
  .arrow-section {
    margin-top: 72px;
    h3 {
      margin-top: 4px;
      text-transform: inherit;
      letter-spacing: 0;
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

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;
export default MakingIndustriesWrapper;
