import styled from "styled-components";

const StagesWrapper = styled.div`
  background-color:  ${({ theme }) => theme.colors.backgroundColor};
  padding: 96px 0;
  .stages-header {
    text-align: center;
    max-width: 811px;
    margin: 0 auto;
    margin-bottom: 72px;
    h2 {
      color: ${({ theme }) => theme.colors.primaryColor};
      text-align: center;
      font-size: 40px;
      font-weight: 700;
      line-height: 52px;
      margin-bottom: 24px;
    }
    p {
      color: ${({ theme }) => theme.colors.textMedium};
      text-align: center;
      font-size: 20px;
      font-weight: 400;
      line-height: 32px;
    }
  }
  .fixed-slider-pagination {
    padding-left: 63px;
    @media screen and (max-width: 1400px) {
      padding-left: 0;
    }
    ul {
      padding-left: 0;
    }
    li {
      margin-bottom: 24px;
      padding-left: 20px;
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      font-size: 20px;
      font-weight: 400;
      line-height: 32px;
      position: relative;
      @media screen and (max-width:1199px){
        font-size:16px;
        line-height:24px;
      }
      cursor: pointer;
      &:before {
        width: 8px;
        height: 8px;
        left: 0;
        display: inline-block;
        border-radius: 12px;
        border: 1px solid ${({ theme }) => theme.colors.dangerColor};
        background: #fff;
        content: "";
        top: 12px;
        position: absolute;
        @media screen and (max-width:1199px){
            top: 8px;
        }
      }
      &:after {
        width: 1px;
        height: 38px;
        content: "";
        position: absolute;
        left: 3.5px;
        top: 25px;
        background: #d2d9dc;
        @media screen and (max-width:1199px){
            top: 20px;
            height: 30px;
        }
      }
      &:last-of-type {
        &:after {
          display: none;
        }
      }
      &.active {
        font-size: 24px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primaryColor};
        @media screen and (max-width:1199px){
            font-size:20px;
            line-height:24px;
        }
        &:before {
          background: ${({ theme }) => theme.colors.dangerColor};;
        }
      }
    }
  }
  .slider-section {
    .slider-item {
      .title {
        h3 {
          color: ${({ theme }) => theme.colors.bodyTextVariant};
          font-size: 32px;
          font-weight: 600;
          line-height: 40px;
          letter-spacing: 0.64px;
          margin-bottom: 16px;
        }
      }
      .content {
        color: ${({ theme }) => theme.colors.textMedium};;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        padding-right: 35px;
        @media screen and (max-width:1199px){
            padding-right:0;
        }
        ul {
          margin-top: 24px;
          list-style: disc;
          padding-left: 24px;
        }
      }
    }
    .slider-column {
      margin-left: -21px;
    }
    .slider-column-text {
      padding-left: 5px;
    }
    /* .fixed-slider-column{
        @media screen and (max-width:991px){
            position:fixed;
            right:0;
        }
    } */
  }
`;
export default StagesWrapper;
