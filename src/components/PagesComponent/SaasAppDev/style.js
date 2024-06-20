import styled from "styled-components";

const SaasAppDevWrapper = styled.div`
padding: 96px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor} ;
.heading{
  text-align: center;
  margin-bottom: 80px;
}
ul{
  list-style-type: disc;
  li{
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.textMedium} ;
    margin-bottom: 24px;
    font-weight: bold;
  }
}
img{
  background-color: ${({ theme }) => theme.colors.whiteColor} ;
  border-radius: 20px 20px 0 20px;
  margin: auto;
}
`

export default SaasAppDevWrapper;