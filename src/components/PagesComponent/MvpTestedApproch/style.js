import styled from "styled-components";

const MvpTestedApprochWrapper = styled.div`
padding: 96px 0;
border-bottom:1px solid ${({ theme }) => theme.colors.dividerColor};
.heading{
  margin-bottom: 24px;
}
.paragraph{
  max-width: 692px;
  margin-bottom: 72px;
}
.inner-wrapper{
  display: flex;
  align-items: start;
  gap: 24px;
  padding-bottom: 32px;
  margin-bottom: 48px;
  border-bottom:1px solid ${({ theme }) => theme.colors.dividerColor};
  .inner-content{
    max-width: 572px;
  }
  .inner-paragraph{
    margin-bottom: 0;
  }
  .inner-icon{
    height: 48px;
    width: 48px;
    min-width: 48px;
  }
}
`

export default MvpTestedApprochWrapper;