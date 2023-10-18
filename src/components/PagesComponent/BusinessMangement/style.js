import styled from "styled-components";
import { media } from "../../../theme/media-mixins" 

const BusinessMangementWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 120px 0;
  h2 {
    color: ${({ theme }) => theme.colors.whiteColor};
    line-height: 52px;
    max-width: 828px;
    margin: 0 auto 73px;
    text-align: center;
  }
  .hover-box {
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    color: ${({ theme }) => theme.colors.whiteColor};
    padding: 48px 32px 24px 32px;

    cursor: pointer;
    h4 {
      color: ${({ theme }) => theme.colors.dividerColor};
      margin-bottom: 0;
    }
    .description {
      height: 0;
      opacity: 0;
      transition: height 0.5s, opacity 0.5s;
    }
    &:hover {
      .description {
        height: 136px;
        opacity: 1;
      }
    }
  }
`
export default BusinessMangementWrapper;