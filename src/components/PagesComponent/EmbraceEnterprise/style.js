import styled from "styled-components";

const EmbraceEnterpriseWrapper = styled.div`
padding: 96px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
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
}
.paragraph{
  font-size: ${({ theme }) => theme.fonts.baseFontSize};
  line-height: 24px;
  margin-bottom: 72px;
}
`

export default EmbraceEnterpriseWrapper;