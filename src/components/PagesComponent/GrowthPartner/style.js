import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const GrowthPartnerWrapper = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    padding: 120px 0;
    ${media.sm`
      padding: 40px 0;
    `}
  .growth-wrapper{
    .underline-heading{
      text-transform:  capitalize;
    }
    .heading {
      margin-bottom: 8px;
    }
    .main-heading{
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 28px;
      span {
        display: block;
        margin-bottom: 16px;
      }
    }
    .paragraph{
      line-height: 32px;
      font-weight: 400;
      max-width: 600px;
      letter-spacing: 0.2px;
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
          margin-top: 20px;
        `}
        ${media.xs`
          height: 290px;
        `}
      }
    }
    .image-portion-md{
      img{
        height: 496px;
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
        padding-left: 96px;
        ${media.md`
        padding-left: 0;
        `}
        .paragraph {
          max-width: 595px;
        }
      }
      .content-wrapper{
        justify-content: center;
        ${media.md`
        justify-content: start;
        `}
      }
    }
    .content-col{
      margin-top: 144px;
      &:first-child{
        padding-top: 0;
      }
    }
    .content-wrapper{
      height: 100%;
      display: flex;
      align-items: center;
      ${media.md`
        padding-bottom: 12px;
      `}
    }
`

export default GrowthPartnerWrapper;
