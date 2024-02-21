import styled from "styled-components";

const WhatToExpectWrapper = styled.div`
padding: 96px 0;
position: relative;
background-size: cover;
background-repeat: no-repeat;
&::after{
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 100%);
}
& > div{
  position: relative;
  z-index: 2;
  text-align: center;
  .heading{
    color: ${({ theme }) => theme.colors.whiteColor};
    margin-bottom: 24px;
  }
  .paragraph{
    line-height: 32px;
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    color: ${({ theme }) => theme.colors.whiteColor};
    max-width: 980px;
    margin: auto;
  }
  .inner-content{
    margin-top: 72px;
    .inner-content-box{
      background-color: #00172D;
      padding: 32px;
      height: 100%;
      display: flex;
      flex-direction:column;
      align-items: center;
      justify-content: center;
    }
    .box-content-heading{
      font-size:  ${({ theme }) => theme.fonts.baseFontSizeLg};
      color: ${({ theme }) => theme.colors.textColor};
      max-width: 280px;
      padding-bottom: 16px;
    }
    .box-content-paragraph{
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      color: ${({ theme }) => theme.colors.whiteColor};
      max-width: 280px;
    }
  }
}
`

export default WhatToExpectWrapper;