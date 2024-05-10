import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const EmbraceEnterpriseWrapper = styled.div`
padding: 96px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
${media.sm`
    padding:40px 0px;
  `}
.heading{
  color:  ${({ theme }) => theme.colors.primaryColor};
  max-width: 570px;
  margin-bottom: 24px;
  ${media.sm`
  margin-bottom: 48px;
  `}
}
.content-wrapper{
  max-width: 570px;
}
.sub-heading{
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  margin-bottom: 16px;
  text-transform:initial;
  ${media.sm`
  line-height:24px;
  `}
}
.paragraph{
  font-size: ${({ theme }) => theme.fonts.baseFontSize};
  line-height: 24px;
  margin-bottom: 72px;
  ${media.sm`
  margin-bottom: 16px;
  `}
}
`

export default EmbraceEnterpriseWrapper;