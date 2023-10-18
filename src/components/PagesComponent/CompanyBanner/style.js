import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const BannerWrapper = styled.div`
  background-image: url("/abouUs-banner.svg");
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  background-position: 100% 0;
  background-repeat: no-repeat;
  padding: 132px 0 98px 0;
  ${media.sm`
    padding: 40px 0;
  `}
  p{
  color: ${({ theme }) => theme.colors.whiteColor};
  font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
  line-height:32px; 
  max-width: 929px;
  margin-top: 24px; 
  }
  .banner-button{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button{
          margin-right: 116px;
          margin-top: 37px;
    }
  }
`;
const H1 = styled.h1`
  font-size:96px;
  color: ${({ theme }) => theme.colors.whiteColor};
  line-height: 102px;
  margin-bottom: 0px;
  &.color-change{
      color: ${({ theme }) => theme.colors.bodyLight};
  }
`

export  {BannerWrapper,H1};
