import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ExtensionDevInfoWrapper = styled.div`
padding: 96px 0;
${media.md`
  padding: 56px 0;
`}
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
    .inner-text{
      margin-bottom: 12px;
      text-transform: none;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      color: ${({ theme }) => theme.colors.bodyTextVariant};
    }
    a{
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      font-size: 14px;
      text-decoration: underline;
    }
  }
}

${media.md`
  padding: 56px 0;
  .wrapper{
    .heading{
      margin-bottom: 24px;
    }
  }
`}
`

export default ExtensionDevInfoWrapper;
