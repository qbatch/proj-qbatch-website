import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const MakingIndustriesWrapper = styled.div`
  padding: 98px 0 72px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  background-image: url("/happily-making-bg.svg");
  background-size: cover;
  position: relative;
  &::before{
  content : '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: block;
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, rgba(246, 247, 250, 0.70) 0%, rgba(246, 247, 250, 0.60) 100%);
}
.industries-inner-wrapper{
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
      width: 28px;
      height: 28px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.5s ease-out 100ms;
      cursor: pointer;
      .arrow-right {
        font-size: 25px;
        margin-right: 2px;
        color: ${({ theme }) => theme.colors.dangerColor};
        margin-top: 3px;
        transition: font-size 0.5s ease-out 100ms;
      }
      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryColor};
        .arrow-right {
          color: ${({ theme }) => theme.colors.whiteColor};
          font-size: 16px;
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
