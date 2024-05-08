import styled from "styled-components";

const MvpBoxesWrapper = styled.div`
padding: 96px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
.heading{
  padding-bottom: 24px;
  text-align: center;
  max-width: 768px;
  margin: auto;
}
.paragraph{
  padding-bottom: 56px;
  text-align: center;
  max-width: 930px;
  margin: auto;
}
.inner-box{
  padding: 32px;
  border-bottom: 1px solid #D2D9DC;
  height: 100%;
  .inner-header{
    padding-bottom: 12px;
  }
}
`

export default MvpBoxesWrapper;