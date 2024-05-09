import styled from "styled-components";
import { media } from "../../../theme/media-mixins";


const GuaranteeBannerWrapper = styled.div`
background: url('/guarantee-banner.svg');
background-size: cover;
  background-position: center;
  padding: 96px 0;
  ${media.lg`
  padding: 56px 0;
`}
  .inner-wrapper{
    text-align: center;
    max-width: 1170px;
    margin: auto;
  }
  .subtitle{
    span{
      color: ${({ theme }) => theme.colors.whiteColor};
      font-weight: ${({ theme }) => theme.fontWeight.light};
    }
  }
  .title{
    padding: 24px 0;
    .heading{
      color: ${({ theme }) => theme.colors.textColor};
    }
  }
  .paragraph{
    margin: auto auto 72px;
    max-width: 930px;
    ${media.lg`
      margin-bottom: 32px;
    `}
    span{
      color: ${({ theme }) => theme.colors.whiteColor};
      font-weight: ${({ theme }) => theme.fontWeight.light};
    }
  }
`

export default GuaranteeBannerWrapper;