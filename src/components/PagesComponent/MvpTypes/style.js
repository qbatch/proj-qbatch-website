import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const MvpTypesWrapper = styled.div`
padding: 96px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
${media.lg`
  padding: 56px 0;
`}
.heading{
  margin-bottom: 72px;
  text-align: center;
  text-transform: none;
  ${media.lg`
    margin-bottom: 32px;
  `}
}

.inner-paragraph{
    max-width: 454px;
    color: ${({ theme }) => theme.colors.textMedium};
  }
.first-box{
  margin-bottom: 56px;
  ${media.lg`
    margin-bottom: 32px;
  `}
}
.type-list{
  margin-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  .list-heading{
    color: ${({ theme }) => theme.colors.primaryColor};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    text-transform: none;
  }
  .list-paragraph{
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.bodyTextVariant};
  }
}
`

export default MvpTypesWrapper;
