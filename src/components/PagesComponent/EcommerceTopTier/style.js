import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const EcommerceTopTierWrapper = styled.div`
padding: 96px 0;
border-bottom:1px solid ${({ theme }) => theme.colors.dividerColor};
${media.sm`
padding: 40px 0;
`}
.header{
  max-width: 1130px;
  margin: auto;
  margin-bottom: 72px;

h2{
font-size: 40px;
font-weight: 700;
line-height: 52px;
text-align: center;
color: ${({ theme }) => theme.colors.primaryColor};
margin-bottom: 24px;
${media.lg`
    font-size: 32px;
    font-weight: 700;
      `}
      ${media.sm`
        font-size: 24px;
        line-height: 32px;
      `}
      ${media.mobile`
            text-align:left;
            `}
}
p{
font-weight: 400;
text-align: center;
color: #5F737C;
${media.lg`
    font-size: 16px;
    line-height: 24px;

      `}
      ${media.sm`
        font-size: 14px;
        line-height: 20px;
      `}
      ${media.mobile`
            text-align:left;
            `}
}
}

.box{
  border: 1px solid ${({ theme }) => theme.colors.dividerColor};
  border-radius: 24px;
  background-color:  ${({ theme }) => theme.colors.whiteColor};
  padding: 32px;
  .box-header{
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 40px;
    .box-heading{
      color: ${({ theme }) => theme.colors.primaryColor};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      margin-bottom: 0;
    }
  }
  .box-body{
    h4{
      margin-bottom: 12px;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
    p{
      margin-bottom: 24px;
    }
  }
}
.box-wrapper{
  display: flex;
  flex-direction: column;
  .box-body{
    h4{
      margin-bottom: 4px;
    }
  }
}
`;
export { EcommerceTopTierWrapper }
