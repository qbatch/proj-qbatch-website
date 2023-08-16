import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const GrowthPartnerWrapper = styled.div`
  .growth-wrapper{
    padding: 96px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    ${media.sm`
      padding: 40px 0;
    `}
    .underline-heading{
      text-transform:  capitalize;
    }
    .main-heading{
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 25px;
      margin-top: 20px;
    }
    .paragraph{
      line-height: 32px;
      font-weight: 400;
      max-width: 600px;
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
        ${media.sm`
          height: 400px;
        `}
        ${media.xs`
          height: 290px;
        `}
      }
    }
    .image-portion-md{
      img{
        height: 390px;
        width: 100%;
        border-radius: 32px 32px 0 32px;
        object-fit: cover;
        ${media.xs`
          height: 290px;
        `}
      }
    }
  }
    
    .content-right{
      .content{
        padding-left: 25px;
        ${media.md`
        padding-left: 0;
        `}
      }
      .content-wrapper{
        justify-content: center;
        ${media.md`
        justify-content: start;
        `}
      }
    }
    .content-col{
      padding-top: 72px;
      &:first-child{
        padding-top: 0;
      }
    }
    .content-wrapper{
      height: 100%;
      display: flex;
      align-items: center;
      ${media.md`
        padding-bottom: 25px;
      `}
      .content{
        max-width: 573px;
        margin-bottom: 10px;
      }
    }
`

export default GrowthPartnerWrapper;
