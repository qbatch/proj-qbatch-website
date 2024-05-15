import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const DevelopmentProcessWrapper = styled.div`
padding: 96px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
${media.sm`
padding: 56px 0px;
`}
.heading{
  max-width: 811px;
  padding-bottom: 72px;
  ${media.sm`
  padding-bottom: 48px;
`}
}
.row{
    --bs-gutter-y: 24px;
    --bs-gutter-x: 24px;
  }
  .box{
    padding: 32px;
    border: 1px solid ${({ theme }) => theme.colors.dividerColor};
    background-color: #fff;
    border-radius: 24px 24px 0 24px;
    height: 100%;
    .box-header{
      display: flex;
      gap: 32px;
      align-items: center;
      margin-bottom: 32px;
      ${media.customBrakePoint`
      flex-direction:column;
      `}
      h3.text-h3{
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
        line-height: 40px;
      }
      img{
        width: 152px;
        height: 112px;
        object-fit: cover;
      }
    }
    h4{
      color: ${({ theme }) => theme.colors.primaryColor};
      padding-bottom: 8px;
      ${media.sm`
      padding-bottom: 0px;
      `}
    }
  }

`;

export default DevelopmentProcessWrapper;
