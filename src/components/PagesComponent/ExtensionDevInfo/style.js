import styled from "styled-components";

const ExtensionDevInfoWrapper = styled.div`
padding: 96px 0;
.wrapper{
  max-width: 932px;
  margin: auto;
  .heading{
    text-align: center;
    margin-bottom: 72px;
  }
  .info-box{
    background-color: ${({ theme }) => theme.colors.whiteColor};
    padding: 48px;
    border: 1px solid rgba(210, 217, 220, 1);
    border-radius: 24px 24px 0 24px;
    height: 100%;
    h3{
      margin-bottom: 12px;
    }
    a{
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      font-size: 14px;
      text-decoration: underline;
    }
  }
}
`

export default ExtensionDevInfoWrapper;
