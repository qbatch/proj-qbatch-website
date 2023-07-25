import styled from "styled-components";

const DedicatedDeveloperWrapper = styled.section`
  .image-portion {
    padding: 95px 0px;
    padding-left: 116px;
    @media(max-width:767px){
        padding-left:0px;
        text-align: center;
    }
  }
  .title-portion{
      padding:156px 0px;
  } .hire {
    color: ${({ theme }) => theme.colors.textMedium};
    position: relative;
    margin-bottom: 6px;
    &::before {
      content: "";
      position: absolute;
      height: 1px;
      width: 24px;
      bottom: 1px;
      background-color: ${({ theme }) => theme.colors.dangerColor};
    }
  }
  .add-bottom-space {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.bodyTextVariant};
  }
  .for-furture {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeH2};
    display: inline-block;
    margin-right: -4px;
    color: ${({ theme }) => theme.colors.textMedium};
  }
  .you-deserve {
    position: relative;
    color: ${({ theme }) => theme.colors.primaryColor};
    cursor: pointer;
    &::before {
      content: "";
      position: absolute;
      height: 1px;
      width: 0;
      bottom: 1px;
      left: 17px;
      background-color: ${({ theme }) => theme.colors.dangerColor};
      animation: animate 1s linear 1s 1 normal forwards;
    }
    @keyframes animate {
      from {
        width: 0px;
      }
      to {
        width: 232px;
      }
    }
  }
  .paragraph {
    color: ${({ theme }) => theme.colors.bodyLight};
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    margin-top: 36px;
    line-height: 23px;
    margin-bottom:50px;
  }
  .add-space {
    padding-top: 25px;
    padding-bottom: 74px;
    display:flex ;
    justify-content: center;
    flex-wrap:wrap;
    .divider-heading {
      position: relative;
      color: ${({ theme }) => theme.colors.bodyLight};
      font-weight: 400;
      margin: 0 33px;
      margin-bottom:24px;
      &::after {
        content: "";
        position: absolute;
        height: 27px;
        width: 1px;
        bottom: 1px;
        right: -35px;
        background-color: ${({ theme }) => theme.colors.dividerColor};
      }
      &:last-child {
        &::after {
          display: none;
        }
      }
    }
  }
`;
export default DedicatedDeveloperWrapper;