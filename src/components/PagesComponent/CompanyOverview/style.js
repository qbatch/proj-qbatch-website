import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const CompanyOverviewWrapper = styled.div`
padding: 96px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor} ;
.heading{
  span{
    display: flex;
    align-items: baseline;
      gap: 16px;
      &::before{
      content: '';
      display: inline-block;
      height: 48px;
      width: 88px;
      background-color: ${({ theme }) => theme.colors.dangerColor};
      border-radius: 100px;
    }
  }
}
.sub-heading{
  margin-bottom: 6px;
  color:  ${({ theme }) => theme.colors.primaryColor} ;
}
${media.lg`
  padding: 56px 0;
  .heading{
    font-size: 40px;
    line-height: 52px;
    margin-bottom: 32px;
    span{
      align-items: center;
      &::before{
        height: 46px;
        width: 64px;
      }
    }
  }
`}
` 

export default CompanyOverviewWrapper;