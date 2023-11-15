import styled from "styled-components";
import { media } from "../../../theme/media-mixins";
const TheySayWeSayWrapper = styled.div`
padding: 120px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
.section-row{
  --bs-gutter-x: 71px;
  --bs-gutter-y: 71px;
  align-items: center;
}
  .img-wrapper{
    display: flex;
    justify-content: end;
    align-items: center;
    height: 100%;
    .side-img{
      height: 100%;
      width: 100%;
      max-width: 574px;
      max-height: 448px;
      object-fit: cover;
      object-position: center;
      ${media.lg`
        max-width: 100%;
      `}
    }
  }
  .heading{
    color: ${({ theme }) => theme.colors.primaryColor};
    padding-bottom: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 50px;
  }
  .sub-heading{
    color: ${({ theme }) => theme.colors.gradientColor};
    padding-bottom: 26px;
    line-height: 40px;
    letter-spacing: 0.32px;
    max-width: 573px;
    a{
      text-decoration: none;
      color: inherit;
    }
  }
  .paragraph{
    line-height: 32px;
    max-width: 565px;
    letter-spacing: 0;
    margin-bottom: 0;
  }
`;
export default TheySayWeSayWrapper;
