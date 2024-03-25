import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const EmbraceEnterpriseWrapper = styled.div`
padding: 96px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
${media.sm`
    padding-bottom:20px;
  `}
.heading{
  color:  ${({ theme }) => theme.colors.primaryColor};
  max-width: 570px;
  margin-bottom: 24px;
}
.content-wrapper{
  max-width: 570px;
}
.sub-heading{
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  margin-bottom: 16px;
  text-transform:initial;
}
.paragraph{
  font-size: ${({ theme }) => theme.fonts.baseFontSize};
  line-height: 24px;
  margin-bottom: 72px;
}
`

export default EmbraceEnterpriseWrapper;