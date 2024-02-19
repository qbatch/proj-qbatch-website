import styled from "styled-components";

const SoftwareSolutionsWrapper = styled.div `
padding: 96px 0;
background-color: ${({ theme }) => theme.colors.backgroundColor};
background-image: url({Abstract});
position: relative;
.solution-bg{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.boxes-wrapper{
  padding: 72px 0;
  max-width: 1050px;
  margin: auto;
  position: relative;
  z-index: 22;
  .software-solution-box{
    height: 128px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid  ${({ theme }) => theme.colors.dividerColor};
    background-color: ${({ theme }) => theme.colors.whiteColor};
    span{
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      font-weight:  ${({ theme }) => theme.fontWeight.bold};
      padding: 32px;
      max-width: 290px;
      text-align: center;
    }
  }
}
.heading{
  max-width: 1170px;
  font-weight:  ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
  margin: auto;
  text-transform: none;
}

.inner-btn{
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      color: #fff;
      padding: 12px;
      max-width: 453px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      border-radius: 4px;
      border: none;
      background-color: ${({ theme }) => theme.colors.primaryColor};
      margin: 24px auto 32px;

    }
`

export default SoftwareSolutionsWrapper;
