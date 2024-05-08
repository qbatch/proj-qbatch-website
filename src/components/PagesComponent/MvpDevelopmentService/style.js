import styled from "styled-components";

const MvpDevelopmentServiceWrapper = styled.div`
padding: 96px 0;
.heading{
  margin-bottom: 80px;
}
.service-box{
  border:1px solid ${({ theme }) => theme.colors.dividerColor};
  border-radius: 24px 24px 0 24px;
  padding: 48px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  height: 100%;
  .service-box-header{
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 28px;
    img{
      height: 60px;
      width: 60px;
    }
  }
}
`

export default MvpDevelopmentServiceWrapper;