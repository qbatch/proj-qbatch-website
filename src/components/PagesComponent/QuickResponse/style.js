import styled from "styled-components";

const QuickResponseWrapper = styled.div`
padding: 96px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor} ;
.heading{
  text-align: center;
  margin-bottom: 56px;
}
.inner-paragraph{
  min-height: 72px;
}
.quick-response-box{
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor} ;
  padding-bottom: 28px;
  height: 100%;
  .img-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F0F0F0;
    border-radius: 10px 10px 0 0;
    img{
      height: 180px;
      padding: 12px;
    }
  }
  .quick-response-inner{
    padding: 32px 24px;
  }
}
`

export default QuickResponseWrapper;