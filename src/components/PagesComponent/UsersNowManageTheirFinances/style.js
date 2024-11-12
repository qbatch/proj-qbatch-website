import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

export const UsersNowManageTheirFinancesWrapper = styled.div`
padding: 96px;
background: ${({ theme }) => `url('/bg-fin-teck.svg') no-repeat center / cover, ${theme.colors.secondaryColor}`};
${media.sm`
  padding: 56px 24px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-image:none;
`}
h2{
  color: ${({theme}) => theme.colors.whiteColor};
font-size: ${({theme}) => theme.fonts.baseFontSizeH2};
font-weight: 700;
line-height: 52px;
text-align: left;
margin: 0;
max-width: 921px;
${media.sm`
  font-size: ${({theme}) => theme.fonts.baseFontSizeLg};
  line-height: 32px;
  text-align:center;
`}
}
button{
  color: ${({theme}) => theme.colors.whiteColor};
  margin-top: 32px;
  &:hover{
  color: ${({theme}) => theme.colors.whiteColor};

  }
}

`;
