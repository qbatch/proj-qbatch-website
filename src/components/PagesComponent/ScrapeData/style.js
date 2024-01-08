import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ScrapeData = styled.div`
  padding: 50px 80px;
  @media (max-width: 1200px) {
    padding: 50px 0px;
  }
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  ${media.sm`
   .arrow-img{
    display: none;
   }
  `}
  .data-process-section {
    margin-bottom: 122px;

    .heading-box {
      text-align: center;
      margin-bottom: 71px;
      h2 {
        color: ${({ theme }) => theme.colors.whiteColor};
      }
    }
    .add-gap {
      gap: 42px;
      @media (max-width: 1550px) {
        gap: 32px;
      }
    }
    .data-box {
      display: flex;
      gap: 16px;
      min-width: 312px;
      ${media.sm`
   min-width: 270px;
  `}
      align-items: center;
      .index {
        background-color: ${({ theme }) => theme.colors.primaryColor};
        width: 40px;
        height: 40px;
        color: ${({ theme }) => theme.colors.whiteColor};
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 8px;
      }
      .title {
        color: ${({ theme }) => theme.colors.whiteColor};
        font-weight: 400;
      }
    }
  }
  .techines-section {
    .heading-box {
      text-align: center;
      margin-bottom: 57px;
      h2 {
        color: ${({ theme }) => theme.colors.whiteColor};
      }
    }
    .add-gap {
      gap: 32px;
      margin-bottom: 32px;
      @media (max-width: 1550px) {
        gap: 14px;
      }
    }
    .techies-box {
      display: flex;
      gap: 12px;
      align-items: center;
      .index {
        background-color: ${({ theme }) => theme.colors.primaryColor};
        width: 40px;
        height: 40px;
        color: ${({ theme }) => theme.colors.whiteColor};
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 8px;
      }
      .title {
        color: ${({ theme }) => theme.colors.whiteColor};
        font-weight: 400;
        max-width: 233px;
        ${media.sm`
   min-width: 230px;
  `}
        letter-spacing: 0;
      }
    }
  }
`
export default ScrapeData;