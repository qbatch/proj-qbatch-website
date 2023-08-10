import styled from "styled-components";
import { media } from "../../../theme/media-mixins";
const GrowthPartnerWrapper = styled.div`
padding: 97px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};

  .underline-heading{
    color: ${({ theme }) => theme.colors.bodyText};
    font-weight: 500;
    position: relative;
    letter-spacing: 0.3px;
    text-transform: capitalize;
    &::before{
      content: "";
      position: absolute;
      height: 1px;
      width: 24px;
      bottom: -2px;
      background-color: #ED1C24;
    }
  }
  .main-heading{
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 28px;
    margin-top: 20px;
  }
  .paragraph{
    line-height: 32px;
    font-weight: 400;
    max-width: 573px;
    &:last-child{
    padding-top: 16px;
    }
    ${media.md`
    max-width: 100%;
    `}
  }
  .image-portion{
    img{
      height: 496px;
      width: 100%;
      border-radius: 32px 32px 0 32px;
      margin-top: 46px;
      object-fit: cover;
    }
  }
`

export default GrowthPartnerWrapper;