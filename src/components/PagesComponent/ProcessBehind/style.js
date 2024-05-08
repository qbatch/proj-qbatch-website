import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ProcessWrapper = styled.div`
  padding: 96px 0;
  ${media.sm`
     padding: 40px 0px;
  `}
  .sub-heading{
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    margin-bottom: 4px;
    display: block;
  }
  .heading {
    max-width: 550px;
    line-height: 52px;
    font-weight: 700;
    display: block;
    margin-bottom: 24px;
    ${media.sm`
        line-height: 32px;
      `}
  }
  .process-behind-wrapper{
    display: flex;
    align-items: center;
    gap: 32px;
    ${media.md`
      gap: 20px;
    `}
  }
  .process-img{
    max-height: 390px;
    height: 100%;
  }
  .process-behind-content-wrapper{
    display: flex;
    flex-direction: column;
    gap: 38px;
    p{
      margin-bottom: 0;
    }
  }
`;
export default ProcessWrapper;
