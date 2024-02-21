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
  }
  .inner-content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 48px;
    margin-top: 72px;
  }
  .inner-content-circle{
    height: 184px;
    width: 184px;
    border-radius: 200px;
    border: 2px solid  ${({ theme }) => theme.colors.primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    background-color: #00172D;
    box-shadow: 4px 4px 24px 0px #00000059;
    h3{
      max-width: 90px;
      margin-bottom: 0;
      line-height: 24px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    span{
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      color: ${({ theme }) => theme.colors.whiteColor};font-weight: ${({ theme }) => theme.fontWeight.normal};
      &.circle-content-heading{
        font-size: ${({ theme }) => theme.fonts.baseFontSizeH3};
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
        color: ${({ theme }) => theme.colors.textColor};
        display: block;
      }
    }
  }
}
`

export default WhatToExpectWrapper;